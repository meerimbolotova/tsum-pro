import React from 'react';
import Navbar from './components/navbar/Navbar';
import MainRoutes from './routes/MainRoutes';
import Footer from './components/Footer/Footer';
import { Provider } from 'react-redux';
import { store } from './store';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <MainRoutes />
        <Footer />
      </Provider>
    </>
  );
};

export default App;
