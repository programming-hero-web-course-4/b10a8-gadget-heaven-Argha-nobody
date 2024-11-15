import React from 'react';

const Footer = () => {
    return (
        <div className='mt-72'>

            <h1 className='text-center text-3xl font-black mx-4 mt-5' > Gadget Heaven </h1>
            <p className='text-center mb-5 '> Leading the way in cutting-edge technology and innovation. </p>

            <hr />

            <div className='flex justify-center gap-32 mt-5 text-center'>

                <div>
                    <h3 className='font-bold text-black'> Services </h3>
                    <p> Product Support </p>
                    <p> Order Tracking </p>
                    <p> Shipping and Delivery </p>
                    <p> Return </p>

                </div>

                <div>

                    <h3  className='font-bold text-black' > Company </h3>
                    <p> About us</p>
                    <p> Career </p>
                    <p> Contact </p>

                </div>

                <div>

                    <h3  className='font-bold text-black' > Legal </h3>
                    <p> Terms of Services </p>
                    <p> Privacy Policy </p>
                    <p> Cookie Policy </p>

                </div>

            </div>

        </div>
    );
};

export default Footer;