import Contact from "./Pages/Contact"
import Home from "./Pages/Home"
import Privacy from "./Pages/Privacy"
import Terms from "./Pages/Terms"
import Traffic from "./Pages/Traffic"
// import Footer from "./Static/Footer"
import Header from "./Static/Header"
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Footer from "./Static/Footer"
import { useState } from "react";
import Disclaimer from "./Component/Disclaimer"



const App = () => {
  const [accepted, setAccepted] = useState(false);
  return (
    <div className="w-full overflow-x-hidden">
     {!accepted && <Disclaimer onAccept={() => setAccepted(true)} />}
<BrowserRouter>

<Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contacts" element={<Contact />} />
          <Route path="/privacy" element={<Privacy/>} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/Traffic" element={<Traffic />} />
          
         
          
        </Routes>
        <Footer/>
    </BrowserRouter> 
    
      {/* <Header/>
      <BrowserRouter>
      <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Contacts" element={<Contact/>}/>
    <Route path="/Privacy" element={<Privacy/>}/>
    <Route path="/Terms" element={<Terms/>}/>
    <Route path="/Traffic" element={ <Traffic/>}/>
    </Routes>
    </BrowserRouter>
    <Footer/> */}
    </div>
  )
}

export default App
