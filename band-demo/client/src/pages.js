import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
/** importing our pages */
import { Bands }  from './band';
import { AddBand} from './addBand';
import { BandDetail } from './bandDetail';

export function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Bands />} path="/" />
        <Route element={<AddBand />} path="addPet" />
        <Route path="petDetail">
            <Route element={<BandDetail />} path=":id" />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}
