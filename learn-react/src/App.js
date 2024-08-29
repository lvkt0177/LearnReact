import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className='mt-5'>Lê Thịnh</h1>
    </div>
  );
}


export const Header = () => {
  return (
    <div className='container text-success mb-5'>This is my Header
      <div>Home | Logo</div>
    </div>
  )
}



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



export default App;
