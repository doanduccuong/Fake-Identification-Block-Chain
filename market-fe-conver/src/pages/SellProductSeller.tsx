// import { Html5QrcodeScanner } from 'html5-qrcode';
import { ethers } from 'ethers';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as typechain from "identification-product-cuongdd1";
const systemContract = "0xA9466E7C1ad8165968d104a8190AFc23F0C021fa";

class SellProductSellerPage extends React.Component {

  render() {
    async function sellToSeller(): Promise<void> {
      const web3provider = new ethers.providers.Web3Provider(
        window.ethereum as any
    );


    const system = typechain.Product__factory.connect(
        systemContract
    );
    const sellerCode = document.getElementById('sellerCode') as HTMLInputElement | null;
    const productSN = document.getElementById('productSN') as HTMLInputElement | null;
    try {
        await system.connect( await (web3provider as any).getSigner() ).manufacturerSellProduct(
            ethers.utils.formatBytes32String(productSN.value),
            ethers.utils.formatBytes32String(sellerCode.value),
        );
       } catch (error) {
        console.log(error);
       }

    }

    // const html5QrcodeScanner = new Html5QrcodeScanner(
    //   "reader",
    //   { fps: 10, qrbox: {width: 250, height: 250} },
    //   /* verbose= */ false);
    //   html5QrcodeScanner.render(onScanSuccess, onScanFailure);
    //   function onScanSuccess(decodedText, decodedResult) {
    //     console.log(`Code matched = ${decodedText}`, decodedResult);
    //   }

    //   function onScanFailure(error) {
    //     console.warn(`Code scan error = ${error}`);
    //   }
    

    return (
      <html lang="en">
        <head>
          <title>Fake Product Identification</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link
            href='https://fonts.googleapis.com/css?family=Roboto:400,100,300,700'
            rel='stylesheet'
            type='text/css'
          />
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          />
          <link rel="stylesheet" href="css/style.css" />
        </head>
        <body>
          <section className="ftco-section">
            <div className="container-fluid px-md-5">
              <div className="row justify-content-between">
                <div className="col-md-8 order-md-last">
                  <div className="row">
                    <div className="col-md-6 text-center">
                      <a className="navbar-brand" href="index.html">
                        Fake Product Identification{' '}
                        <span>through Blockchain</span>
                      </a>
                    </div>
                    <div className="col-md-6 d-md-flex justify-content-end mb-md-0 mb-3">
                      <form
                        action="#"
                        className="searchform order-lg-last"
                      ></form>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 d-flex">
                  <div className="social-media"></div>
                </div>
              </div>
            </div>
            <nav
              className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
              id="ftco-navbar"
            >
              <div className="container-fluid">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#ftco-nav"
                  aria-controls="ftco-nav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="fa fa-bars"></span> Menu
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="ftco-nav"
                >
                  <div className="collapse navbar-collapse" id="ftco-nav">
                            <ul className="navbar-nav m-auto">
                                <li className="nav-item">
                                    <Link to="/homePage" className="nav-link">HomePage</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/manufacturePage" className="nav-link">ManufacturerPage</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/sellerPage" className="nav-link">Seller</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/consumerPage" className="nav-link">Consumer</Link>
                                </li>
                            </ul>
                        </div>
                  {/* <ul className="navbar-nav m-auto">
                    <li className="nav-item">
                      <a href="index.html" className="nav-link">
                        Home
                      </a>
                    </li>
                    <li className="nav-item ">
                      <a href="manufacturer.html" className="nav-link">
                        Manufacturer
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="seller.html" className="nav-link">
                        Seller
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="consumer.html" className="nav-link">
                        Consumer
                      </a>
                    </li>
                  </ul> */}
                </div>
              </div>
            </nav>
          </section>
          <section>
            <div className="container">
              <h2>Sell Product to Seller</h2>
              {/* <section>
                <div className="container-fluid">
                  <div>
                    <div id="reader" style={{ width: '300px', color: "Tomato"}}></div>
                    <div id="qr-reader-results"></div>
                  </div>
                </div>
              </section> */}
              <div>
                <table width="100%">
                  <tr>
                    <td width="15" align="center">
                      <label htmlFor="productSN">Product SN:</label>
                    </td>
                    <td width="30%">
                      <input
                        // disabled
                        className="form-control"
                        id="productSN"
                        name="productSN"
                        type="text"
                      />
                    </td>
                    <td width="15%" align="center">
                      <label htmlFor="sellerCode">Seller Code</label>
                    </td>
                    <td width="30%">
                      <input
                        className="form-control"
                        id="sellerCode"
                        name="sellerCode"
                        type="text"
                      />
                    </td>
                  </tr>
                </table>
              </div>
              <div className="clear">&nbsp;</div>
              <button
                type="submit"
                className="btn btn-warning btn-register"
                id="register"
                onClick={sellToSeller}
              >
                Sell to Seller
              </button>
            </div>
          </section>
          {/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
          <script src="js/popper.js"></script>
          <script src="html5-qrcode.min.js"></script>
          <script src="js/bootstrap.min.js"></script>
          <script src="js/main.js"></script>
          <script src="js/web3.min.js"></script>
          <script src="js/truffle-contract.js"></script>
          <script src="js/sellProductManufacturer.js"></script> */}
          {/* <script>
            var decodedText = "Enter Product SN";
            function docReady(fn) {
              // see if DOM is already available
              if (
                document.readyState === "complete" ||
                document.readyState === "interactive"
              ) {
                // call on next available tick
                setTimeout(fn, 1);
              } else {
                document.addEventListener("DOMContentLoaded", fn);
              }
            }

            docReady(function () {
              var resultContainer = document.getElementById(
                'qr-reader-results'
              );
              var lastResult,
                countResults = 0;
              function onScanSuccess(decodedText, decodedResult) {
                if (decodedText !== lastResult) {
                  ++countResults;
                  lastResult = decodedText;
                  // Handle on success condition with the decoded message.
                  var audio = new Audio('beep.wav');
                  audio.play();
                  // console.log(`Scan result ${decodedText}`, decodedResult);
                  if (resultContainer)
                    resultContainer.innerHTML = decodedText;
                  var productSNInput = document.getElementById(
                    'productSN'
                  ) as HTMLInputElement;
                  if (productSNInput) productSNInput.value = decodedText;
                  // App.init(decodedText);
                }
              }

              var html5QrcodeScanner = new Html5QrcodeScanner(
                'qr-reader',
                { fps: 10, qrbox: 250 }
              );
              html5QrcodeScanner.render(onScanSuccess);
            });
          </script> */}
        </body>
      </html>
    );
  }
}

export default SellProductSellerPage;

