import React from "react";
import "./styles/color.css";
import "./styles/font.css";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.css";
import "./styles/tailwind.css";
import { MetaMaskProvider } from '@metamask/sdk-react';

ReactDOM.render(
  <React.StrictMode>
  <MetaMaskProvider
    sdkOptions={{
      dappMetadata: {
        name: "Demo UI React App",
      },
    }}
  >
    <App />
  </MetaMaskProvider>
</React.StrictMode>,
  document.getElementById("root")
);

