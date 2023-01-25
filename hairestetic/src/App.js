import React from "react";
import './App.css';
import Header from './components/Header';
import Services from './components/Services/Services';
import styled from 'styled-components';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cosmetology from "./components/Services/Items/Cosmetology";
import Hair from "./components/Services/Items/Hair";
import Nails from "./components/Services/Items/Nails";
import Massage from "./components/Services/Items/Massage";
import Eyebrows from "./components/Services/Items/Eyebrows";
import Makeup from "./components/Services/Items/Makeup";
import Content from "./components/Content";


const MainWrapper = styled.div`
  display: grid;
  grid-template-rows: 150px 1fr;
  grid-template-columns: 2fr 10fr;
  gap: 10px;
  grid-template-areas:
  "h h  "
  "s p "
`;

function App() {
  return (
    <BrowserRouter>
      <MainWrapper>
        <Header/>
        <Services/>
        <Routes>
          <Route path="/cosmetology" element={<Cosmetology/>}/>
          <Route path="/hair" element={<Hair/>}/>
          <Route path="/nails" element={<Nails/>}/>
          <Route path="/massage" element={<Massage/>}/>
          <Route path="eyebrows" element={<Eyebrows/>}/>
          <Route path="/makeup" element={<Makeup/>}/>
        </Routes>
        <Content/>
      </MainWrapper>
    </BrowserRouter>

  );
}

export default App;
