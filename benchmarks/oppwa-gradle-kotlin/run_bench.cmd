@echo off

chcp 65001 > nul

set "LOG_FILE=.\app\app.log"

REM Check if the file exists using the IF EXIST command.
if exist "%LOG_FILE%" (
    del %LOG_FILE%
    echo Success: "%LOG_FILE%" has been deleted.
)

call .\gradlew -q run --args="--config oppwa_config.json"

lynx -dump -width 205 .\app\build\reports\tulip\oppwa_report.html

dir app\app.log
