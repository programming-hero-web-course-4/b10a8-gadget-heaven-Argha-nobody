import banner from '../assets/banner.jpg';
import Gadget from './Gadget';
import Gadgets from './Gadgets';



const Home = () => {
    return (
        <div className='min-h-[calc(100vh-188px)]' >

            <div className='text-center bg-purple-700 p-10 static w-[1350px] h-[500px]'>

                <h1 className='text-5xl text-white'> Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories </h1>
                <p className='mt-5 text-gray-400'> Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
                <button className='rounded-full border-2 w-36 h-10 text-lg mt-5 bg-white text-purple-700 font-bold'> Shop now </button>

            </div>

            <div className='  absolute left-60 top-80 ' >
                <img src={banner} alt="" className='mt-10 h-[450px] w-[850px] rounded-xl' />
            </div>

            <Gadgets>  </Gadgets>
          
        </div>
    );
};

export default Home;