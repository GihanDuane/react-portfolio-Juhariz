import React from 'react';
import Header from './components/Header';
import Project from './Pages/Project';
import ArtworkGrid from './components/ArtworkGrid';
import './style.css'; // Import your custom CSS here

function App() {
  return (
    <div className="App">
      <Header />
      <Project />
      {/* <NavAlbum /> */}
      <ArtworkGrid />
      <footer>&copy; 2023 Kheil Artimist. All rights reserved.</footer>
    </div>
  );
}

export default App;
