import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCartStore } from "../../api/cart";

export default function ProductCard({ product }) {
    const { id, title, imageUrl, description, price, discountedPrice } = product;
    const { addToCart } = useCartStore((state) => ({ addToCart: state.addToCart }));
    const [discountPercentage, setDiscountPercentage] = useState(0);

    useEffect(() => {
        if (discountedPrice < price) {
            let discount = (1 - discountedPrice / price) * 100;
            setDiscountPercentage(Math.floor(discount));
        }
    }, []);

    return (
        <div key={id} className="bg-slate-300 p-4 flex flex-col gap-4 rounded-md">
            <h3 className="font-medium text-lg">{title}</h3>
            <div>
                <img src={imageUrl} className="h-48 object-cover w-full rounded-md" />
            </div>
            <div className="flex flex-col">
                <p>{description}</p>
                {discountPercentage > 0 && (
                    <div>
                        <strong className="text-red-600 line-through opacity-70">{price},-</strong>
                        <strong className="text-red-600">-{discountPercentage}%</strong>
                    </div>
                )}
                <strong>{discountedPrice},-</strong>
            </div>

            <div className="sm:flex-col text-center mt-auto flex gap-2 justify-center">
                <Link
                    to={`product/${id}`}
                    className="border-double border-red-400 border-4 rounded-lg hover:bg-red-400 py-1 px-4"
                >
                    View Product
                </Link>

                <button
                    onClick={() => addToCart(product.id)}
                    type="button"
                    className="border-double border-red-400 border-4 rounded-lg hover:bg-red-400 py-1 px-4"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
}
