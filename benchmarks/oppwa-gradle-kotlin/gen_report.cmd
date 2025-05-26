call .\gradlew -q run --args="--result oppwa_output.json --config=oppwa_config.json"
@echo off
echo.
..\..\..\Tulip\platform\msys64\bin\w3m.exe -dump -cols 200 app\build\reports\tulip\oppwa_report.html
