import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Company from "./pages/Company";
import Contact from "./pages/Contact"
import NewProject from "./pages/NewProject"


const AppRoutes = ()=>{
    return(
        <Router>
            <Routes>
                <Route path='/home' element={ <Home /> } />
                <Route path='/' element={ <Home />  } />
                <Route path="/company" element={<Company />} />
                <Route  path="/contact" element={<Contact />} />
                <Route path="/newproject" element={<NewProject />} />
            
            </Routes>
        </Router>
    )
}

export default AppRoutes