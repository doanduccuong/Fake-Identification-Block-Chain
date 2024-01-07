import React, { useEffect } from 'react';
import { Html5QrcodeScanner } from "html5-qrcode";
import { Link } from 'react-router-dom';
import { ethers } from 'ethers';
import * as typechain from "identification-product-cuongdd1";

const systemContract = "0xA9466E7C1ad8165968d104a8190AFc23F0C021fa";

const VerifyProductPage: React.FC = () => {
    useEffect(() => {
        const resultContainer = document.getElementById('qr-reader-results');
        let lastResult, countResults = 0;

        const onScanSuccess = (decodedText: string) => {
            if (decodedText !== lastResult) {
                ++countResults;
                lastResult = decodedText;
                const audio = new Audio('beep.wav');
                audio.play();
                resultContainer.innerHTML = decodedText;
                (document.getElementById('productSN') as HTMLInputElement).value = decodedText;
            }
        };
        function onScanFailure(error) {
            // handle scan failure, usually better to ignore and keep scanning.
            // for example:
            console.warn(`Code scan error = ${error}`);
        }

        let html5QrcodeScanner = new Html5QrcodeScanner(
            "qr-reader",
            { fps: 10, qrbox: { width: 250, height: 250 } },
        /* verbose= */ false);
        html5QrcodeScanner.render(onScanSuccess, onScanFailure);

        return () => {
            html5QrcodeScanner.clear();
        };
    }, []);
    async function verifyProduct(): Promise<void> {
        const web3provider = new ethers.providers.Web3Provider(
            window.ethereum as any
        );


        const system = typechain.Product__factory.connect(
            systemContract
        );
        const customerCode = document.getElementById('consumerCode') as HTMLInputElement | null;
        const productSN = document.getElementById('productSN') as HTMLInputElement | null;
        let account = await (web3provider as any).getSigner();
        try {
            let result = await system.connect( await (web3provider as any).getSigner() ).verifyProduct(
                ethers.utils.formatBytes32String(productSN.value),
                ethers.utils.formatBytes32String(customerCode.value),
            );
            console.log(account);
            var t= "";

                var tr="<tr>";
                if(result){
                    tr+="<td>"+ "Genuine Product."+"</td>";
                }else{
                    tr+="<td>"+ "Fake Product."+"</td>";
                }
                tr+="</tr>";
                t+=tr;

                document.getElementById('logdata').innerHTML = t;
                document.getElementById('add').innerHTML= await account.getAddress();

           } catch (error) {

            console.log(error);
           }
    }

    return (
        <div>
            <section className="ftco-section">
                <div className="container-fluid px-md-5">
                    <div className="row justify-content-between">
                        <div className="col-md-8 order-md-last">
                            <div className="row">
                                <div className="col-md-6 text-center">
                                    <a className="navbar-brand" href="index.html">Fake Product Identification <span>through Blockchain</span></a>
                                </div>
                                <div className="col-md-6 d-md-flex justify-content-end mb-md-0 mb-3">
                                    <form action="#" className="searchform order-lg-last">
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 d-flex">
                            <div className="social-media">
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="fa fa-bars"></span> Menu
                        </button>
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
                    </div>
                </nav>
            </section>
            <section>
                <div className="container">
                    <h2>Verify Products</h2>
                    <section>
                        <div className="container-fluid">
                            <div id="qr-reader" style={{ width: '300px' }}></div>
                            <div id="qr-reader-results"></div>
                        </div>
                    </section>
                    <div className="form-group">
                        <label htmlFor="productSN">Product SN:</label>
                        <input
                            disabled
                            type="text"
                            className="form-control"
                            id="productSN"
                            placeholder="Enter Product SN"
                            name="productSN"
                        />
                        <label htmlFor="consumerCode">Consumer Code</label>
                        <input
                            type="text"
                            className="form-control"
                            id="consumerCode"
                            placeholder="Enter Consumer Code"
                            name="consumerCode"
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-warning btn-register"
                        id="register"
                        onClick={verifyProduct}
                    >
                        Get Product Status
                    </button>
                </div>
            </section>
            <br />
            <section>
                <div className="container">
                    <h2>Is the product sold to the consumer fake or not?</h2>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Product Verification Result</th>
                            </tr>
                        </thead>
                        <tbody id="logdata"></tbody>
                    </table>
                    <p>
                        Your address is <b id="add"></b>
                    </p>
                </div>
            </section>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
            <script src="js/popper.js"></script>
            <script src="js/bootstrap.min.js"></script>
            <script src="js/main.js"></script>
            <script src="js/web3.min.js"></script>
            <script src="js/truffle-contract.js"></script>
            <script src="js/verifyProduct.js"></script>
            <script src="https://unpkg.com/html5-qrcode"></script>
            {/* <script>
        var decodedText = 'Enter Product SN';
        function docReady(fn: () => void) {
          if (document.readyState === 'complete' || document.readyState === 'interactive') {
            setTimeout(fn, 1);
          } else {
            document.addEventListener('DOMContentLoaded', fn);
          }
        }

        docReady(() => {
          const resultContainer = document.getElementById('qr-reader-results');
          let lastResult, countResults = 0;

          function onScanSuccess(decodedText: string) {
            if (decodedText !== lastResult) {
              ++countResults;
              lastResult = decodedText;
              const audio = new Audio('beep.wav');
              audio.play();
              resultContainer.innerHTML = decodedText;
              document.getElementById('productSN').value = decodedText;
            }
          }

          const html5QrcodeScanner = new Html5QrcodeScanner('qr-reader', { fps: 10, qrbox: 250 });
          html5QrcodeScanner.render(onScanSuccess);
        });
      </script> */}
        </div>
    );
};

export default VerifyProductPage;
