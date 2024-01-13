 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './Vue/loginPage';
import DeclarerVehicule from './Vue/Client/deraclarerVol';
import DeclarerVehiculeSuiv from './Vue/Client/DeclarationVolSvt';
import SignUp from './Vue/SignUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element = {<LoginPage/>}></Route>
          <Route    path="/SignUp" element = {<SignUp/>}></Route>
          <Route    path="/DeclarerVehicule" element = {<DeclarerVehicule/>}></Route>
          <Route    path="/DeclarerVehiculeSuiv" element = {<DeclarerVehiculeSuiv/>}></Route>
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
