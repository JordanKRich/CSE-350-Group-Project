rmdir /s /q build
cmake -S . -B build -DCMAKE_BUILD_TYPE=Release -DCMAKE_INSTALL_PREFIX=install -G Ninja
cmake --build build --config Release -j6 --clean-first

windeployqt --release --dir %CD%\bundle\bin %CD%\build\arapplication.exe