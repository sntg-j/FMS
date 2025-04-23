@echo off
ECHO %CD%
CD ".\client"
ECHO %CD%
CALL npm run web -s -c