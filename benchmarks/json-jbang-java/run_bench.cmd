if exist benchmark_report.html del benchmark_report.html
REM JBANG_JAVA_OPTIONS=-Xmx2g -XX:+UseZGC -XX:+ZGenerational
call jbang run io\tulip\App.java
@echo off
echo.
REM w3m.exe -dump -cols 205 benchmark_report.html
REM lynx.exe -dump -width 205 benchmark_report.html
start benchmark_report.html
REM jbang run asciidoctorj@asciidoctor benchmark_config.adoc
REM start benchmark_config.html
REM jbang export fatjar io\tulip\App.java
