#include<WiFi.h>
#include<WiFiClient.h>
#include <WebServer.h>
#include <HTTPClient.h>
#include <SPI.h>
#include <MFRC522.h>


#define RST_PIN         22         // Configurable, see typical pin layout above
#define SS_PIN          21         // Configurable, see typical pin layout above

MFRC522 mfrc522(SS_PIN, RST_PIN);   // Create MFRC522 instance

//ENTER YOUR WIFI SETTINGS
const char *ssid = "Airtel_9880156393";  
const char *password = "air01575";
const char *host = "http://192.168.1.6:8000/api/addProduct"; 
WiFiClient wifiClient;



void setup() {
    delay(1000);  
  Serial.begin(9600);
  SPI.begin(); 
  mfrc522.PCD_Init();
  
  WiFi.mode(WIFI_OFF);        //Prevents reconnection issue (taking too long to connect)
  delay(1000);
  WiFi.mode(WIFI_STA);        //This line hides the viewing of ESP as wifi hotspot
  
  WiFi.begin(ssid, password);     //Connect to your WiFi router
  Serial.println("");

  Serial.print("Connecting");
  // Wait for connection
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  //If connection successful show IP address in serial monitor
  Serial.println("");
  Serial.print("Connected to ");
  Serial.println(ssid);
  Serial.print("IP address: ");
  Serial.println(WiFi.localIP());  //IP address assigned to your ESP
  

  HTTPClient http;    
   mfrc522.PCD_Init();        // Init MFRC522 card
   Serial.print("ready");
}



void loop() {
  String barcode = "";
  // Prepare key - all keys are set to FFFFFFFFFFFFh at chip delivery from the factory.
  MFRC522::MIFARE_Key key;
  for (byte i = 0; i < 6; i++) key.keyByte[i] = 0xFF;

  //some variables we need
  byte block;
  byte len;
  MFRC522::StatusCode status;

  //-------------------------------------------

  // Reset the loop if no new card present on the sensor/reader. This saves the entire process when idle.
  if ( ! mfrc522.PICC_IsNewCardPresent()) {
    return;
  }

  // Select one of the cards
  if ( ! mfrc522.PICC_ReadCardSerial()) {
    return;
  }

  Serial.println(F("**Card Detected:**"));

  //-------------------------------------------

  mfrc522.PICC_DumpDetailsToSerial(&(mfrc522.uid)); //dump some details about the card

  //mfrc522.PICC_DumpToSerial(&(mfrc522.uid));      //uncomment this to see all blocks in hex

  //-------------------------------------------

  Serial.print(F("Barcode: "));


  //---------------------------------------- GET LAST NAME

  byte buffer2[100];
  len = 100;
  block = 1;

  status = mfrc522.PCD_Authenticate(MFRC522::PICC_CMD_MF_AUTH_KEY_A, 1, &key, &(mfrc522.uid)); //line 834
  if (status != MFRC522::STATUS_OK) {
    Serial.print(F("Authentication failed: "));
    Serial.println(mfrc522.GetStatusCodeName(status));
    return;
  }

  status = mfrc522.MIFARE_Read(block, buffer2, &len);
  if (status != MFRC522::STATUS_OK) {
    Serial.print(F("Reading failed: "));
    Serial.println(mfrc522.GetStatusCodeName(status));
    return;
  }

  //PRINT barcode
  for (uint8_t i = 0; i < 16; i++) {
    barcode += (char)buffer2[i];
//    Serial.write(buffer2[i]);
  }
  Serial.print(barcode);
  //----------------------------------------
  
  Serial.println(F("\n**End Reading**\n"));

  delay(500); //change value if you want to read cards faster

  mfrc522.PICC_HaltA();
  mfrc522.PCD_StopCrypto1();

//Post the data ie barcode and phone
  HTTPClient http;
  String postData = "cartID=Cart_1&barcode="+barcode+"&productCode=123";
  Serial.print(postData);
  
  http.begin(wifiClient, host);              //Specify request destination
  http.addHeader("Content-Type", "application/x-www-form-urlencoded");    //Specify content-type header
  
  int httpCode = http.POST(postData);   //Send the request
  String payload = http.getString();    //Get the response payload
    String code = String(httpCode);
    while(code == ""){
    Serial.print(".");
  }
  Serial.println(httpCode);   //Print HTTP return code

  if(httpCode == 200){
    Serial.println("Product Added");
  }
  Serial.println(payload);    //Print request response payload

  http.end();  //Close connection
  delay(200);
}
