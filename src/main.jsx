import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './first.css';
import Posts from './second.jsx'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <><center><h1>Blog Application</h1></center>   
    </>
    <Posts />  
  </StrictMode>,
);