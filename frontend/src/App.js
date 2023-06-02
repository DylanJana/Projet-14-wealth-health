import { Routes, Route, Navigate } from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar'
import './App.css'

// Import Pages
import ListEmployees from './Pages/ListEmployees/ListEmployees'
import CreateEmployee from './Pages/CreateEmployee/CreateEmployee'
import Page404 from './Pages/Page404/Page404'
import Footer from './Components/Footer/Footer'

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
