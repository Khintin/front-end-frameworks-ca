import { useEffect, useState } from "react";

import SaleBanner from "../../assets/salebanner.jpg";
import HomeProductList from "./HomeProductList";
import { getProducts } from "../../api/products";
import Searchbar from "./Searchbar";

export default function HomePage() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then((prod) => {
            console.log(prod);
            if (prod && prod.length > 0) {
                setProducts(prod);
            } else {
                setError(true);
            }

            setLoading(false);
        });
    }, []);

    return (
        <>
            <main className="max-w-7xl px-4 mx-auto">
                <div className="mx-auto flex justify-center  md:flex-row md:justify-end gap-3 py-3">
                    <Searchbar products={products} />
                </div>
                <img src={SaleBanner} alt="Sale Banner Name" className="mx-auto w-full " />
                <div>
                    <h1 className="font-medium text-3xl my-10">HOT DEALS</h1>
                    <h3 className="text-2xl py-5 font-bold">Latest Items</h3>
                </div>
                <div>
                    <HomeProductList products={products} />
                </div>
            </main>
        </>
    );
}
