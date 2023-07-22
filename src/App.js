import React from 'react'
import Admin from './components/Admin'
import { Route, Routes } from 'react-router-dom';
import { Catalog } from './components/Catalog';
import { Products } from './components/Products';
import { Accounts } from './components/Accounts';
import { NotFound } from './components/NotFound';

 const App = () => {
  return (
    <div>
      <Routes>
        <Route path='admin' element={<Admin/>} >
          <Route index element={<Catalog/>}/>
          <Route path='products' element={<Products/>}/>
          <Route path='accounts' element={<Accounts/>}/>
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  )
}
export default App;
