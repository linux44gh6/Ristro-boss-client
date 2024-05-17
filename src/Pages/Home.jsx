import Banner from "../Components/Homes/Banner";
import Category from "../Components/Homes/Category";
import ChefRecomandetion from "../Components/Homes/ChefRecomandetion";
import MasterChef from "../Components/Homes/MasterChef";
import Menu from "../Components/Homes/Menu";
import Number from "../Components/Homes/Number";
import OurMenu from "../Components/Homes/OurMenu";
import Testimonials from "../Components/Homes/Testimonials";


const Home = () => {
    return (
        <div>
         
           <Banner></Banner>
           <Category></Category>
           <MasterChef></MasterChef>
           <Menu></Menu>
           <Number></Number>
           <ChefRecomandetion></ChefRecomandetion>
           <OurMenu></OurMenu>
           <Testimonials></Testimonials>
        </div>
    );
};

export default Home;