import { useEffect, useState } from "react";

import SaleBanner from "../../assets/salebanner.png";
import HomeProductList from "./HomeProductList";
import { getProducts } from "../../api/products";
import Searchbar from "./Searchbar";
import Infobox from "../Shared/Infobox";

export default function HomePage() {
    // TODO:
    // Fix checkout/cart page design
    // Fix cart icon to black icon, so the white text is visible
    // Deploy to netlfiy
    // Fix View proeduct/add to cart buttons to be flex-col when on small screens, and center text on both

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
    } else if (error) {
    } else if (filteredProducts.length == 0) {
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
