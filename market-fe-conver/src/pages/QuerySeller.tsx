import { ethers } from 'ethers';
import React from 'react';
import { Link } from 'react-router-dom';
import * as typechain from "identification-product-cuongdd1";

const systemContract = "0xA9466E7C1ad8165968d104a8190AFc23F0C021fa";

class QuerySellerPage extends React.Component {
  render() {
    async function querrySeller(): Promise<void> {
      const web3provider = new ethers.providers.Web3Provider(
        window.ethereum as any
      );


      const system = typechain.Product__factory.connect(
        systemContract
      );
      const manufacturerCode = document.getElementById('manufacturerCode') as HTMLInputElement | null;
      let account = await (web3provider as any).getSigner();

      try {
        let result = await system.connect(await (web3provider as any).getSigner()).querySellersList(
          ethers.utils.formatBytes32String(manufacturerCode.value),
        );
        var sellerId = [];
        var sellerName = [];
        var sellerBrand = [];
        var sellerCode = [];
        var sellerNum = [];
        var sellerManager = [];
        var sellerAddress = [];
        // console.log(result);

        for (var k = 0; k < result[0].length; k++) {
          sellerId[k] = result[0][k];
          console.log(sellerId);
        }

        for (var k = 0; k < result[1].length; k++) {
          sellerName[k] = ethers.utils.parseBytes32String(result[1][k]);

        }

        for (var k = 0; k < result[2].length; k++) {
          sellerBrand[k] = ethers.utils.parseBytes32String(result[2][k]);
        }

        for (var k = 0; k < result[3].length; k++) {
          sellerCode[k] = ethers.utils.parseBytes32String(result[3][k]);
        }

        for (var k = 0; k < result[4].length; k++) {
          sellerNum[k] = result[4][k];
        }

        for (var k = 0; k < result[5].length; k++) {
          sellerManager[k] = ethers.utils.parseBytes32String(result[5][k]);
        }

        for (var k = 0; k < result[6].length; k++) {
          sellerAddress[k] = ethers.utils.parseBytes32String(result[6][k]);
        }


        var t = "";
        document.getElementById('logdata').innerHTML = t;
        for (var i = 0; i < result[0].length; i++) {
          var temptr = "<td>" + sellerNum[i] + "</td>";
          if (temptr === "<td>0</td>") {
            break;
          }
          var tr = "<tr>";
          tr += "<td>" + sellerId[i] + "</td>";
          tr += "<td>" + sellerName[i] + "</td>";
          tr += "<td>" + sellerBrand[i] + "</td>";
          tr += "<td>" + sellerCode[i] + "</td>";
          tr += "<td>" + sellerNum[i] + "</td>";
          tr += "<td>" + sellerManager[i] + "</td>";
          tr += "<td>" + sellerAddress[i] + "</td>";
          tr += "</tr>";
          t += tr;

        }
        document.getElementById('logdata').innerHTML += t;
        document.getElementById('add').innerHTML = account.getAddress();

      } catch (error) {
        console.log(error);
      }


    }

    return (
      <>
        <head>
          <title>Fake Product Identification</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:400,100,300,700"
            rel="stylesheet"
            type="text/css"
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
                      <Link to="/manufacturePage" className="nav-link">Manufacturer</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/sellerPage" className="nav-link">Seller</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/consumerPage" className="nav-link">Consumer</Link>
                    </li>
                    {/* <li className="nav-item"><a href="index.html" className="nav-link">Home</a></li>
                    <li className="nav-item"><a href="manufacturer.html" className="nav-link">Manufacturer</a></li>
                    <li className="nav-item"><a href="seller.html" className="nav-link">Seller</a></li>
                    <li className="nav-item"><a href="consumer.html" className="nav-link">Consumer</a></li> */}
                  </ul>
                </div>
              </div>
            </nav>
          </section>

          <section>
            <div className="container">
              <h2>Query Sellers</h2>
              <div className="form-group">
                <label htmlFor="email">Manufacturer Code</label>
                <input type="email" className="form-control" id="manufacturerCode" placeholder="Enter manufacturer Code" name="manufacturerCode" />
              </div>
              <button type="submit" className="btn btn-warning btn-register" id="register" onClick={querrySeller}>
                Get Sellers
              </button>
            </div>
          </section>

          <section>
            <div className="container">
              <h2>Sellers</h2>
              <p>Following are the sellers registered through Blockchain Network</p>
              <table className="table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Brand</th>
                    <th>Code</th>
                    <th>Number</th>
                    <th>Manager</th>
                    <th>Address</th>
                  </tr>
                </thead>
                <tbody id="logdata"></tbody>
              </table>
              <div style={{ textAlign: 'center' }}>
                <p>
                  Your address is <b id="add"></b>
                </p>
              </div>
            </div>
          </section>

          <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
          <script src="js/popper.js"></script>
          <script src="js/bootstrap.min.js"></script>
          <script src="js/main.js"></script>
          <script src="js/web3.min.js"></script>
          <script src="js/truffle-contract.js"></script>
          <script src="js/sellerDataApp.js"></script>
        </body>
      </>
    );
  }
}

export default QuerySellerPage;
