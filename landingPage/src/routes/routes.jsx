import { Route, Routes } from "react-router";

// pages
import Home from '../pages/home'
import MainLayout from "../layouts/mainLayout";

// layouts

export default function AppRoutes() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
            </Route>
        </Routes>
    );
}
