import { Html5QrcodeScanner } from "html5-qrcode"
import { Html5Qrcode } from "html5-qrcode"
import { useEffect, useState } from "react"
import axios from 'axios'

export default function QRScannerComponent() {

  const [ShowQRReader, setShowQRReader] = useState(localStorage.getItem('cartID'));
  console.log(localStorage.getItem('cartID'));

  const setLocalStorage = (data) => {
    for (const key in data) {
      window.localStorage.setItem(key, data[key]);
    }
  }
  useEffect(() => {
    const html5QrCode = new Html5Qrcode("reader");

    const qrCodeSuccessCallback = (decodedText, decodedResult) => {
      html5QrCode.stop()
        .catch((err) => {
          console.log(err);
        });

      const phone = localStorage.getItem('contact')

      axios.post(`${process.env.REACT_APP_SERVER_URL}/api/cartIDSubmit`, { cartID: decodedText, phone })
        .then((data) => {
          setLocalStorage(data.data.data)
          setShowQRReader(true)
        })
        .catch(err => {
          console.log(err);
        })
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