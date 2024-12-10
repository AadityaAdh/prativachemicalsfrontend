import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Aboutpage from './pages/Aboutpage';
import Adminhome from './Components/Adminhome';
import Adminhomecontent from './Components/Adminhomecontent';
import Adminorders from './pages/Adminorders';
import Adminproductspage from './pages/Adminproductspage';
import Adminaddpage from './pages/Adminaddpage';


function App() {
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        
        <Route path="/aboutus" element={<Aboutpage />} />
        <Route path='/adminhome' element={<Adminhome allowconent={true}/>}/>
        <Route path='/adminhomecontent' element={<Adminhomecontent/>}/>
        <Route path='/adminorders' element={<Adminorders/>}/>
        
        <Route path='/adminproducts' element={<Adminproductspage/>}/>
        <Route path='/adminadd' element={<Adminaddpage/>}/>





        
      </Routes>
    </Router>
      



    </div>
  );
}

export default App;
