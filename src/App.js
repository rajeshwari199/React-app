import {Routes,Route} from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import Footer from './component/footer';
import Login from './component/login';
import Signin from './component/signin';


function App() {
  return(
    <div>
    
      <Header/>
     <Routes>
      {/* <Route path="/" element= /> */}
         <Route exact path="/Login" element={<Login/>}/>
         <Route exact path="/Signin" element={<Signin/>}/>


     </Routes>
     <Footer/>
    </div>

  )
}

export default App;