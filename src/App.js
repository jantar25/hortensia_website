import React, { useState } from 'react'
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Sidebar from './Components/Sidebar';
import DasboardNavbar from './Components/DasboardNavbar';
import ScrollToTop from './Components/ScrollToTop';
import Home from './Pages/Home';
import Dashboard from './Admin/Dashboard';

function App() {
  const { currentUser } = useSelector(state => state?.currentUser)
  const [toggleSidebar,setToggleSidebar] = useState(true)

  const handleSidebar = () => {
    setToggleSidebar(!toggleSidebar)
  }

  return (
    <div className="font-Manrope">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={
            <div>
              <ScrollToTop />
              <Navbar />
              <div className="min-h-[60vh]">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="*" element={<p className='text-center text-4xl font-bold pt-48'>There is nothing here: 404!</p>} />
                </Routes>
              </div>
              <Footer />
            </div>}
          />
          <Route path="/dashboard/*" element={currentUser?.userType === false? (
            <div>
              <DasboardNavbar handleSidebar={handleSidebar} />
              <div className='flex'>
                { toggleSidebar && <Sidebar handleSidebar={ handleSidebar } /> }
                <div className='flex-auto max-w-[100vw]'>
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                  </Routes>
                </div>
              </div>
            </div>
          ): <Navigate to="/" /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
