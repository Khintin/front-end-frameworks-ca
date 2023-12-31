import { Form, Link } from "react-router-dom";
import Menu from "../../assets/icons8-menu-48.png";
import { useState } from "react";
import cart from "../../assets/icons8-cart-64.png";
import { useCartStore } from "../../api/cart";

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { getItemCount } = useCartStore((state) => ({ getItemCount: state.getItemCount }));

    const handleMobileMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <header className="bg-slate-200">
                <div className="max-w-7xl mx-auto flex flex-col text-center px-4 ">
                    <nav className="w-full py-4 flex flex-row justify-between items-center relative">
                        <Link to="/">
                            <h2 className="font-bold text-2xl text-red-400 ">eStore</h2>
                        </Link>
                        <ul
                            className={`${
                                isMenuOpen ? "flex" : "hidden"
                            } absolute md:flex-row md:relative md:top-auto md:w-auto md:bg-transparent top-[60px] w-full bg-slate-300 z-10 md:flex flex-col items-center p-4 text-black gap-4 text-lg justify-center`}
                        >
                            <li className="text-medium font-semibold hover:text-red-400 flex flex-row items-center px-4 justify-end">
                                <Link to="/">HOME</Link>
                            </li>
                            <li className="text-medium font-semibold hover:text-red-400 flex flex-row px justify-end">
                                <Link to="/contact">CONTACT</Link>
                            </li>
                            <li className="relative">
                                <span className="pointer-events-none absolute inset-0 w-full h-full pl-2 pt-0.5 text-red-500 font-bold">
                                    {getItemCount()}
                                </span>
                                <Link to="/checkout">
                                    <img
                                        src={cart}
                                        alt="cart-icon"
                                        className="pl-1 flex sm:justify-center w-11"
                                    />
                                </Link>
                            </li>
                        </ul>
                        <div
                            className="px-4 cursor-pointer md:hidden w-14"
                            onClick={handleMobileMenuClick}
                        >
                            <img src={Menu} />
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
}
