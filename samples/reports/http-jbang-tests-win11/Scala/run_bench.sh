#!/bin/bash
rm -f benchmark_report.html
scala-cli io/tulip/App.scala io/tulip/ScalaHttpUser.scala
echo ""
#w3m -dump -cols 205 benchmark_report.html
lynx -dump -width 205 benchmark_report.html
#jbang run asciidoc@wfouche benchmark_config.adoc
