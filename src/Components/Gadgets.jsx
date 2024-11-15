import { useState, useEffect } from "react";
import Gadget from "./Gadget";

const Gadgets = () => {
    const [filter, setFilter] = useState("All");
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('./filterbutton.json') 
            .then(res => res.json())
            .then(fetchedData => setData(fetchedData));
    }, []);

    const filteredData = filter === "All"
        ? data
        : data.filter(item => item.category === filter);

    return (
        <div className="mt-72">
            <div>
                <h1 className="text-center text-5xl font-bold text-black">
                    Explore Cutting Edges
                </h1>

                <div className="flex">
                    
                    <div className="mx-14 mt-14 bg-white border-2 rounded-3xl grid grid-rows-1 gap-1 w-[200px] h-[500px] p-7">
                        <button
                            className="hover:bg-black rounded-full border-2 w-36 h-10 text-lg mt-5 bg-white text-purple-700 font-bold"
                            onClick={() => setFilter("All")}
                        >
                            All Products
                        </button>
                        <button
                            className="hover:bg-black rounded-full border-2 w-36 h-10 text-lg mt-5 bg-white text-purple-700 font-bold"
                            onClick={() => setFilter("Smartphones")}
                        >
                            Smartphones
                        </button>
                        <button
                            className="hover:bg-black rounded-full border-2 w-36 h-10 text-lg mt-5 bg-white text-purple-700 font-bold"
                            onClick={() => setFilter("Wearables")}
                        >
                            Wearables
                        </button>
                        <button
                            className="hover:bg-black rounded-full border-2 w-36 h-10 text-lg mt-5 bg-white text-purple-700 font-bold"
                            onClick={() => setFilter("Laptops")}
                        >
                            Laptops
                        </button>
                        <button
                            className="hover:bg-black rounded-full border-2 w-36 h-10 text-lg mt-5 bg-white text-purple-700 font-bold"
                            onClick={() => setFilter("Gaming")}
                        >
                            Gaming
                        </button>
                        <button
                            className="hover:bg-black rounded-full border-2 w-36 h-10 text-lg mt-5 bg-white text-purple-700 font-bold"
                            onClick={() => setFilter("Audio")}
                        >
                            Audio
                        </button>

                        <button
                            className="hover:bg-black rounded-full border-2 w-36 h-10 text-lg mt-5 bg-white text-purple-700 font-bold"
                            onClick={() => setFilter("Video")}
                        >
                            Video
                        </button>
                    </div>


                    <div className="grid grid-cols-3 gap-5 p-5">
                        {filteredData.length > 0 ? (
                            filteredData.map(product => (
                                <Gadget key={product.product_id} data={product} />
                            ))
                        ) : (
                            <p className="text-center col-span-3 text-gray-500 mx-auto">No products available.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gadgets;
