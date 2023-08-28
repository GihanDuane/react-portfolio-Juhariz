import React from 'react';
import Header from './components/Header';
import Project from './Pages/Project';
// import NavAlbum from './components/NavAlbum';
import ArtworkGrid from './components/ArtworkGrid';
import './style.css'; // Import your custom CSS here

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <Project />
      <ArtworkGrid />
      <footer>&copy; 2023 Kheil Artimist. All rights reserved.</footer>
    </div>
  );
}

export default App;
