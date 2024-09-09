import './App.css';

import { Header } from './Component/Header/index';

import './style.css';

import { Body } from './Component/Body/index';

import {Footer} from './Component/Footer/index';

function App() {
  const isLogin = false;
  
  return (
    <div className=''>
      {/* Header */}
      <Header />
      
      <Body/>

      {/* Footer */}
      <Footer />
      
    </div>
  );
}
export default App;
