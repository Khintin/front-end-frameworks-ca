import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProduct } from "../../api/products";
import { useCartStore } from "../../api/cart";

export default function ProductDetailsPage() {
    const { addToCart } = useCartStore((state) => ({ addToCart: state.addToCart }));

    const { id } = useParams();

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [product, setProduct] = useState(null);
    const [discountPercentage, setDiscountPercentage] = useState(0);

    useEffect(() => {
        getProduct(id).then((prod) => {
            if (prod) {
                setProduct(prod);

                if (prod.discountedPrice < prod.price) {
                    let discount = (1 - prod.discountedPrice / prod.price) * 100;
                    setDiscountPercentage(Math.floor(discount));
                }

                console.log(prod);
            } else {
                setError(true);
            }

            setLoading(false);
        });
    }, []);

    if (loading) {
        return <h1>Please wait</h1>;
    } else if (error) {
        return <h1>This product doesnt exist</h1>;
    } else {
        return (
            <>
                <section className="flex flex-col md:flex-row max-w-7xl px-4 mx-auto gap-20 py-20 ">
                    <div>
                        <img src={product.imageUrl} />
                    </div>
                    <div className="gap-5 flex flex-col">
                        <h1 className="text-2xl font-medium">{product.title}</h1>
                        <h2 className="text-lg font-medium">Description</h2>
                        <p>{product.description}</p>
                        {discountPercentage > 0 && (
                            <div>
                                <strong className="text-red-600 line-through opacity-70">
                                    {product.price},-
                                </strong>
                                <strong className="text-red-600">-{discountPercentage}%</strong>
                            </div>
                        )}
                        <h3 className="text-medium font-semibold">{product.discountedPrice},-</h3>
                        <button
                            onClick={() => addToCart(product.id)}
                            className="w-max border-double border-red-400 border-4 rounded-lg hover:bg-red-400 py-1 px-4"
                        >
                            Add to Cart
                        </button>
                    </div>
                </section>
            </>
        );
    }
}
