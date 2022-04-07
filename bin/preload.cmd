@echo off

call "%~dp0"\graphdb-java.in.cmd -Xmx12g -Djdk.xml.entityExpansionLimit=0 -Dgraphdb.page.cache.size=16m com.ontotext.graphdb.loadrdf.PreloadData %*
