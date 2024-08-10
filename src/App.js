import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title='TextUtils' />
      {/* <Navbar/> */}
      <div className="container my-3">
        <TextForm heading='Enter the Text to Analyze Below'/>
      </div>
    </>
  );
}

export default App;