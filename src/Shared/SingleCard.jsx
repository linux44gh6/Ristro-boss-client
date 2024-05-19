
const SingleCard = ({item}) => {
const {image,category,recipe}=item
    return (
        <div>
              <div className="card  bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={image} alt="Shoes" className="rounded-xl h-[200px] w-full object-cover" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{category}</h2>
    <p>{recipe}</p>
    <div className="card-actions">
      <button className="btn outline-none  border-b-2 border-b-[#BB8506] text-[#BB8506] uppercase hover:bg-gray-800">add to cart</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default SingleCard;