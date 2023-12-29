import { useState } from "react";
import { Link } from "react-router-dom";
import ShippingIcon from "../../assets/icons8-shipping-64.png";
import { useCartStore } from "../../api/cart";
import CartItem from "./CartItem";

const CheckOutPage = () => {
    let _totalPrice = 0;
    const [totalPrice, setTotalPrice] = useState(_totalPrice);

    const { getCart } = useCartStore((state) => ({ getCart: state.getCart }));

    const handlePriceTotal = (e) => {
        _totalPrice += e;
        setTotalPrice(_totalPrice.toFixed(2));
    };

    return (
        <>
            <section className="max-w-4xl mx-auto px-4 w-full my-auto">
                <div className="bg-slate-300 mx-auto py-10 rounded-lg w-full mt-12">
                    <h1 className="text-center text-4xl font-semi-bold">Your Cart</h1>
                    <div className="max-w-7xl mx-auto px-4 mt-24">
                        {getCart().length == 0 && (
                            <div className="bg-white p-4 rounded-md text-center">
                                <h3 className="text-xl">REPLACE ME</h3>
                                <p>Your cart is empty</p>
                            </div>
                        )}
                        {getCart().map((cartItem) => (
                            <CartItem
                                key={cartItem.id}
                                id={cartItem.id}
                                count={cartItem.count}
                                onPriceCalculated={handlePriceTotal}
                            />
                        ))}
                        <div>
                            <div className="mt-20 flex :flex-row justify-between text-lg text-blue-600 my-5">
                                <a href="/">Continue Shopping</a>
                            </div>
                            <div className="my-5">
                                <img src={ShippingIcon} />
                                <p>Free Shipping Worldwide</p>
                            </div>
                            <div className="flex flex-row justify-between">
                                <h2 className="text-xl font-medium">Total</h2>
                                <p className="text-xl font-medium">{totalPrice},-</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 justify-center flex">
                        <Link
                            to="/success"
                            className="border-double border-red-400 border-4 rounded-lg hover:bg-red-400 py-1 px-8"
                        >
                            Place Order
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CheckOutPage;
