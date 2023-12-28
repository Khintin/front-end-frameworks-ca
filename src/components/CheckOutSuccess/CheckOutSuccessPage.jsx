import { useEffect } from "react";
import { useCartStore } from "../../api/cart";
import PurchasedImage from "../../assets/checkoutimg.jpg";
import { Link } from "react-router-dom";

export default function CheckOutSucessPage() {
    const { clearCart } = useCartStore((state) => ({ clearCart: state.clearCart }));

    useEffect(() => {
        clearCart();
    }, []);

    return (
        <>
            <section className="max-w-7xl mx-auto flex flex-col text-center justify-center my-40">
                <h1 className="text-6xl">Thank You!</h1>
                <h2 className="mt-10 text-3xl">Your Order is Confirmed!</h2>
                <img src={PurchasedImage} className="max-w-lg mx-auto" />
                <Link
                    to="/"
                    className="max-w-4xl mx-auto border-double border-red-400 border-4 hover:bg-red-400 py-1 px-4"
                >
                    Done
                </Link>
            </section>
        </>
    );
}
