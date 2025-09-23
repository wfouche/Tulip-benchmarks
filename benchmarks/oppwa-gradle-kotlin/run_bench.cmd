call .\gradlew -q run --args="--config oppwa_config.json" --console=colored
@echo off
echo.
lynx -dump -width 205 .\app\build\reports\tulip\oppwa_report.html
dir app\app.log
