import React from 'react';import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login/login';

function Router(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>} />

            </Routes>
        </BrowserRouter>
    )
}
export default Router;