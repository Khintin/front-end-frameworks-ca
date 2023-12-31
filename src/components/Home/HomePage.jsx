import { useEffect, useState } from "react";

import SaleBanner from "../../assets/red-boxes-celebrating-discounts.jpg";
import HomeProductList from "./HomeProductList";
import { getProducts } from "../../api/products";
import Searchbar from "./Searchbar";
import Infobox from "../Shared/Infobox";

export default function HomePage() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        getProducts().then((prod) => {
            if (prod && prod.length > 0) {
                setProducts(prod);
                setFilteredProducts(prod);
            } else {
                setError(true);
            }

            setLoading(false);
        });
    }, []);

    const handleFilteredProducts = (prod) => {
        setFilteredProducts(prod);
    };

    if (loading) {
        <h1>Please wait</h1>;
    } else if (error) {
        <h1>Something went wrong, please try again later</h1>;
    } else if (filteredProducts.length === 0) {
        return (
            <main className="max-w-7xl px-4 mx-auto w-full">
                <div className="mx-auto flex justify-center md:flex-row md:justify-end gap-3 py-3">
                    <Searchbar products={products} onProductsFiltered={handleFilteredProducts} />
                </div>
                <Infobox
                    title="No matches"
                    text="We couldn't find any products that match your search term"
                    type="info"
                />
            </main>
        );
    } else {
        return (
            <>
                <main className="max-w-7xl px-4 mx-auto w-full">
                    <div className="mx-auto flex justify-center md:flex-row md:justify-end gap-3 py-3">
                        <Searchbar
                            products={products}
                            onProductsFiltered={handleFilteredProducts}
                        />
                    </div>
                    <img src={SaleBanner} alt="Sale Banner Name" className="mx-auto w-full " />
                    <div>
                        <h1 className="font-medium text-3xl my-10">HOT DEALS</h1>
                        <h3 className="text-2xl py-5 font-bold">Latest Items</h3>
                    </div>
                    <div>
                        <HomeProductList products={filteredProducts} />
                    </div>
                </main>
            </>
        );
    }
}
