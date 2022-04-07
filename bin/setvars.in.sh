#!/bin/bash

SCRIPT="$0"

# SCRIPT may be an arbitrarily deep series of symlinks. Loop until we have the concrete path.
while [ -h "$SCRIPT" ] ; do
  ls=`ls -ld "$SCRIPT"`
  # Drop everything prior to ->
  link=`expr "$ls" : '.*-> \(.*\)$'`
  if expr "$link" : '/.*' > /dev/null; then
    SCRIPT="$link"
  else
    SCRIPT=`dirname "$SCRIPT"`/"$link"
  fi
done

# graphdb dist directory
GDB_DIST=`dirname "$SCRIPT"`/..

# make GDB_DIST absolute
GDB_DIST=`cd "$GDB_DIST"; pwd`

if [ -d "$GDB_DIST/jdk" ]; then
    # Our bundled JDK
    JAVA="$GDB_DIST/jdk/bin/java"
elif [ ! -z "$JAVA_HOME" ]; then
    JAVA="$JAVA_HOME/bin/java"
else
    JAVA=`which java`
fi

if [ ! -f "$JAVA" ]; then
   echo "Could not find Java binary. Please install Java in your PATH or set JAVA_HOME"
   exit 1
fi

GDB_CLASSPATH="$GDB_DIST/lib/*"

# Supported Java versions
SUPPORTED_JAVA_VERSIONS=(8 11 12)

function get_supported_java_versions_human {
  local num_java_versions=${#SUPPORTED_JAVA_VERSIONS[@]}

  for ((i=0; i<$num_java_versions; i++)); do
    echo -n ${SUPPORTED_JAVA_VERSIONS[$i]}
    if [[ $i -lt $(($num_java_versions-2)) ]]; then
      echo -n ", "
    elif [[ $i -lt $(($num_java_versions-1)) ]]; then
        echo -n " or "
    fi
  done
  echo
}

set -o pipefail
JAVA_VERSION=$("$JAVA" -version 2>&1 | awk 'sub(/^[^"]+"|"[^"]+$/, "") && gsub(/^1\.|\..+/, "")')
if [ $? -eq 126 ]; then
    echo "Found Java binary in $JAVA but it's not executable, check your Java installation"
    exit 1
fi
if [ ! $? -eq 0 -o -z "$JAVA_VERSION" ]; then
    echo "Unable to determine Java version, check that $JAVA is actually a Java binary"
    exit 1
fi
set +o pipefail

if [[ ! " ${SUPPORTED_JAVA_VERSIONS[*]} " =~ " $JAVA_VERSION " ]]; then
    echo "This GraphDB distribution requires Java $(get_supported_java_versions_human) but you have Java $JAVA_VERSION"
    echo "Execution will continue in 5 seconds"
    sleep 5
fi

# Array of Java version-specific options to be used for both tools and GDB
JAVA_VERSION_OPTS=()

# Include Java exports for Java 9+
if [ "$JAVA_VERSION" -ge 9 ]; then
	JAVA_VERSION_OPTS+=(--add-exports jdk.management.agent/jdk.internal.agent=ALL-UNNAMED --add-opens java.base/java.lang=ALL-UNNAMED)
fi

# By default the -XX:MaxDirectMemorySize is limited to the heap size
if [ "$GDB_JAVA_32BIT" != "true" ]; then
	JAVA_VERSION_OPTS+=("-XX:MaxDirectMemorySize=128G")
fi

source "`dirname "$0"`/graphdb.in.sh"

call_java() {
    "$JAVA" "${JAVA_OPTS_ARRAY[@]}" $GDB_JAVA_OPTS -Dgraphdb.dist="$GDB_DIST" -cp "$GDB_CLASSPATH" "$@"
}


