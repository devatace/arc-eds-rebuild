import { Route, Routes } from "react-router";

// pages
import Home from '../pages/home'

// layouts

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    );
}
