@echo off

:: Define the path to the file.
:: Note: The script assumes 'app\' is relative to where the script is run.
set "LOG_FILE=app\app.log"

:: Check if the file exists using the IF EXIST command.
if exist "%LOG_FILE%" (
    echo The file "%LOG_FILE%" was found.
    
    :: Use 'del' to delete the file. The /F switch forces deletion of read-only files,
    :: and /Q suppresses the deletion prompt.
    del /F /Q "%LOG_FILE%"
    
    :: Check the error level ($? in shell) to see if the deletion was successful
    if not errorlevel 1 (
        echo Success: "%LOG_FILE%" has been deleted.
    ) else (
        echo Error: Could not delete "%LOG_FILE%".
    )
) else (
    echo File not found: "%LOG_FILE%". No action needed.
)

call .\gradlew -q run --args="--config oppwa_config.json" --console=colored
echo.
lynx -dump -width 205 .\app\build\reports\tulip\oppwa_report.html
dir app\app.log
