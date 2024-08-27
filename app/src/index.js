import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLogin from './AdminLogin';

function ROUTES() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index path='/' element={<AdminLogin />} />
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ROUTES />);