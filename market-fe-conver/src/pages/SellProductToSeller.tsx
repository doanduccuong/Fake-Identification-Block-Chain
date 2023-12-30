import React, { useEffect } from 'react';
import {Html5QrcodeScanner} from "html5-qrcode";

const SellProductToSeller: React.FC = () => {
    useEffect(() => {
        const decodedText = 'Enter Product SN';

        function docReady(fn: () => void) {
            if (document.readyState === 'complete' || document.readyState === 'interactive') {
                setTimeout(fn, 1);
            } else {
                document.addEventListener('DOMContentLoaded', fn);
            }
        }

        docReady(() => {
            const resultContainer = document.getElementById('qr-reader-results');
            let lastResult: string | null = null;
            let countResults = 0;

            function onScanSuccess(decodedText: string, decodedResult: any) {
                if (decodedText !== lastResult) {
                    ++countResults;
                    lastResult = decodedText;
                    const audio = new Audio('beep.wav');
                    audio.play();
                    resultContainer.innerHTML = decodedText;
                    (document.getElementById('productSN') as HTMLInputElement).value = decodedText;
                }
            }
            function onScanFailure(error) {
                // handle scan failure, usually better to ignore and keep scanning.
                // for example:
                console.warn(`Code scan error = ${error}`);
              }

            // Assuming you have a global Html5Qrcode object
            let html5QrcodeScanner = new Html5QrcodeScanner(
                "reader",
                { fps: 10, qrbox: {width: 250, height: 250} },
                /* verbose= */ false);
              html5QrcodeScanner.render(onScanSuccess, onScanFailure);
            return () => {
                // html5QrcodeScanner.stop();
            };
        });
    }, []);

    return (
        <html lang="en">
            <head>
                <title>Fake Product Identification</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <link
                    href="https://fonts.googleapis.com/css?family=Roboto:400,100,300,700"
                    rel="stylesheet"
                    type="text/css"
                />
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
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
                                            Fake Product Identification <span>through Blockchain</span>
                                        </a>
                                    </div>
                                    <div className="col-md-6 d-md-flex justify-content-end mb-md-0 mb-3">
                                        <form action="#" className="searchform order-lg-last"></form>
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
                            <div className="collapse navbar-collapse" id="ftco-nav">
                                <ul className="navbar-nav m-auto">
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
                                </ul>
                            </div>
                        </div>
                    </nav>
                </section>
                <section>
                    <div className="container">
                        <h2>Sell Product to Seller</h2>
                        <section>
                            <div className="container-fluid">
                                <div>
                                    <div id="qr-reader" style={{ width: '300px' }}></div>
                                    <div id="qr-reader-results"></div>
                                </div>
                            </div>
                        </section>
                        <div>
                            <table width="100%">
                                <tr style={{ width: '100%' }}>
                                    <td width="15" align="center">
                                        <label htmlFor="productSN">Product SN:</label>
                                    </td>
                                    <td width="30%">
                                        <input disabled className="form-control" id="productSN" name="productSN" type="text" />
                                    </td>
                                    <td width="15%" align="center">
                                        <label htmlFor="sellerCode">Seller Code</label>
                                    </td>
                                    <td width="30%">
                                        <input className="form-control" id="sellerCode" name="sellerCode" type="text" />
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div className="clear">&nbsp;</div>
                        <button type="submit" className="btn btn-warning btn-register" id="register">
                            Sell to Seller
                        </button>
                    </div>
                </section>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
                <script src="js/popper.js"></script>
                <script src="js/bootstrap.min.js"></script>
                <script src="js/main.js"></script>
                <script src="js/web3.min.js"></script>
                <script src="js/truffle-contract.js"></script>
                <script src="js/sellProductManufacturer.js"></script>
                <script src="https://unpkg.com/html5-qrcode"></script>
            </body>
        </html>
    );
};

export default SellProductToSeller;
