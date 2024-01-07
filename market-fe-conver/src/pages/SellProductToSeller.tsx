import React, { useEffect } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import { Link } from 'react-router-dom';
import { ethers } from 'ethers';
import * as typechain from "identification-product-cuongdd1";

const systemContract = "0xA9466E7C1ad8165968d104a8190AFc23F0C021fa";

const SellProductToConsumer: React.FC = () => {
    useEffect(() => {
        const resultContainer = document.getElementById('qr-reader-results');
        let lastResult: string | null = null;
        let countResults = 0;

        function onScanSuccess(decodedText: string, decodedResult: any) {
            if (decodedText !== lastResult) {
                ++countResults;
                lastResult = decodedText;
                resultContainer.innerHTML = decodedText;
                (document.getElementById('productSN') as HTMLInputElement | null)!.value = decodedText;
            }
        }
        function onScanFailure(error) {
            // handle scan failure, usually better to ignore and keep scanning.
            // for example:
            console.warn(`Code scan error = ${error}`);
        }

        function docReady(fn: () => void) {
            if (
                document.readyState === 'complete' ||
                document.readyState === 'interactive'
            ) {
                setTimeout(fn, 1);
            } else {
                document.addEventListener('DOMContentLoaded', fn);
            }
        }

        docReady(() => {
            const html5QrcodeScanner = new Html5QrcodeScanner('qr-reader', { fps: 10, qrbox: { width: 250, height: 250 } },
      /* verbose= */ false);

            html5QrcodeScanner.render(onScanSuccess, onScanFailure);

            return () => {
                html5QrcodeScanner.clear();
            };
        });
    }, []); // Empty dependency array to run the effect only once on mount

    async function sellCustomer(): Promise<void> {
        const web3provider = new ethers.providers.Web3Provider(
            window.ethereum as any
        );


        const system = typechain.Product__factory.connect(
            systemContract
        );
        const customerCode = document.getElementById('consumerCode') as HTMLInputElement | null;
        const productSN = document.getElementById('productSN') as HTMLInputElement | null;
        try {
            await system.connect( await (web3provider as any).getSigner() ).sellerSellProduct(
                ethers.utils.formatBytes32String(productSN.value),
                ethers.utils.formatBytes32String(customerCode.value),
            );
           } catch (error) {
            console.log(error);
           }
    
    }

    return (
        <>
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
                <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
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
                    </div>
                </nav>
            </section>
            <section>
                <div className="container">
                    <h2>Sell Product to Consumer</h2>
                    <section>
                        <div className="container-fluid">
                                <div id="qr-reader" style={{ width: '300px' }}></div>
                                <div id="qr-reader-results"></div>
                        </div>
                    </section>
                    <div>
                        <table width="100%">
                            <tr>
                                <td width="15%" align="center">
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
                                <td width="15" align="center">
                                    <label htmlFor="consumerCode">Consumer Code</label>
                                </td>
                                <td width="30%">
                                    <input
                                        className="form-control"
                                        id="consumerCode"
                                        name="consumerCode"
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
                        onClick={sellCustomer}
                    >
                        Sell to Consumer
                    </button>
                </div>
            </section>
        </>
    );
};

export default SellProductToConsumer;
