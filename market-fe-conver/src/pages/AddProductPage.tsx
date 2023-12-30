import React, { useState } from 'react';
import { saveAs } from 'file-saver';
import './css/style.css';
import './css/qr_code_box.css';
import { Link } from 'react-router-dom';
import { ethers } from "ethers";
import * as typechain from "identification-product-cuongdd1";
import { MetaMaskButton } from "@metamask/sdk-react-ui";
import Web3 from 'web3';
const systemContract = "0xA9466E7C1ad8165968d104a8190AFc23F0C021fa";

const AddProductPage: React.FC = () => {
    var src;
    var qrValue;
    var downloadQrImg;
    var downloadQrBtn;
    // const [qrValue, setQrValue] = useState<string>('');
    // const [qrImageHidden, setQrImageHidden] = useState<boolean>(true);
    // const [qrImageSrc, setQrImageSrc] = useState<string>('');

    const addProduct = async () => {
        const web3provider = new ethers.providers.Web3Provider(
            window.ethereum as any
        );
        console.log(web3provider);


        const system = typechain.Product__factory.connect(
            systemContract
        );
    
        const textEncoder = new TextEncoder();


        const manufacturerID = document.getElementById('manufacturerID') as HTMLInputElement | null;
        const productSN = document.getElementById('productSN') as HTMLInputElement | null;
        const productPrice = document.getElementById('productPrice') as HTMLInputElement | null;
        const productName = document.getElementById('productName') as HTMLInputElement | null;
        const productBrand = document.getElementById('productBrand') as HTMLInputElement | null;
       try {
        await system.connect( await (web3provider as any).getSigner() ).addProduct(
            textEncoder.encode(manufacturerID.value),
            textEncoder.encode(productName.value),
            textEncoder.encode(productSN.value),
            textEncoder.encode(productBrand.value),
            1,
        );
       } catch (error) {
        console.log(error);
       }

    }
    function fetchQR(){
		qrValue = (document.getElementById('productSN')) as HTMLInputElement | null;
		var qrImage = document.querySelector(".qr-code");
		var qrImageResult = qrImage.querySelector("img");
		src = qrImageResult.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
		

		downloadQrImg = document.getElementById('imgQR');
		downloadQrBtn = document.getElementById('download');
		downloadQrImg.removeAttribute('hidden');
		downloadQrBtn.removeAttribute('hidden');

	}
    function saveImage(){
		saveAs(src,qrValue);
		downloadQrImg.setAttribute('hidden', 'hidden');
		downloadQrBtn.setAttribute('hidden', 'hidden');
	}



    // const fetchQR = async () => {

    //     qrValue = (document.getElementById('productSN') as HTMLInputElement).value;
    //     var qrImage = document.querySelector(".qr-code");
    //     var qrImageResult = qrImage.querySelector("img");
    //     src = qrImageResult.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;


    //     downloadQrImg = document.getElementById('imgQR');
    //     downloadQrBtn = document.getElementById('download');
    //     downloadQrImg.removeAttribute('hidden');
    //     downloadQrBtn.removeAttribute('hidden');
    //     const inputElement = document.getElementById('productSN') as HTMLInputElement;
    //     const value = inputElement.value;
    //     setQrValue(value);

    //     const qrImage = document.querySelector(".qr-code") as HTMLDivElement;
    //     const qrImageResult = qrImage.querySelector("img") as HTMLImageElement;
    //     const src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${value}`;
    //     setQrImageSrc(src);

    //     qrImageResult.src = src;
    //     setQrImageHidden(false);
    //     await addProduct();
    // };

    // const saveImage = () => {
    //     saveAs(src, qrValue);
    //     downloadQrImg.setAttribute('hidden', 'hidden');
    //     downloadQrBtn.setAttribute('hidden', 'hidden');
    // };

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
                    <h2>Add Product</h2>
                    <div className="matrix">
                        <table width="100%">
                            <tr>
                                <td style={{ width: '15%' }} align="center">
                                    <label htmlFor="manufacturerID">Manufacturer ID</label>
                                </td>
                                <td style={{ width: '30%' }}>
                                    <input className="form-control" id="manufacturerID" name="Manufacturer ID" type="text" />
                                </td>
                                <td style={{ width: '15%' }} align="center">
                                    <label htmlFor="name">Product Name</label>
                                </td>
                                <td style={{ width: '30%' }}>
                                    <input className="form-control" id="productName" name="productName" type="text" />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ width: '15%' }} align="center">
                                    <label htmlFor="productSN">Product SN:</label>
                                </td>
                                <td style={{ width: '30%' }}>
                                    <input className="form-control" id="productSN" name="productSN" type="text" />
                                </td>
                                <td style={{ width: '15%' }} align="center">
                                    <label htmlFor="name">Product Brand</label>
                                </td>
                                <td style={{ width: '30%' }}>
                                    <input className="form-control" id="productBrand" name="productBrand" type="text" />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ width: '15%' }} align="center">
                                    <label htmlFor="productPrice">Product Price</label>
                                </td>
                                <td style={{ width: '30%' }}>
                                    <input className="form-control" id="productPrice" name="productPrice" type="text" />
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div className="clear">&nbsp;</div>
                    <div style={{ textAlign: 'center' }}>
                        <button type="submit" className="btn btn-warning btn-register" id="register" onClick={fetchQR}>
                            Add the Product
                        </button>
                    </div>
                    <br />
                </div>
            </section>
            <div className="qr-code">
                <div style={{ textAlign: 'center' }}>
                    <img style={{ textAlign: 'center' }} hidden id="imgQR" src="" alt="qr-code" />
                </div>
                <br />
                <div style={{ textAlign: 'center' }}>
                    <button style={{ textAlign: 'center' }} hidden type="submit" className="btn btn-warning" id="download" onClick={saveImage}>
                        Download QR Code
                    </button>
                </div>
            </div>
            <br />
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
            <script src="js/popper.js"></script>
            <script src="js/bootstrap.min.js"></script>
            <script src="js/main.js"></script>
            <script src="js/web3.min.js"></script>
            <script src="js/truffle-contract.js"></script>
            <script src="js/productApp.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.0/FileSaver.min.js"></script>
            {/* <script>
        var src;
        var qrValue;
        // function fetchQR() {
        //   qrValue = (document.getElementById('productSN') as HTMLInputElement).value;
        //   var qrImage = document.querySelector(".qr-code") as HTMLDivElement;
        //   var qrImageResult = qrImage.querySelector("img") as HTMLImageElement;
        //   src = qrImageResult.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
        //   var downloadQrImg = document.getElementById('imgQR') as HTMLImageElement;
        //   var downloadQrBtn = document.getElementById('download') as HTMLButtonElement;
        //   downloadQrImg.removeAttribute('hidden');
        //   downloadQrBtn.removeAttribute('hidden');
        // }

        function saveImage() {
          saveAs(new Blob([src]), qrValue);
          var downloadQrImg = document.getElementById('imgQR') as HTMLImageElement;
          var downloadQrBtn = document.getElementById('download') as HTMLButtonElement;
          downloadQrImg.setAttribute('hidden', 'hidden');
          downloadQrBtn.setAttribute('hidden', 'hidden');
        }
      </script> */}
        </div>
    );
};

export default AddProductPage;
