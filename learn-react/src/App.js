import logo from './logo.svg';
import './App.css';
import { Header } from './Component/Header/index';
import { DeA1, DeA1_2 } from './Component/Body/DeA1';
import { DeA2 } from './Component/Body/DeA2';
import { MyName, MyWifeWithVariableCss } from './Component/Body/MyName';


function App() {
  return (
    <div className='container'>
      <Header />
      <div className='row'>
        <div className='col-12 text-center text-success'>
          <DeA1 />
          <DeA1_2 />
          <MyName />
          <MyWifeWithVariableCss />
        </div>
      </div>

      <DeA2 />

      <Body />

      <MyContent />

      <Content_1 />

    </div>
  );
}


export const Content_1 = () => {
  return (
    <p>Content_1 is here</p>
  )
};

export const Body = () => {
  return (
    <div className='container text-danger'>This is my Body
      <div>List product</div>
    </div>
  )
}

export const Footer = () => {
  return (
    <div className='container mt-5'>
      <div>This is my Footer</div>
      <div>About Us</div>
    </div>
  )
}

export const MyContent = () => {
  return (
    <div className='container mt-5'>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente velit dolores debitis nisi beatae perspiciatis, qui ipsam sequi impedit quas corrupti eaque tempora quos magnam temporibus minus atque, natus eligendi.</p>
    </div>
  )
}

export default App;


