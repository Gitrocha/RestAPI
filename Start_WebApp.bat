@echo off
title Iniciando a API.
echo .............................................................
echo ................. A API vai iniciar .........................
echo .............................................................
echo
env\Scripts\activate && python Main/startapp.py runserver --host 127.0.0.1 --port 5000
echo .............................................................
echo ................. O Front vai iniciar........................
echo .............................................................
echo
cd Front-React/ui-react && yarn start