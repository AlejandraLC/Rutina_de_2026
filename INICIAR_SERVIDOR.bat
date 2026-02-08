@echo off
echo Iniciando servidor...
powershell -ExecutionPolicy Bypass -File "%~dp0start_server_simple.ps1"
pause
