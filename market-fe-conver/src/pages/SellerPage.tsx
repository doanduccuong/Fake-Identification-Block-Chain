import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css';
import './css/style.css';

const SellerPage: React.FC = () => {
  return (
    <div>
      <header>
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
        </section>

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
              <ul className="navbar-nav m-auto">
                <li className="nav-item">
                  <a href="index.html" className="nav-link">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="sellProductSeller.html" className="nav-link">
                    Sell Product To Consumer
                  </a>
                </li>
                <li className="nav-item">
                  <a href="queryProducts.html" className="nav-link">
                    Products For Sale
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <section>
        <div className="container">
          <h2>Seller</h2>
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
    </div>
  );
};

export default SellerPage;
