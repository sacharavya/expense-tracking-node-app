/*
 *Import react packages here
 */
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

/*
 *Import ...
 */

/*
 *Import components here
 */
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'

/*
 *Import screens here
 */
import LoginScreen from './screens/LoginScreen'
import DashboardScreen from './screens/DashboardScreen'
import RegisterScreen from './screens/RegisterScreen'

function App() {
  let HideHeader =
    window.location.pathname === '/' ||
    window.location.pathname === '/register' ? null : (
      <Header />
    )
  let HideFooter =
    window.location.pathname === '/' ||
    window.location.pathname === '/register' ? null : (
      <Footer />
    )
  let HideSidebar =
    window.location.pathname === '/' ||
    window.location.pathname === '/register' ? null : (
      <Sidebar />
    )
  return (
    <Router>
      {HideHeader}
      {HideSidebar}
      <Routes>
        <Route path='/' element={<LoginScreen />} exact />
        <Route path='/register' element={<RegisterScreen />} exact />
        <Route path='/dashboard' element={<DashboardScreen />} exact />
      </Routes>
      {HideFooter}
    </Router>
  )
}

export default App
