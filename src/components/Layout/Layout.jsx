import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";

export default function Layout() {
    return (
        <>
            <div className="max-w-[1600px] mx-auto flex flex-col justify-center">
                <Navigation />
                <Outlet />
                <Footer />
            </div>
        </>
    );
}
