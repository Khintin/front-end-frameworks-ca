import FullStar from "../../assets/iconratefull.png";

const Review = ({ review }) => {
    const stars = [...Array(review.rating).keys()];

    return (
        <>
            <div className="bg-slate-300 p-5 rounded-lg w-full mb-4">
                <h1 className="text-2xl font-bold">Product Review</h1>
                <h3 className="text-lg font-semibold mt-5">By: {review.username}</h3>
                <div className="w-5 mt-2 flex flex-row">
                    {stars.map((idx) => (
                        <img key={idx} src={FullStar} alt="Rate Stars in Full" />
                    ))}
                </div>
                {review.description && review.description.length > 0 && (
                    <p className="mt-10">{review.description}</p>
                )}
            </div>
        </>
    );
};

export default Review;
