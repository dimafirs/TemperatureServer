#include <DHTesp.h>
#include <ESP8266HTTPClient.h>
#include <ESP8266WiFi.h>

static const int  dht_pin = 4;
static const char *wlan_ssid = "helloBitch";
static const char *wlan_pass = "lieBitch";
static const char *serv_enp = "http://192.168.1.127:8080/device/measurement/new";

DHTesp sensor;

void setup() {
 
  Serial.begin(115200);                 //Serial connection
  WiFi.begin(wlan_ssid, wlan_pass);     //WiFi connection
  sensor.setup(dht_pin, DHTesp::DHT22); //Sensor initializing
  while (WiFi.status() != WL_CONNECTED) {  //Wait for the WiFI connection completion
    delay(500);
    Serial.println("Waiting for connection");
  }
}

void loop() {
  struct TempAndHumidity values = sensor.getTempAndHumidity();
  String content = "temperature=";
  content.concat(String((int) values.temperature));
  content.concat("&humidity=");
  content.concat(String((int) values.humidity));
  Serial.println(content);
  
  HTTPClient http;
  http.begin(serv_enp);
  http.addHeader("Content-Type", "application/x-www-form-urlencoded");
  while(200 != http.POST(content)){
    delay(3000);
  }
  http.end();
  
  String payload = http.getString();
  Serial.println("Payload - " + payload);

  //It's totally wrongway to wait 10 mins, but I don't want to use power-saving modes
  delay(600000);
}
