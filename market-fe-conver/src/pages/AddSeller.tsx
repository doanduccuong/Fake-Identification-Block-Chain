import React from 'react';
import { ethers } from "ethers";
import * as typechain from "identification-product-cuongdd1";
import { Link } from 'react-router-dom';

const systemContract = "0xA9466E7C1ad8165968d104a8190AFc23F0C021fa";

const AddSellerPage: React.FC = () => {
    async function addSeller(): Promise<void> {
        const web3provider = new ethers.providers.Web3Provider(
            window.ethereum as any
        );
        console.log(web3provider);


        const system = typechain.Product__factory.connect(
            systemContract
        );

        var sellerName = (document.getElementById('SellerName') as HTMLInputElement | null).value;
        var sellerBrand = (document.getElementById('SellerBrand') as HTMLInputElement | null).value;
        var sellerCode = (document.getElementById('SellerCode') as HTMLInputElement | null).value;
        var sellerPhoneNumber = (document.getElementById('SellerPhoneNumber') as HTMLInputElement | null).value;
        var sellerManager = (document.getElementById('SellerManager') as HTMLInputElement | null).value;
        var sellerAddress = (document.getElementById('SellerAddress') as HTMLInputElement | null).value;
        var ManufacturerId = (document.getElementById('ManufacturerId') as HTMLInputElement | null).value;
        try {
            await system.connect(await (web3provider as any).getSigner()).addSeller(
                ethers.utils.formatBytes32String(ManufacturerId),
                ethers.utils.formatBytes32String(sellerName),
                ethers.utils.formatBytes32String(sellerBrand),
                ethers.utils.formatBytes32String(sellerCode),
                sellerPhoneNumber,
                ethers.utils.formatBytes32String(sellerManager),
                ethers.utils.formatBytes32String(sellerAddress),

            );
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <html lang="en">
                <head>
                    <title>Fake Product Identification</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                    <link href='https://fonts.googleapis.com/css?family=Roboto:400,100,300,700' rel='stylesheet' type='text/css' />
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
                        <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
                            <div className="container-fluid">
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="fa fa-bars"></span> Menu
                                </button>
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
                                {/* <div className="collapse navbar-collapse" id="ftco-nav">
                                    <ul className="navbar-nav m-auto">
                                        <li className="nav-item"><a href="index.html" className="nav-link">Home</a></li>
                                        <li className="nav-item "><a href="manufacturer.html" className="nav-link">Manufacturer</a></li>
                                        <li className="nav-item"><a href="seller.html" className="nav-link">Seller</a></li>
                                        <li className="nav-item"><a href="consumer.html" className="nav-link">Consumer</a></li>
                                    </ul>
                                </div> */}
                            </div>
                        </nav>
                        {/* END nav */}
                    </section>
                    <section>
                        <div className="container">
                            <h2>Add Seller</h2>
                            <div>
                                <table width="100%">
                                    <tr>
                                        <td width="15%" align="center">
                                            <label htmlFor="seller_id">Seller Name </label>
                                        </td>
                                        <td width="30%">
                                            <input className="form-control" id="SellerName" name="SellerName" type="text" />
                                        </td>
                                        <td width="15%" align="center">
                                            <label htmlFor="name">Seller Brand</label>
                                        </td>
                                        <td width="30%">
                                            <input className="form-control" id="SellerBrand" name="SellerBrand" type="text" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="15%" align="center">
                                            <label htmlFor="username">Seller Code</label>
                                        </td>
                                        <td width="30%">
                                            <input className="form-control" id="SellerCode" name="SellerCode" type="text" />
                                        </td>
                                        <td width="15%" align="center">
                                            <label htmlFor="name">Seller Phone Number</label>
                                        </td>
                                        <td width="30%">
                                            <input className="form-control" id="SellerPhoneNumber" name="SellerPhoneNumber" type="text" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="15%" align="center">
                                            <label htmlFor="username">Seller Manager</label>
                                        </td>
                                        <td width="30%">
                                            <input className="form-control" id="SellerManager" name="SellerManager" type="text" />
                                        </td>
                                        <td width="15%" align="center">
                                            <label htmlFor="name">Seller Address</label>
                                        </td>
                                        <td width="30%">
                                            <input className="form-control" id="SellerAddress" name="SellerAddress" type="text" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="15%" align="center">
                                            <label htmlFor="username">Manufacturer ID</label>
                                        </td>
                                        <td width="30%">
                                            <input className="form-control" id="ManufacturerId" name="ManufacturerId" type="text" />
                                        </td>
                                    </tr>
                                </table>
                            </div>
                            <div className="clear">&nbsp;</div>
                            <button type="submit" className="btn btn-warning btn-register" id="register" onClick={addSeller}>Add the Seller</button>
                        </div>
                    </section>
                    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
                    <script src="js/popper.js"></script>
                    <script src="js/bootstrap.min.js"></script>
                    <script src="js/main.js"></script>
                    <script src="js/web3.min.js"></script>
                    <script src="js/truffle-contract.js"></script>
                    <script src="js/sellerApp.js"></script>
                </body>
            </html>
        </>
    );
};

export default AddSellerPage;
