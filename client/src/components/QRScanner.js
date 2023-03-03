import { Html5QrcodeScanner } from "html5-qrcode"
import { Html5Qrcode } from "html5-qrcode"
import { useEffect } from "react";

export default function QRScannerComponent() {
  useEffect(() => {
    const html5QrCode = new Html5Qrcode("reader");
    const qrCodeSuccessCallback = (decodedText, decodedResult) => {
      html5QrCode.stop().then((ignore) => {
        // QR Code scanning is stopped.
      }).catch((err) => {
        // Stop failed, handle it.
      });
      console.log(decodedResult);
      alert(decodedText);
    };
    const config = { fps: 30, qrbox: { width: 250, height: 250 } };
    html5QrCode.start({ facingMode: "environment" }, config, qrCodeSuccessCallback);


  })

  return (
    <div id="reader" width="600px"></div>
  )

}