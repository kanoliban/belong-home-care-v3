/**
 * Layout.tsx
 * Updated: 2025-03-20
 * Description: Updated padding to ensure consistent alignment with header and content
 * Updated: 2025-03-20
 * Description: Changed background color from stark white to a soft cream for a warmer feel
 * Updated: 2025-03-20
 * Description: Adjusted background color to a lighter ivory (#FFF8E1)
 * Updated: 2025-03-20
 * Description: Changed to a very subtle off-white (#FEFCF9) - barely off-white
 * Updated: 2025-03-20
 * Description: Changed to a very subtle blue-gray (#F8FAFC) - cool and minimal
 */
import React from 'react';
import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col">
      <Header />
      
      <motion.main 
        className="flex-grow py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Outlet />
      </motion.main>
      
      <Footer />
    </div>
  );
};

export default Layout;