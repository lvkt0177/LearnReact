import logo from './logo.svg';
import './App.css';
import { Header } from './Component/Header/index';
import './style.css';
import { MyName, MyWifeWithVariableCss, DeA1, DeA1_2, Content,Button_ChangeValue } from './Component/Body/index';

import {Footer} from './Component/Footer/index';

function App() {

  var arrayNumber = [0, 1, 2, 1, 2, 4, 6, 4, 6, 3, 1, 6];


  return (
    <div className='container'>
      {/* Header */}
      <Header />

      <div className='row'>
        <div className='col-12 text-center text-success bg-dark'>
          <DeA1 />
          <DeA1_2 />
          <DeA1_2 />
          <MyName />
          <MyWifeWithVariableCss />

          <div className='bg-dark text-light'>

            {arrayNumber.map(item => { 
              if (item == 6) {
                return (<MyWifeWithVariableCss />)
              }
              
              return (
                <Content key={item} text={item} type={item == 1 || item == 3} />
              )
              
              
            })}
           
          </div>

          <div>
              <Button_ChangeValue/>
          </div>

        </div>
      </div>

      {/* Footer */}
      <Footer/>
    </div>

    

  );
}


export default App;


