@echo off
echo ========================================
echo   Servidor Local - Rutina de 2026
echo ========================================
echo.

REM Verificar si Node.js está instalado
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo ERROR: Node.js no esta instalado
    echo.
    echo Por favor instala Node.js desde: https://nodejs.org/
    echo O usa Python ejecutando: python -m http.server 8000
    echo.
    pause
    exit /b 1
)

echo Instalando servidor HTTP simple...
call npm install -g http-server 2>nul

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

echo ========================================
echo   SERVIDOR INICIADO!
echo ========================================
echo.
echo   Accede desde tu PC:
echo   http://localhost:8080
echo.
echo   Accede desde tu TABLET:
echo   http://%IP%:8080
echo.
echo ========================================
echo.
echo Presiona Ctrl+C para detener el servidor
echo.

http-server -p 8080 -c-1
