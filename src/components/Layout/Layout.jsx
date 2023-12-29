import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";

export default function Layout() {
    return (
        <>
            <div className="max-w-[1600px] mx-auto w-full app-wrapper">
                <Navigation />
                <Outlet />
                <Footer />
            </div>
        </>
    );
}
