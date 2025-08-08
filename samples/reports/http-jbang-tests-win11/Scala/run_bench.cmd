if exist benchmark_report.html del benchmark_report.html
scala-cli io\tulip\App.scala io\tulip\ScalaHttpUser.scala
@echo off
echo.
REM call w3m.exe -dump -cols 205 benchmark_report.html
REM lynx.exe -dump -width 205 benchmark_report.html
start benchmark_report.html
REM jbang asciidoc@wfouche benchmark_config.adoc
REM start benchmark_config.html
