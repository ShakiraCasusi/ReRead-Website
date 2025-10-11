@echo off
REM ========================================
REM Re;Read Website - Apache Setup Script
REM ========================================
REM This script helps copy your project to Apache htdocs
REM and provides quick access commands

echo.
echo ================================================
echo Re;Read Website - Apache Setup Helper
echo ================================================
echo.

REM Check if XAMPP is installed
if exist "C:\xampp\htdocs\" (
    echo [OK] XAMPP detected at C:\xampp\
    set HTDOCS_PATH=C:\xampp\htdocs\reread
    goto :copy_files
)

REM Check if WAMP is installed
if exist "C:\wamp\www\" (
    echo [OK] WAMP detected at C:\wamp\
    set HTDOCS_PATH=C:\wamp\www\reread
    goto :copy_files
)

REM Check if Apache is installed standalone
if exist "C:\Apache24\htdocs\" (
    echo [OK] Apache detected at C:\Apache24\
    set HTDOCS_PATH=C:\Apache24\htdocs\reread
    goto :copy_files
)

REM No Apache installation found
echo [ERROR] No Apache installation found!
echo.
echo Please install one of the following:
echo   1. XAMPP - https://www.apachefriends.org/
echo   2. WAMP - https://www.wampserver.com/
echo   3. Apache HTTP Server - https://httpd.apache.org/
echo.
echo Or manually specify htdocs path below.
echo.
set /p HTDOCS_PATH="Enter your htdocs path (or press Ctrl+C to cancel): "

:copy_files
echo.
echo Target directory: %HTDOCS_PATH%
echo.

REM Ask for confirmation
set /p CONFIRM="Copy project to Apache htdocs? (Y/N): "
if /i not "%CONFIRM%"=="Y" (
    echo Operation cancelled.
    goto :end
)

echo.
echo Copying files...

REM Create directory if it doesn't exist
if not exist "%HTDOCS_PATH%" mkdir "%HTDOCS_PATH%"

REM Copy all files
xcopy "%~dp0*" "%HTDOCS_PATH%\" /E /I /Y /EXCLUDE:%~dp0setup_apache.bat

if %ERRORLEVEL% EQU 0 (
    echo.
    echo [SUCCESS] Files copied successfully!
    echo.
    echo ================================================
    echo Next Steps:
    echo ================================================
    echo.
    echo 1. Start Apache Server:
    if exist "C:\xampp\" (
        echo    - Open XAMPP Control Panel
        echo    - Click "Start" next to Apache
    ) else (
        echo    - Start Apache service
    )
    echo.
    echo 2. Open your website:
    echo    http://localhost/reread/index.html
    echo.
    echo 3. Test Bootstrap components
    echo    - Check if styles are applied
    echo    - Test navigation menu
    echo    - Test buttons and forms
    echo.
    echo ================================================
    echo.
    
    REM Ask if user wants to open browser
    set /p OPENBROWSER="Open website in browser now? (Y/N): "
    if /i "%OPENBROWSER%"=="Y" (
        start http://localhost/reread/index.html
    )
) else (
    echo.
    echo [ERROR] Failed to copy files!
    echo Please check permissions and try again.
)

:end
echo.
echo Press any key to exit...
pause >nul
