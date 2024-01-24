import "./App.css";
import QRCode from "qrcode.react";
import domtoimage from "dom-to-image";
import { useState } from "react";

function App() {
  let [data, setData] = useState("Default data");

  const downloadQRCode = () => {
    const node = document.getElementById("qrcode");

    domtoimage
      .toPng(node)
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = "qrcode.png";
        link.click();
      })
      .catch((error) => {
        console.error("Error generating QR code:", error);
      });
  };
  return (
    <div className="App">
      <div className="qrcode_wrapper">
        <input
          type="text"
          value={data}
          onChange={(e) => setData(e.target.value)}
          placeholder="type to generate qrcode"
        />
        <QRCode value={data} id="qrcode" />
        <button onClick={downloadQRCode}>Download QR Code</button>
      </div>
    </div>
  );
}

export default App;
