#!/bin/bash
rm -f benchmark_report.html
#export JBANG_JAVA_OPTIONS="-Xmx2g -XX:+UseZGC -XX:+ZGenerational"
jbang run io/tulip/App.java
echo ""
#w3m -dump -cols 205 benchmark_report.html
lynx -dump -width 205 benchmark_report.html
#jbang run asciidoctorj@asciidoctor benchmark_config.adoc
#jbang export fatjar io/tulip/App.java
