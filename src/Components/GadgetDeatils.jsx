import { useLoaderData, useParams } from "react-router-dom";
import { RxStarFilled } from "react-icons/rx";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useState } from "react";
import Dashboard from "./Dashboard";

const GadgetDeatils = () => {

    const { product_id } = useParams();

    const data = useLoaderData();
    const id = parseInt(product_id);

    const gadget = data.find(gadget => gadget.product_id === id)

    const { product_id: content_id, product_title, product_image, category, price, description, specification, availability, rating } = data;

    const handleAddToCart = () => {
       
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(gadget); 
        localStorage.setItem('cart', JSON.stringify(cart)); 

       
        alert(`${gadget.product_title} has been added to your cart!`);

    };

    return (


        <div>

            <div className="text-center h-[400px] w-[1350px] bg-purple-700  static">
                <h1 className="text-5xl text-white py-5 font-semibold"> Product Details </h1>
                <p className=" text-gray-300"> Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all! </p>
            </div>

            <div className=" w-[1200px] h-[500px] absolute top-64 left-20 mb-20">
                <div className="card card-side bg-base-100 shadow-xl h-full w-full">
                    <figure>
                        <img
                            className="h-[500px] w-[400px] p-9 rounded-xl"
                            src={gadget.product_image}
                            alt="Movie" />

                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{gadget.product_title}</h2>
                        <p>Price: ${gadget.price}</p>
                        <p>
                            {gadget.availability ?
                                (
                                    <p> Stock: Available</p>
                                ) :
                                (
                                    <p> Stock: Not Available</p>
                                )
                            }
                        </p>
                        <p> {gadget.description} </p>
                        <p> Specifications: <br /> {gadget.specification.map(single => <p> {single} <br /> </p>)
                        } </p>

                        <p>Rating: {gadget.rating}</p>

                        <div className="flex gap-2 mb-3">
                            <RxStarFilled /> <RxStarFilled /> <RxStarFilled /> <RxStarFilled /> <RxStarFilled />
                        </div>



                        <div className="card-actions ">

                            <button onClick={handleAddToCart} className="btn btn-primary"> Add to Cart <MdOutlineShoppingCart /> </button>

                        </div>


                    </div>
                </div>
            </div>

        </div>
    );
};

export default GadgetDeatils;