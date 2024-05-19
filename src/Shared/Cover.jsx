
import { Parallax, Background } from 'react-parallax';
// eslint-disable-next-line react/prop-types
const Cover = ({image,Heading}) => {
    return (
        <div>
           
<Parallax
        blur={{ min: -15, max: 15 }}
       
        bgImageAlt="the dog"
        strength={-200}
    >
      <div className="hero h-[80vh]" style={{backgroundImage: `url(${image})`}}>
  <div className="  bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-xl bg-black bg-opacity-60 p-10">
      <h1 className="mb-5 text-5xl font-bold text-white">{Heading}</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    
    </div>
  </div>
</div>
    </Parallax>
        </div>
    );
};

export default Cover;