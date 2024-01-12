
import React, {Components} from 'react';
import { BrowserRouter,Routes, Route} from 'react-router-dom';
import Category from './Components/Category/Category';
import Casual from './Components/Mens/Casual';
import Sports from './Components/Mens/Sports';
import Suits from './Components/Mens/Suits';
import Traditional from './Components/Mens/Traditional';
import Churidhar from './Components/Womens/Churidhar/Churidhar';
import Frock from './Components/Womens/Frock/Frock';
import Officewear from './Components/Womens/Officewear/Officewear';
import Wtraditional from './Components/Womens/Wtraditional/Wtraditional';
import Kidgirl from './Components/Kids/Kidgirl/Kidgirl';
import Kidboy from './Components/Kids/Kidboy/Kidboy';
import Boyparty from './Components/Kids/Boyparty/Boyparty';
import Girlparty from './Components/Kids/Girlparty/Girlparty';
import Redshirt1 from './Components/Mens/Redshirt1';
import Greyshirt from './Components/Mens/Greyshirt';
import Blueshirt1 from './Components/Mens/Blueshirt1';
import Greyshirt1 from './Components/Mens/Greyshirt1';
import Order from './Components/Order';
import Form from './Components/Form';




const App = () => {
  return (
    <>
<BrowserRouter>

    <Routes>
    <Route path="/" element={<Category />}></Route>
    <Route path="Category" element={<Category />}></Route>
    <Route path="Form" element={<Form/>}></Route>
    <Route path="Order" element={<Order/>}></Route>

    
    <Route path="/Casual" element={< Casual />}></Route>
    <Route path="/Suits" element={< Suits />}></Route>
    <Route path="/Sports" element={< Sports />}></Route>
    <Route path="/Traditional" element={< Traditional />}></Route>
    <Route path="/Frock" element={< Frock />}></Route>
    <Route path="/Officewear" element={< Officewear />}></Route>
    <Route path="/Wtraditional" element={< Wtraditional />}></Route>
    <Route path="/Churidhar" element={< Churidhar />}></Route>
    <Route path="/Kidgirl" element={< Kidgirl />}></Route>
    <Route path="/Kidboy" element={< Kidboy />}></Route>
    <Route path="/Girlparty" element={< Girlparty />}></Route>
    <Route path="/Boyparty" element={< Boyparty />}></Route>
    <Route path="/Redshirt1" element={< Redshirt1 />}></Route>
    <Route path="/Blueshirt1" element={< Blueshirt1 />}></Route>
    <Route path="/Greyshirt1" element={< Greyshirt1 />}></Route>
    <Route path="/Greyshirt" element={< Greyshirt />}></Route>
</Routes>
    </BrowserRouter>
    
    </>
  );
};

export default App;
