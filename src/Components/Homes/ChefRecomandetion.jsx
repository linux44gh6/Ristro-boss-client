import SectionTitle from "../SectionTitle";
import salad1 from '../../assets/home/slide5.jpg'
const ChefRecomandetion = () => {
    return (
        <div>
            <SectionTitle
            subHeading={'---Should Try---'}
            Heading={'CHEF RECOMMENDS'}
            >

            </SectionTitle>
           <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 justify-center items-center lg:translate-x-8 gap-5">
           <div className="card  bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={salad1} alt="Shoes" className="rounded-xl h-[200px] w-full object-cover" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Caeser Salad</h2>
    <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
    <div className="card-actions">
      <button className="btn outline-none  border-b-2 border-b-[#BB8506] text-[#BB8506] uppercase hover:bg-gray-800">add to cart</button>
    </div>
  </div>
</div>
<div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={salad1} alt="Shoes" className="rounded-xl h-[200px] w-full object-cover" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Caeser Salad</h2>
    <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
    <div className="card-actions">
      <button className="btn outline-none  border-b-2 border-b-[#BB8506] text-[#BB8506] uppercase hover:bg-gray-800">add to cart</button>
    </div>
  </div>
</div>
<div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={salad1} alt="Shoes" className="rounded-xl h-[200px] w-full object-cover" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Caeser Salad</h2>
    <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
    <div className="card-actions">
      <button className="btn outline-none  border-b-2 border-b-[#BB8506] text-[#BB8506] uppercase hover:bg-gray-800">add to cart</button>
    </div>
  </div>
</div>
           </div>
        </div>
    );
};

export default ChefRecomandetion;