call .\gradlew -q run --args="--config oppwa_config.json"
@echo off
echo.
lynx -dump -width 205 .\app\build\reports\tulip\oppwa_report.html
