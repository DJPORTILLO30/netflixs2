import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { DataProvider } from './context/DataProvider';
import { Catalogo } from './components/catalago/catalogo';
import Home from './components/home/home';
import Video from './components/video/video';

function App() {

  return (
      <DataProvider>
        <div className='App'>
        <Routes>
                <Route path="/" element={ <Home />} ></Route>
                <Route path="/catalogo" element={ <Catalogo />} ></Route>
                <Route path="/catalogo/:videoId" element={<Video />} />
          </Routes>
        </div>
      </DataProvider>
  );
}

export default App;