import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Jumbo from "./components/Jumbo";
import Footer from "./components/Footer";

function App() {
  return (
    
    <div className="container-fluid">
      <Jumbo />
      <div className="container">
        <h2>helloo</h2>
      </div>
      <Footer />
    </div>
  );
}

export default App;
