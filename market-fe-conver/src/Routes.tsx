import React from "react";
import HomePage from './pages/HomePage';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ManufacturerPage from "pages/Manufacturer";
import SellerPage from "pages/SellerPage";
import AddProductPage from "pages/AddProductPage";
import QuerySellerPage from "pages/QuerySeller";
import ConsumerPage from "pages/ConsumerPage";
import SellProductToConsumer from "pages/SellProductToSeller";
import AddSellerPage from "pages/AddSeller";
import QueryProductsPage from "pages/QueryProduct";
import VerifyProductPage from "pages/VerifyProductPage";
import SellProductSellerPage from "pages/SellProductSeller";
import ConsumerProductHistory from "pages/customerPurchaseHistory";

const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/homePage" element={<HomePage />} />
          <Route path="/manufacturePage" element={<ManufacturerPage />} />
          <Route path="/sellerPage" element={<SellerPage />} />
          <Route path="/homePage" element={<HomePage />} />
          <Route path="/addProductPage" element={<AddProductPage />} />
          <Route path="/querySellerPage" element={<QuerySellerPage />} />
          <Route path="/consumerPage" element={<ConsumerPage />} />
          <Route path="/sellProductSellerPage" element={<SellProductToConsumer />} />          
          <Route path="/addSellerPage" element={<AddSellerPage />} />   
          <Route path="/queryProductsPage" element={<QueryProductsPage />} />   
          <Route path="/verifyProductPage" element={<VerifyProductPage />} />   
          <Route path="/sellProductToSellerPage" element={<SellProductSellerPage />} />   
          <Route path="/consumerPurchaseHistoryPage" element={< ConsumerProductHistory/>} />   


        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;