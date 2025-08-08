if exist benchmark_report.html del benchmark_report.html
REM JBANG_JAVA_OPTIONS=-server -Xms2g -Xmx2g -XX:+UseZGC -XX:+ZGenerational
REM call jbang run Jython.java benchmark.py
call jbang run jython-cli@jython benchmark.py
@echo off
echo.
REM call w3m.exe -dump -cols 205 benchmark_report.html
REM lynx.exe -dump -width 205 benchmark_report.html
start benchmark_report.html
REM jbang run asciidoc@wfouche benchmark_config.adoc
REM start benchmark_config.html
