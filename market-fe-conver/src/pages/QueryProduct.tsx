import { ethers } from 'ethers';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as typechain from "identification-product-cuongdd1";
const systemContract = "0xA9466E7C1ad8165968d104a8190AFc23F0C021fa";

class QueryProductsPage extends React.Component {
    state = {
        sellerCode: '',
    };

    componentDidMount() {
        // Your initialization logic or any other side effects can go here
    }

    handleSubmit = async () => {
        const web3provider = new ethers.providers.Web3Provider(
            window.ethereum as any
        );


        const system = typechain.Product__factory.connect(
            systemContract
        );
        let account = await (web3provider as any).getSigner();

        const sellerCode = document.getElementById('sellerCode') as HTMLInputElement | null;
        try {
            let result = await system.connect( await (web3provider as any).getSigner() ).queryProductsList(
                ethers.utils.formatBytes32String(sellerCode.value)
            );
            var productIds=[];
                var productSNs=[];
                var productNames=[];
                var productBrands=[];
                var productPrices=[];
                var productStatus=[];

                // console.log(result);
                
                for(var k=0;k<result[0].length;k++){
                    productIds[k]=result[0][k];
                }

                for(var k=0;k<result[1].length;k++){
                    productSNs[k]=ethers.utils.parseBytes32String(result[1][k]);

                }

                for(var k=0;k<result[2].length;k++){
                    productNames[k]=ethers.utils.parseBytes32String(result[2][k]);
                }

                for(var k=0;k<result[3].length;k++){
                    productBrands[k]=ethers.utils.parseBytes32String(result[3][k]);
                }

                for(var k=0;k<result[4].length;k++){
                    productPrices[k]=result[4][k];
                }

                for(var k=0;k<result[5].length;k++){
                    productStatus[k]=ethers.utils.parseBytes32String(result[5][k]);
                }

                var t= "";
                document.getElementById('logdata').innerHTML = t;
                for(var i=0;i<result[0].length;i++) {
                    var temptr = "<td>"+productPrices[i]+"</td>";
                    if(temptr === "<td>0</td>"){
                        break;
                    }

                    var tr="<tr>";
                    tr+="<td>"+productIds[i]+"</td>";
                    tr+="<td>"+productSNs[i]+"</td>";
                    tr+="<td>"+productNames[i]+"</td>";
                    tr+="<td>"+productBrands[i]+"</td>";
                    tr+="<td>"+productPrices[i]+"</td>";
                    tr+="<td>"+productStatus[i]+"</td>";
                    tr+="</tr>";
                    t+=tr;

                }
                document.getElementById('logdata').innerHTML += t;
                document.getElementById('add').innerHTML=account.getAddress();
           } catch (error) {
            console.log(error);
           }    };

    render() {
        return (
            <div>
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
                                        <form action="#" className="searchform order-lg-last">
                                            {/* Your form content goes here */}
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 d-flex">
                                <div className="social-media">{/* Your social media content goes here */}</div>
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
                        </div>
                    </nav>
                    {/* END nav */}
                </section>

                <section>
                    <div className="container">
                        <h2>Products for sale with the seller</h2>
                        <div className="form-group">
                            <label htmlFor="name">Seller Code</label>
                            <input
                                type="text"
                                className="form-control"
                                id="sellerCode"
                                placeholder="Enter Seller Code"
                                name="sellerCode"
                                value={this.state.sellerCode}
                                onChange={(e) => this.setState({ sellerCode: e.target.value })}
                            />
                        </div>
                        <button type="submit" className="btn btn-warning btn-register" onClick={this.handleSubmit}>
                            Submit
                        </button>
                    </div>
                </section>

                <section>
                    <div className="container">
                        <h2>Product Details</h2>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Product ID</th>
                                    <th>Product Serial Number</th>
                                    <th>Product Name</th>
                                    <th>Product Brand</th>
                                    <th>Product Price</th>
                                    <th>Product Status</th>
                                </tr>
                            </thead>
                            <tbody id="logdata">{/* Your table data goes here */}</tbody>
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
                <script src="js/productDataApp.js"></script>
            </div>
        );
    }
}

export default QueryProductsPage;
