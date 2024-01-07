import { ethers } from 'ethers';
import React, { useState } from 'react';
const systemContract = "0xA9466E7C1ad8165968d104a8190AFc23F0C021fa";
import * as typechain from "identification-product-cuongdd1";
import { Link } from 'react-router-dom';

const ConsumerProductHistory: React.FC = () => {
  const [consumerCode, setConsumerCode] = useState<string>('');

  const handleConsumerCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConsumerCode(event.target.value);
  };

  const handleGetProducts = async () => {
        const web3provider = new ethers.providers.Web3Provider(
            window.ethereum as any
        );
        let account = await (web3provider as any).getSigner();



        const system = typechain.Product__factory.connect(
            systemContract
        );
        const customerCode = document.getElementById('consumerCode') as HTMLInputElement | null;
        try {
            let result = await system.connect( await (web3provider as any).getSigner() ).getPurchaseHistory(
                ethers.utils.formatBytes32String(customerCode.value),
            );
            var productSNs=[];
                var sellerCodes=[];
                var manufacturerCodes=[];
                // console.log(result);
                
                for(var k=0;k<result[0].length;k++){
                    productSNs[k]=ethers.utils.parseBytes32String(result[0][k]);
                }

                for(var k=0;k<result[1].length;k++){
                    sellerCodes[k]=ethers.utils.parseBytes32String(result[1][k]);

                }

                for(var k=0;k<result[2].length;k++){
                    manufacturerCodes[k]=ethers.utils.parseBytes32String(result[2][k]);
                }
                

                var t= "";
                document.getElementById('logdata').innerHTML = t;
                for(var i=0;i<result[0].length;i++) {
                    var temptr = "<td>"+sellerCodes[i]+"</td>";
                    if(temptr === "<td>0</td>"){
                        break;
                    }
                    var tr="<tr>";
                    tr+="<td>"+productSNs[i]+"</td>";
                    tr+="<td>"+sellerCodes[i]+"</td>";
                    tr+="<td>"+manufacturerCodes[i]+"</td>";
                    tr+="</tr>";
                    t+=tr;

                }
                document.getElementById('logdata').innerHTML += t;
                document.getElementById('add').innerHTML=account.getAddress();
           } catch (error) {
            console.log(error);
           }
    
  };

  return (
    <>
      <section className="ftco-section">
        <div className="container-fluid px-md-5">
          <div className="row justify-content-between">
            <div className="col-md-8 order-md-last">
              <div className="row">
                <div className="col-md-6 text-center">
                  <a className="navbar-brand" href="index.html">
                    Consumer Product History
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
          <h2>Consumer Product History</h2>
          <div className="form-group">
            <label htmlFor="consumerCode">Consumer Code</label>
            <input
              type="text"
              className="form-control"
              id="consumerCode"
              placeholder="Enter Consumer Code"
              name="consumerCode"
              value={consumerCode}
              onChange={handleConsumerCodeChange}
            />
          </div>
          <button type="submit" className="btn btn-warning btn-register" id="register" onClick={handleGetProducts}>
            Get Products
          </button>
        </div>
      </section>

      <section>
        <div className="container">
          <h2>Products purchased by consumer</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Product SN</th>
                <th>Seller Code</th>
                <th>Manufacturer Code</th>
              </tr>
            </thead>
            <tbody id="logdata">{/* Populate with actual product data */}</tbody>
          </table>
            <p>
              Your address is <b id="add"></b>
            </p>
        </div>
      </section>
    </>
  );
};

export default ConsumerProductHistory;
