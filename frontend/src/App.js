import { Routes, Route, Navigate } from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar.js'
import './App.css'

// Import Pages
import ListEmployees from './Pages/ListEmployees/ListEmployees.js'
import CreateEmployee from './Pages/CreateEmployee/CreateEmployee.js'
import Page404 from './Pages/Page404/Page404.js'
import Footer from './Components/Footer/Footer.js'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<ListEmployees />} />
        <Route path='/create-employee' element={<CreateEmployee />} />
        <Route path='/404' element={<Page404 />} />
        <Route path='*' element={<Navigate to="404"/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
