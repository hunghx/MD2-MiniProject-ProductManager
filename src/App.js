import './App.css';
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import Home from './components/Home';
import RikkeiSoft from './components/RikkeiSoft';
import RikkeiAcademy from './components/RikkeiAcademy';
import AboutIndex from './components/AboutIndex';
import NotFound from './components/NotFound';
import Login from './components/Login';
import Checkout from './components/Checkout';
import CourseDetail from './components/CourseDetail';
import Abouts from './components/Abouts';
import React from 'react';
const CourseLazy = React.lazy(() => import('./components/Courses'));
function App() {
  const navLinkStyle = ({ isActive }) => ({
    color: isActive ? 'red' : 'black',
    backgroundColor: isActive ? 'black' : 'red'
  })
  return (
    <div className="App">
      <nav>
        <ul>
          <li><NavLink to={'/'} style={navLinkStyle}>Home</NavLink></li>
          <li><Link to={'/abouts'}>Abouts</Link></li>
          <li><NavLink to={'/courses'} style={navLinkStyle}>Course</NavLink></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/abouts' element={<Abouts />}>
          <Route index element={<AboutIndex />} />
          <Route path='rikkeiSoft' element={<RikkeiSoft />} />
          <Route path='rikkeiAcademy' element={<RikkeiAcademy />} />
        </Route>
        <Route path='/courses' element={
          <React.Suspense>
            <CourseLazy />
          </React.Suspense>
        } />
        <Route path='/login' element={<Login />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/courseDetail' element={<CourseDetail />} />
        <Route path='/courseDetail/:id' element={<CourseDetail />} />
        <Route path='/courseDetail/:id/:courseName' element={<CourseDetail />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div >
  );
}

export default App;
