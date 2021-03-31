import './App.css';
import Adress from './Component/Profile/Address'
import FullName from './Component/Profile/FullName'
import ProfilPhoto from './Component/Profile/ProfilPhoto'

function App() {
  return (
    <div className="card">
      <ProfilPhoto />
      <FullName />
      <Adress />
      <p><button>Contact</button></p>
      
    </div>
  );
}

export default App;
