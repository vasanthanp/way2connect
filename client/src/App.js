import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import routes from './routes';
import helperService from './service/helperService';
export default function App() {
  return (
    <BrowserRouter>
      {helperService.checkLogin()}
      {routes}
    </BrowserRouter>
  )
}
