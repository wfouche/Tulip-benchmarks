#!/bin/bash
rm -f benchmark_report.html
#export JBANG_JAVA_OPTIONS="-server -Xms2g -Xmx2g -XX:+UseZGC -XX:+ZGenerational"
#jbang run Jython.java benchmark.py
jbang run jython-cli@jython benchmark.py
echo ""
#w3m -dump -cols 205 benchmark_report.html
lynx -dump -width 205 benchmark_report.html
#jbang run asciidoc@wfouche benchmark_config.adoc
