import { Link } from "react-router-dom";

const Donar = ({donar}) => {
    // console.log(donar);
    const {id,Picture,Title,Category,button_background,card_bg,category_bg}=donar||{};
   
    return (
        <div>
           <Link to={`/DonationDetails/${id}`}>
           <div style={{ backgroundColor:card_bg }} className="card  bg-base-100 shadow-xl ">
  <figure><img className="w-full" src={Picture} /></figure>
<div className="card-body">

<button style={{ backgroundColor:category_bg ,color:button_background}}  className="w-20 ">{Category}</button>
    <p style={{color:button_background} } className="text-3xl font-semibold"> {Title}</p>
</div>


</div>
           </Link>
        </div>
    );
};

export default Donar;