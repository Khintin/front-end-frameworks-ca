import { useState } from "react";
import { Link } from "react-router-dom";

export default function Searchbar({ products, onProductsFiltered }) {
    const [matches, setMatches] = useState([]);

    const onInput = (event) => {
        let searchTerm = event.target.value.toLowerCase();

        if (!searchTerm || searchTerm.length < 3) {
            setMatches([]);
            onProductsFiltered(products);
        } else if (products.length > 0) {
            const list = products.filter((p) => p.title.toLowerCase().indexOf(searchTerm) > -1);
            setMatches(list);
            onProductsFiltered(list);
        }
    };

    return (
        <div className="w-full search-bar flex flex-col relative">
            <input
                onKeyUp={onInput}
                type="text"
                placeholder="Search..."
                className="w-full border-2 p-3 border-red-300"
            />

            {matches && matches.length > 0 && (
                <div className="relative">
                    <div className="bg-white border border-gray-400 w-full absolute">
                        {matches.map((prod) => (
                            <div
                                key={prod.id}
                                className="bg-white hover:bg-blue-200 transition-color p-2"
                            >
                                <Link to={`product/${prod.id}`}>
                                    <p>{prod.title}</p>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
