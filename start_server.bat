@echo off
echo ========================================
echo   Servidor Local - Rutina de 2026
echo ========================================
echo.
echo Iniciando servidor...
echo.

REM Obtener la IP local
for /f "tokens=2 delims=:" %%a in ('ipconfig ^| findstr /c:"IPv4"') do (
    set IP=%%a
    goto :found
)
:found
set IP=%IP:~1%

echo Servidor iniciado exitosamente!
echo.
echo ========================================
echo   ACCESO DESDE TU TABLET:
echo ========================================
echo.
echo   http://%IP%:8000
echo.
echo ========================================
echo.
echo Presiona Ctrl+C para detener el servidor
echo.

REM Iniciar servidor Python (intenta Python 3 primero, luego Python 2)
python -m http.server 8000 2>nul
if errorlevel 1 (
    python -m SimpleHTTPServer 8000 2>nul
    if errorlevel 1 (
        echo.
        echo ERROR: Python no esta instalado
        echo Por favor instala Python desde: https://www.python.org/downloads/
        echo.
        pause
    )
)
