import { Route, Routes } from "react-router";

// pages
import Home from '../pages/home'
import About from "../pages/about";

// layouts
import MainLayout from "../layouts/mainLayout";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route path="home" element={<Home />} />
                <Route path="about" element={<About />} />
            </Route>
        </Routes>
    );
}
