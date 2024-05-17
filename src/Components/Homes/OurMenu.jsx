import SectionTitle from "../SectionTitle";
import CoverImg from '../../assets/home/featured.jpg'
import '../../CustomCss/Featured.css'
const OurMenu = () => {
    return (
        <div className='featured h-[100vh] bg-center bg-no-repeat mx-auto mt-20'>
             <div className=" z-10 absolute">
                
              <SectionTitle
            subHeading={"---Check it out---"}
            Heading={'FROM OUR MENU'}
            ></SectionTitle>
           <div className="flex w-2/3 mx-auto items-center gap-5">
                <img className="w-[400px]" src={CoverImg} alt="" />
             
              <div className="text-white">
                    <p>March 20, 2023</p>
                    <h1>WHERE CAN I GET SOME?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn outline-none  border-b-2 border-b-[#BB8506] text-[#BB8506] uppercase hover:bg-gray-800">add to cart</button>
               
              </div>
            </div>
             </div>
           </div>
       
    );
};

export default OurMenu;