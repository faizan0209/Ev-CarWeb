import React from 'react';
import Nav from './Nav';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Background from './Background';

function Root({ playStatus, heroCount }) {
  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Root;
