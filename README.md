# WeatherObserver

## Front run
> npm install -g @angular/cli (install globally angular command-line interface) <br>
> cd front <br>
> ng serve --open <br>

## Server run
> cd: server/src/main/resources <br>
> git describe --abbrev=0 > git_version.txt <br>
> cd ../../../ <br>
> mvn spring-boot:run <br>

## Device run
To create your own measurment source you must have some hardware: any version of NodeMCU board and BMP-280 temperature and pressure sensor.<br>
You should make such steps to setup and run your device:<br>
1. Connect sensor and board together via I2C and supply pins on each device;<br>
2. Setup Arduino IDE and ESP8266 support in "Board manager";<br>
3. Open and edit firmware file with .ino extention in /device/ directory by adding your server address, your router Wi-Fi SSID and password;<br>
4. Connect board to your host PC;<br>
5. Select your board version, port and parametrs in "Properties" tab;<br>
6. Just tap "Upload" button and wait while board is flashing;<br>
**Success!** <br>
To check board logs use "Serial monitor" (Ctrl+Shift+M in Arduino IDE).<br>
## Enjoy!