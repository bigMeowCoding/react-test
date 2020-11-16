import React from "react";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import QrcodeImage from "./qrcode-image";
const AraleQRCode = require("arale-qrcode");
const QrcodeCase = function () {
  const history = useHistory();

  return (
    <div>
      <button
        id="qrcode"
        onClick={() => {
          const result = new AraleQRCode({
            render: "svg" /*  生成的类型 'svg' or 'table dom元素类型 */,
            text: "http://www.bigmeow.club/" /* 二维码的链接*/,
            size: 100 /* 二维码的大小 */,
          });
          const svgXml = new XMLSerializer().serializeToString(result);
          const src =
            "data:image/svg+xml;base64," +
            window.btoa(decodeURIComponent(encodeURIComponent(svgXml)));
          localStorage.setItem("image", src);
          console.log(src);
          history.push("/image");
        }}
      >
        点击生成二维码
      </button>
      <Switch>
        <Route path={"/image"} component={QrcodeImage}></Route>
      </Switch>
    </div>
  );
};

export default QrcodeCase;
