import React from 'react';
import Navbar from './components/Navbar';
import ArtworkGrid from './components/ArtworkGrid';
import Contact from './components/Contact';
import './style.css'; // Import your custom CSS here

function App() {
  return (
    <div className="App">
      <Navbar />
      <ArtworkGrid />
      <Contact />
      <footer>&copy; 2023 Kheil Artimist. All rights reserved.</footer>
    </div>
  );
}

export default App;
