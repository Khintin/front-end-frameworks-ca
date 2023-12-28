import { useEffect, useState } from "react";
import { getProduct } from "../../api/products";

export default function CartItem({ id, count, onPriceCalculated }) {
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState(null);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        getProduct(id).then((prod) => {
            if (prod) {
                setProduct(prod);

                const price = prod.discountedPrice * count;
                setTotalPrice(price.toFixed(2));
                onPriceCalculated(price);
            }

            setLoading(false);
        });
    }, []);

    if (loading) {
        return <h1>Please wait</h1>;
    } else {
        return (
            <div>
                <h2 className="text-xl font-medium ">
                    {product.title} x{count}
                </h2>
                <div className="flex flex-row justify-between items-center">
                    <img src={product.imageUrl} className="w-32 object-cover rounded-md" />
                    <p className="flex flex-col">
                        {totalPrice}
                        <a className="text-red-400">Remove</a>
                    </p>
                </div>
            </div>
        );
    }
}
