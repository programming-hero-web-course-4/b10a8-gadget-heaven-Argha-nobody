import { Link } from "react-router-dom";

const Gadget = ({ data }) => {
    return (
        <div className="card bg-base-100 shadow-xl p-5">
            <figure>
                <img 
                    className="h-[280px] w-[310px] p-1"
                    src={data.product_image} 
                    alt={data.product_title} 
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title font-bold">{data.product_title}</h2>
                <p className="text-lg">Price: ${data.price}</p>
                <Link to={`/gadgets/${data.product_id}`}>
                    <button className="hover:bg-black rounded-full border-2 w-36 h-10 text-lg mt-5 bg-white text-purple-700 font-bold">
                        View Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Gadget;
