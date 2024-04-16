import React from 'react';
import Navbar from '../components/Navbar';
import Main from '../components/Main';
import BlogsComponent from '../components/blogs'; 
import Donations from '../components/donations';

function Home() {
  return (
    <div>
      <Navbar />
      <Main />
      <BlogsComponent /> 
      <Donations />
    </div>
  );
}

export default Home;


