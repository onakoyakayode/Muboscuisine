import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Routing from './routes'e
import Menu from './Component/Menu/Menu';
import Dashboard from './Component/Dashboard/Dashboard';
import SpecialFood from './Component/SpecialFood/SpecialFood';
import Book from './Component/Book/Book';
import Client from './Component/Client-Feedback/Client';
import Video from './Component/Video/Video';
import Footer from './Component/Footer/Footer';
import Navbar from './Component/Navbar/Navbar';
// import Allitems from './Component/AllItems/Allitems';
// import Intercontinental from './Component/Intercontinental/Intercontinental';
import Soups from './Component/Soups/Soups';
import LocalDish from './Component/Local Dish/LocalDish';
import Chops from './Component/Chops/Chops';
import AllItemsFood from './Component/AllItems/AllItemsFood';
import IntercontinentalFood from './Component/Intercontinental/IntercontinentalFood';
import Header from './Component/Header/Header';
import Pricelist from './Component/Pricelist/Pricelist';
import Hampton from './Component/Hampton/Hampton';
import FullNigerianStandard from './Component/FullNigerian/FullNigerianStandard';
import FullNigerianExecutive from './Component/FullNigerian/FullNigerianExecutive';
import Eko from './Component/Eko/Eko';
import NigeriaChinese1 from './Component/NigeriaChinese/NigeriaChinese1';
import NigeriaChinese2 from './Component/NigeriaChinese/NigeriaChinese2';
import NigeriaChinese3 from './Component/NigeriaChinese/NigeriaChinese3';
import ExecutiveBuffet from './Component/ExecutiveBuffet/ExecutiveBuffet';
import Continental from './Component/Continental/Continental';
import ChineseStandard from './Component/Chinese/ChineseStandard';
import ChineseExecutive from './Component/Chinese/ChineseExecutive';
import Thai from './Component/Thai/Thai';
import Indian from './Component/Indian/Indian';
import TwoCourse from './Component/TwoCourse/TwoCourse';
import Dessert from './Component/Dessert/Dessert';
import Kiddies from './Component/Kiddies/Kiddies';
import Breakfast from './Component/Breakfast/Breakfast';
import FingerFood from './Component/FingerFood/FingerFood';
// import Dashboard from './Component/Dashboard/Dashboard';




function App() {
  return (
      <Router>
       
       <div id='home'>
        <Navbar />
        <Header />
        <Dashboard>
          <Routes>
            {/* <Route path='/' element={<Header/>} /> */}
            <Route path= '/menu' element={<Menu/>} />
            <Route path='/allitems' element={<AllItemsFood />} />
            <Route path= '/intercontinental' element={<IntercontinentalFood/>} />
            <Route path= '/soups' element={<Soups/>}/>
            <Route path= '/localdish' element={<LocalDish /> }/>
            <Route path= '/chops' element={<Chops/>} />
          </Routes>
        </Dashboard>
        <SpecialFood />
        <Pricelist>
          <Routes>
            <Route path='/hampton' element={<Hampton />} />
            <Route path='/fullNigerianStandard' element={<FullNigerianStandard />} />
            {/* <Route path='/fullNigerianExecutive' element={<FullNigerianExecutive />} /> */}
            <Route path='/eko' element={<Eko />} />
            <Route path='/nigeriaChinese1' element={<NigeriaChinese1 />} />
            {/* <Route path='/nigeriaChinese2' element={<NigeriaChinese2 />} /> */}
            {/* <Route path='/nigeriaChinese3' element={<NigeriaChinese3 />} /> */}
            <Route path='/executiveBuffet' element ={<ExecutiveBuffet />} />
            <Route path='/continental' element ={<Continental />} />
            <Route path='/chineseStandard' element={<ChineseStandard />} />
            <Route path='/chineseExecutive' element={<ChineseExecutive />} />
            <Route path='/thai' element={<Thai />} />
            <Route path='/indian' element={<Indian />} />
            <Route path='/twoCourse' element={<TwoCourse />} />
            <Route path='/dessert' element={<Dessert />} />
            <Route path='/kiddies' element={<Kiddies />} />
            <Route path='/breakfast' element={<Breakfast />} />
            <Route path='/fingerFood' element={<FingerFood />} />
          </Routes>
        </Pricelist>
       <Book />
       <Client />
       <Video />
       <Footer />
       {/* <Learn /> */}
      </div>
        
      </Router>
  )
}

export default App;
