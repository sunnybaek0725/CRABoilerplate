import {Routes, Route} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import RouteList from './app/router';

function App() {
  return (
      <>
          <h1>React Boilerplate App !</h1>
          <Header />
          <div>
              <Routes>
                  {
                      RouteList.map((item, index) => (
                          <Route key={index} {...item} />
                      ))
                  }
              </Routes>
          </div>
          <Footer />
      </>
  );
}

export default App;
