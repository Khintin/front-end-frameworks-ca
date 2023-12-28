import { useState } from "react";
import { Link } from "react-router-dom";
import ShippingIcon from "../../assets/icons8-shipping-64.png";
import { useCartStore } from "../../api/cart";
import CartItem from "./CartItem";

const CheckOutPage = () => {
    let _totalPrice = 0;
    const [totalPrice, setTotalPrice] = useState(_totalPrice);

    const { getCart } = useCartStore((state) => ({ getCart: state.getCart }));

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        address: "",
        creditCard: "",
        promoCode: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the form submission (e.g., send data to a server)
        console.log("Form submitted:", formData);
    };

    const handlePriceTotal = (e) => {
        _totalPrice += e;
        setTotalPrice(_totalPrice.toFixed(2));
    };

    return (
        <>
            <section className=" py-20">
                <div className="bg-slate-300 mx-40 py-10 rounded-lg">
                    <h1 className="text-center  text-4xl font-semi-bold">Your Cart</h1>
                    <div className="max-w-7xl mx-auto px-5 lg:px-56 mt-24">
                        {getCart().map((cartItem) => (
                            <CartItem
                                key={cartItem.id}
                                id={cartItem.id}
                                count={cartItem.count}
                                onPriceCalculated={handlePriceTotal}
                            />
                        ))}
                        <div>
                            <div className="mb-4">
                                <label
                                    htmlFor="promoCode"
                                    className="block mt-10 font-medium text-lg text-gray-600"
                                >
                                    Promo Code
                                </label>
                                <input
                                    type="text"
                                    id="promoCode"
                                    name="promoCode"
                                    value={formData.promoCode}
                                    onChange={handleChange}
                                    className="mt-1 p-2 w-full border rounded-md"
                                />
                            </div>
                            <div className="flex :flex-row justify-between text-base text-blue-600 my-5">
                                <a href="/">Continue Shopping</a>
                                <a href="/">Add to Wish List</a>
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
                    <div className="max-w-md mx-auto mt-8 p-8 bg-slate-200 rounded-lg">
                        <h2 className="text-2xl font-semibold mb-4">Checkout</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-600"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="mt-1 p-2 w-full border rounded-md"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-600"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="mt-1 p-2 w-full border rounded-md"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="address"
                                    className="block text-sm font-medium text-gray-600"
                                >
                                    Address
                                </label>
                                <textarea
                                    id="address"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    rows="3"
                                    className="mt-1 p-2 w-full border rounded-md"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="creditCard"
                                    className="block text-sm font-medium text-gray-600"
                                >
                                    Credit Card
                                </label>
                                <input
                                    type="text"
                                    id="creditCard"
                                    name="creditCard"
                                    value={formData.creditCard}
                                    onChange={handleChange}
                                    className="mt-1 p-2 w-full border rounded-md"
                                    required
                                />
                            </div>
                            <div className="mt-4 justify-center flex">
                                <Link
                                    to="/success"
                                    className="border-double border-red-400 border-4 rounded-lg hover:bg-red-400 py-1 px-8"
                                >
                                    Place Order
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CheckOutPage;
