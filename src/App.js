import React from 'react';
import Header from './components/Header';
import Home from './Pages/Home';
import Resume from './Pages/Resume';
// import ArtworkGrid from './components/ArtworkGrid';
import './style.css'; // Import your custom CSS here


function App() {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Home />
      break
    case "/Home":
      component = <Home />
      break  
    case "/Resume":
      component = <Resume />
      break
  }

  return (
    <div className="App">
      <Header />
      <div className="container">{component}</div>
      {/* <Project /> */}
      {/* <NavAlbum /> */}
      {/* <ArtworkGrid /> */}
      {/* <footer>&copy; 2023 Kheil Artimist. All rights reserved.</footer> */}
    </div>
  );
}

export default App;
