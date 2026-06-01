@echo off
cd /d "C:\Users\kallw\OneDrive\Documents\New project"
set "npm_config_cache=C:\Users\kallw\OneDrive\Documents\New project\.npm-cache"
set "XDG_DATA_HOME=C:\Users\kallw\OneDrive\Documents\New project\.vercel-xdg"
set "XDG_CONFIG_HOME=C:\Users\kallw\OneDrive\Documents\New project\.vercel-config"
set "LOCALAPPDATA=C:\Users\kallw\OneDrive\Documents\New project\.vercel-local"
set "APPDATA=C:\Users\kallw\OneDrive\Documents\New project\.vercel-roaming"
C:\PROGRA~1\nodejs\npx.cmd --yes vercel@latest login
pause
