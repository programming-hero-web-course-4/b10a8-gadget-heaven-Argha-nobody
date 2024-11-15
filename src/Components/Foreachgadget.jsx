import { Link } from "react-router-dom";

const Foreachgadget = ({ gadget }) => {

    const { product_id, product_title, product_image, category, price, description, specification, availability, rating } = gadget

    return (

        <div className="card bg-base-100 w-96 shadow-xl p-10">
            <figure>
                <img
                    // className='h-[181px] w-[282px]'
                    className='h-[280px] w-[310px] p-1'
                    src={product_image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title font-bold">{product_title}</h2>
                <p>Price: ${price}</p>
                <div className="card-actions">
                    <Link to={`/gadgets/${product_id}`}> <button className=" hover:bg-black rounded-full border-2 w-36 h-10 text-lg mt-5 bg-white text-purple-700 font-bold">View Details</button> </Link>
                </div>
            </div>
        </div>


    );
};

export default Foreachgadget;