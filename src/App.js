import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Services from './components/Services';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
// import './assets/css/bootstrap.min.css';
// import "./assets/css/main.css";
// import "./assets/css/responsive.css";

function App() {
  
    {/* <AuthContextProvider> */}
    
    // const {isLoggedIn,setIsLoggedIn,loggedInBorhanUserInfo,setLoggedInBorhanUserInfo}=useContext(AuthContext);
    // useEffect(() => {
    //   if(localStorage.getItem('token')!== null)
    //   {
    //     homeAction.getBorhanUserDetails((err,res)=>{
    //       if(err){
    //         console.log(err,"helllooo")
    //         setIsLoggedIn(false);
    //         localStorage.removeItem('token')
    //         // localStorage.removeItem('token');
    //       }else{
    //       //   setGetCategories(res.data);
    //       //   console.log(res.data,"user details daata ");
    //         // setUserDetails(  res.data  );
    //         setIsLoggedIn(true);
    //         setLoggedInBorhanUserInfo(res.data);
    //       //   setGetProfilePic(res.data.profilePic)
    //       }
    //     });
    //   
    // }, [isLoggedIn])
    
  return (
    <>
    <Router>
      <Header/>
    <Routes>
    <Route exact path="/" key="home"  element={<Home/>} />
    <Route exact path="/resume" key="resume"  element={<Resume/>} />
    <Route exact path="/services" key="services"  element={<Services/>} />
    <Route exact path="/portfolio" key="portfolio"  element={<Portfolio/>} />
    <Route exact path="/contact" key="contact"  element={<Contact/>} />
    <Route exact path="/about" key="about"  element={<About/>} />

    </Routes>
    </Router> 
    </>
  );
}

export default App;
