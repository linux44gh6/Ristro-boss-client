
// eslint-disable-next-line react/prop-types
const SectionTitle = ({subHeading,Heading}) => {
    return (
        <div>
            <div className=' lg:mt-20 mb-10 lg:w-4/12 mx-auto'>
                <h1 className=' text-center text-[#D99904] text-lg'>{subHeading}</h1>
                <h1 className=' text-center text-black text-xl lg:text-5xl border-t-2 border-b-2 border-slate-300 py-1'>{Heading}</h1>
            </div>
        </div>
    );
};

export default SectionTitle;