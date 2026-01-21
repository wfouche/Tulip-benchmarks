rd/q/s io
del app.log
del logback.xml
del view*.cmd
del view*.sh
del run*.cmd
del run*.sh
del benchmark_*.*
del .sdkmanrc
rd/q/s .asciidoctor
rd/q/s benchmark_report
del wfd0.svg
del json_report.py
set "TARGET_FOLDER=io\tulip\.bsp"
if exist "%TARGET_FOLDER%" (
    rmdir /s /q "%TARGET_FOLDER%"
)
set "TARGET_FOLDER=io\tulip\.scala-build"
if exist "%TARGET_FOLDER%" (
    rmdir /s /q "%TARGET_FOLDER%"
)
