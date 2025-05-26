call .\gradlew -q run --args="--result oppwa_output.json --config=oppwa_config.json"
@echo off
echo.
lynx -dump -width 200 app\build\reports\tulip\oppwa_report.html
