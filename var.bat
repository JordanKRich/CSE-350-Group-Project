@ECHO OFF
CALL "C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Auxiliary\Build\vcvarsall.bat" amd64
REM Set up Qt6 variables
SET PATH=C:\QT\6.5.2\msvc2019_64\bin;%PATH%