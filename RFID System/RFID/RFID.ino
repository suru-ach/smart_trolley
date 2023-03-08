#include<WiFi.h>
#include<WiFiClient.h>
#include <HTTPClient.h>
#include <Wire.h>
#include <SPI.h>
#include <MFRC522.h>

const char *ssid = "Airtel_9880156393";
const char *password = "air01575";
const char *host = "http://192.168.1.6:8000/cart";
WiFiClient wifiClient;
HTTPClient http;
void initWiFi() {
  WiFi.mode(WIFI_OFF);        //Prevents reconnection issue (taking too long to connect)
  delay(1000);
  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, password);
  Serial.print("Connecting to WiFi ..");
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print('.');
    delay(1000);
  }
  Serial.println(WiFi.localIP());
}
void setup() {
  Serial.begin(9600);
  initWiFi();
}

void loop() {
  // put your main code here, to run repeatedly:
  String postData = "{\"api_key\":\"tPmAT5Ab3j7F9\",\"sensor\":\"BME280\",\"value1\":\"24.25\",\"value2\":\"49.54\",\"value3\":\"1005.14\"}";
  String server = "http://192.168.1.6/cart";
  http.begin(wifiClient, server);              //Specify request destination
    http.addHeader("Content-Type", "application/x-www-form-urlencoded");   //Send the request
    http.addBody("barcode", "123");
  String payload = http.getString();    //Get the response payload

  //Print HTTP return code
  int httpCode = http.POST(postData);
  Serial.println(httpCode);
  Serial.println(http.getString());
  //Print request response payload

  //Close connection

  http.end();
  delay(2000);
}
