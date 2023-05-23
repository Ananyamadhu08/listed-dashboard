import React from 'react';
import { Sidebar } from '../components';

function Home() {
  return (
    <div className="grid grid-cols-8 grid-rows-6 h-screen">
      <Sidebar />

      <div className="row-span-5 xl:row-span-6 col-span-8 xl:col-span-6">
        Left Section
      </div>
    </div>
  );
}

export default Home;
