import { Analytics } from "@vercel/analytics/react";
import Home from "./pages/Home";
import { inject } from "@vercel/analytics";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Navbar from "./components/navbar/Navbar";
import Contact from "./pages/Contact";
import Footer from "./components/footer/Footer";

const routes = [
    { element: <Home />, path: "/" },
    { element: <About />, path: "/about" },
    { element: <Contact />, path: "/contact" },
];

function App() {
    inject();
    return (
        <div className="flex min-h-screen w-full flex-col overflow-x-hidden">
            <Navbar />
            <div className="flex flex-grow flex-col lg:mt-16">
                <Routes>
                    {routes.map((route, index) => (
                        <Route
                            element={route.element}
                            path={route.path}
                            key={index}
                        />
                    ))}
                </Routes>
            </div>
            {process.env.NODE_ENV !== "development" && <Analytics />}
            <Footer />
        </div>
    );
}

export default App;
