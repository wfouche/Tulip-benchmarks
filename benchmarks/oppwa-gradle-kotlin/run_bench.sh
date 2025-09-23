./gradlew clean
./gradlew run --args="--config=oppwa_config.json" --console=colored
echo ""
#w3m -dump -cols 205 app/build/reports/tulip/oppwa_report.html
lynx -dump -width 205 app/build/reports/tulip/oppwa_report.html
ls -l app/app.log
