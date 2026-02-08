@echo off
echo ========================================
echo   VERIFICACION DEL SERVIDOR
echo ========================================
echo.

echo [1/4] Verificando IP local...
for /f "tokens=2 delims=:" %%a in ('ipconfig ^| findstr /c:"IPv4"') do (
    set IP=%%a
    goto :found
)
:found
set IP=%IP:~1%
echo    IP detectada: %IP%
echo.

echo [2/4] Verificando puerto 8080...
netstat -an | findstr ":8080" | findstr "LISTENING" >nul
if %errorlevel% equ 0 (
    echo    ✓ Puerto 8080 esta ACTIVO
) else (
    echo    ✗ Puerto 8080 NO esta activo
    echo    Inicia el servidor primero con: npx -y http-server -p 8080 -c-1
    pause
    exit /b 1
)
echo.

echo [3/4] Probando conexion local...
curl -s http://localhost:8080 >nul 2>&1
if %errorlevel% equ 0 (
    echo    ✓ Servidor responde correctamente
) else (
    echo    ✗ Servidor no responde
)
echo.

echo ========================================
echo   INFORMACION PARA TU TABLET:
echo ========================================
echo.
echo   Abre el navegador en tu tablet y ve a:
echo.
echo   http://%IP%:8080
echo.
echo ========================================
echo.
echo Si no funciona desde la tablet:
echo 1. Verifica que esten en la misma red WiFi
echo 2. Revisa la guia de diagnostico (diagnostico.md)
echo 3. Prueba desactivar temporalmente el firewall
echo.
pause
