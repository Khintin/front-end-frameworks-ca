import ProductCard from "./ProductCard";

const HomeProductList = ({ products, maxCount }) => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {products.slice(0, maxCount).map((product) => (
                    <ProductCard product={product} key={product.id} />
                ))}
            </div>
        </>
    );
};
export default HomeProductList;
