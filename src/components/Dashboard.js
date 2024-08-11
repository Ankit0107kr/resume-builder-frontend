import React from 'react';
import Header from './Header';
import Form from '../layouts/Form';

function Dashboard() {
  return (
    <>
      <div className="container mx-auto p-6">
        <h1 className="text-center text-3xl font-bold text-gray-800 mb-8">Let's generate your Resume!</h1>
        <Form />
      </div>
    </>
  );
}

export default Dashboard;
