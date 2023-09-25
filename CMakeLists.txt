cmake_minimum_required(VERSION 3.25)

# This is your project statement. You should always list languages;
# Listing the version is nice here since it sets lots of useful variables
project(
  ARGui
  VERSION 1.0
  LANGUAGES CXX)

# C++ Options
set(CMAKE_CXX_STANDARD 20)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_CXX_EXTENSIONS OFF)

# Export compile commands for IDE that can integrate with them.
set(CMAKE_EXPORT_COMPILE_COMMANDS ON)

# If you set any CMAKE_ variables, that can go here.
# (But usually don't do this, except maybe for C++ standard)

# Find packages go here.
find_package(Qt6 REQUIRED COMPONENTS Core Gui Widgets)
set(CMAKE_AUTOMOC ON)
set(CMAKE_AUTORCC ON)
set(CMAKE_AUTOUIC ON)

# Link each target with other targets or add options, etc.

# Adding something we can run - Output name matches target name
set (TARGET_NAME arapplication)
add_executable(${TARGET_NAME} ARAppGUI.cpp)

# Make sure you link your targets with this command. It can also link libraries and
# even flags, so linking a target that does not exist will not give a configure-time error.
target_link_libraries(${TARGET_NAME} PUBLIC Qt6::Core Qt6::Gui Qt6::Widgets)
