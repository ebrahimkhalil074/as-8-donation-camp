import { Link } from "react-router-dom";


const DonationCard = ({item}) => {
    console.log(item);
    const {id,Picture,Title,Category,button_background,card_bg,category_bg,Price}=item||{};
    return (
        <div>
           <div style={{ backgroundColor:card_bg }}  className="card card-side bg-base-100 shadow-xl">
  <figure><img src={Picture}/></figure>
  <div className="card-body">
    <button style={{ backgroundColor:category_bg ,color:button_background}} className="w-20">{Category}</button>
    <h2  className="card-title">{Title}</h2>
    <p  style={{backgroundColor:button_background}} className="w-20 p-2 rounded-md text-white">{Price}</p>
    <Link to={`/DonationDetails/${id}`}>
    <div className="card-actions justify-start">
      <button  style={{backgroundColor:button_background} } className="btn text-white">View Details</button>
    </div>
    </Link>
  </div>
</div>

        </div>
    );
};

export default DonationCard;