import React, { Component } from 'react';
import './App.css';
import CustomerAndVendor from './components/customerAndVendor';
import Footer from './components/footer';
import MainBody from './components/mainBody';
// import Movies from './components/movies';
import Navbar from './components/navbar';
import Vendors from './components/vendors';
import WomanShopping from './components/womanShopping';

function App() {
  return (
    // <Movies />
    <React.Fragment>
      <Navbar />
      <MainBody />
      <CustomerAndVendor />
      <WomanShopping />
      <Vendors />
      <Footer />
    </React.Fragment>
  );
}

export default App;
