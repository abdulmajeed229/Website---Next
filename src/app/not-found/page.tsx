


import React from 'react';

import Link from 'next/link';

function NotFound(){
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="text-2xl text-gray-600 mt-4">Page Not Found</p>
        <p className="text-gray-500 mt-2">Sorry, the page you are looking for does not exist.</p>
        <Link href={'/Home'}
          className="mt-6 inline-block px-6 py-3 text-white bg-blue-500 hover:bg-blue-600 rounded-lg"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
