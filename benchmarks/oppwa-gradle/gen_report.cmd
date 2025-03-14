call .\gradlew -q run --args="--result oppwa_output.json"
@echo off
echo.
..\..\platform\msys64\bin\w3m.exe -dump -cols 200 app\oppwa_report.html
