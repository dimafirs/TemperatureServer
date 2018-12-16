#include <ESP8266HTTPClient.h>
#include <ESP8266WiFi.h>
static const char *wlan_ssid = "helloBitch";
static const char *wlan_pass = "lieBitch";
static const char *serv_enp = "http://192.168.1.208:8080/device/measurement/new";
void setup() {
 
  Serial.begin(115200);                 //Serial connection
  WiFi.begin(wlan_ssid, wlan_pass);   //WiFi connection
 
  while (WiFi.status() != WL_CONNECTED) {  //Wait for the WiFI connection completion
 
    delay(500);
    Serial.println("Waiting for connection");
 
  }
}

void loop() {
  HTTPClient http;
  http.begin(serv_enp);
  http.addHeader("MEASURMENTS-FROM-BOARD", "text/plain");
  int http_code = http.POST("temperature=-7; pressure=757");
  String payload = http.getString();
  http.end();
  Serial.printf("Sent POST request\n http_code=%d\n", http_code);
  Serial.println("Payload - " + payload);
  delay(60000);
}
