import { Html5Qrcode } from "html5-qrcode"
import { useEffect, useState } from "react"
import axios from 'axios'

export default function QRScannerComponent({ socket }) {

  const [ShowQRReader, setShowQRReader] = useState();

  useEffect(() => {
    const html5QrCode = new Html5Qrcode("reader");

    const qrCodeSuccessCallback = (decodedText, decodedResult) => {
      html5QrCode.stop()
        .catch((err) => {
          console.log(err);
        });

      const contact = localStorage.getItem('contact');
      const cart_id = decodedResult.decodedText;
      if (cart_id !== null || cart_id !== undefined) {
        socket.emit('join-cart', { contact, cart_id });
        setShowQRReader(true);
      }
    };

    if (!ShowQRReader) {
      const config = { fps: 30, qrbox: { width: 150, height: 150 } };
      html5QrCode.start({ facingMode: "environment" }, config, qrCodeSuccessCallback);
    }

  })

  return (
    <>
      {(!ShowQRReader &&
        <h2 className="text-center">Scan Cart QRCode</h2>
      )}
      <div id="reader" className="w-64 m-auto rounded mb-5"></div>
    </>
  )

}