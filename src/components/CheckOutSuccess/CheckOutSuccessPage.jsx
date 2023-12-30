import { useEffect } from "react";
import { useCartStore } from "../../api/cart";
import PurchasedImage from "../../assets/checkoutimg.png";
import { Link } from "react-router-dom";

export default function CheckOutSucessPage() {
    const { clearCart } = useCartStore((state) => ({ clearCart: state.clearCart }));

    useEffect(() => {
        clearCart();
    }, []);

    return (
        <>
            <section className="h-full max-w-xl mx-auto flex flex-col text-center justify-center items-center my-12">
                <h1 className="text-6xl">Thank You!</h1>
                <h2 className="mt-10 text-3xl">Your Order is Confirmed!</h2>
                <img src={PurchasedImage} alt="check-out confirmed image" className="w-150" />
                <Link
                    to="/"
                    className="max-w-4xl mx-auto border-double border-red-400 border-4 hover:bg-red-400 py-1 px-4"
                >
                    Back to homepage
                </Link>
            </section>
        </>
    );
}
