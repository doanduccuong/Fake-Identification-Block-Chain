import React from "react";
import HomePage from './pages/HomePage';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ManufacturerPage from "pages/Manufacturer";
import AddProductPage from "pages/AddProductPage";
import SellerPage from "pages/SellerPage";
import QuerySellerPage from "pages/QuerySeller";
import SellProductToSeller from "pages/SellProductToSeller";
import ConsumerPage from "pages/ConsumerPage";
import SellProductSellerPage from "pages/SellProductSeller";
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/homePage" element={<HomePage />} />
          <Route path="/manufacturePage" element={<ManufacturerPage />} />
          <Route path="/sellerPage" element={<SellerPage />} />
          <Route path="/consumerPage" element={<HomePage />} />
          <Route path="/addProductPage" element={<AddProductPage />} />
          <Route path="/productToSellerPage" element={<SellProductToSeller />} />
          <Route path="/querySellerPage" element={<QuerySellerPage />} />
          <Route path="/consumerPage" element={<ConsumerPage />} />
          <Route path="/sellProductSellerPage" element={<SellProductSellerPage />} />          
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
