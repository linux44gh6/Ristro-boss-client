
const SingleMenu = ({item}) => {
    const {image,
        name,
        price,recipe}=item
    return (
        <div>
            <div className="flex flex-col lg:flex-row items-center gap-3">
                <img className="w-40" style={{borderRadius:"0px 200px 200px 200px"}} src={image} alt="" />
                <div>
                    <h1 className=" flex text-2xl font-semibold">{name}---------- <span className=" text-[#BB8506] lg:translate-x-24">${price}</span></h1>
                    <p className=" text-gray-600 font-semibold">{recipe}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleMenu;