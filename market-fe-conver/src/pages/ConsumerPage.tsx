import React from 'react';
import { Link } from 'react-router-dom';

const ConsumerPage: React.FC = () => {
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
                                    <Link to="/consumerPurchaseHistoryPage" className="nav-link">Consumer Purchase History</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/verifyProductPage" className="nav-link">Product Verification</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
              {/* <div className="collapse navbar-collapse" id="ftco-nav">
                <ul className="navbar-nav m-auto">
                  <li className="nav-item">
                    <a href="index.html" className="nav-link">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="consumerPurchaseHistory.html" className="nav-link">
                      Consumer Purchase History
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="verifyProducts.html" className="nav-link">
                      Product Verification
                    </a>
                  </li>
                </ul>
              </div> */}
            </div>
          </nav>
        </section>
        <section>
          <div className="container">
            <h2>Consumer</h2>
            <h3>Go to navigation bar to perform operations.</h3>
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
    </html>
  );
};

export default ConsumerPage;
