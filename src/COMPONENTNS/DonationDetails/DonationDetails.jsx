import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import swal from 'sweetalert';
 
 const DonationDetails = () => {
    const [donet,setDonet] =useState()
    // const [noFound,setNoFound] =useState()
const donations =useLoaderData()
const {id} = useParams()

useEffect(()=>{
 const findDonet =donations?.find(donar => donar.id ==id)
 console.log(findDonet);
 setDonet(findDonet)
},[id,donations])
console.log(donet);
const {Picture,Title,Category,button_background,card_bg,category_bg,Price,Description}=donet||{};

const handelLocalStorages =()=>{
const mtLocal =[]
    const i =JSON.parse(localStorage.getItem("price"));
if(!i){
mtLocal.push(donet)
localStorage.setItem('price',JSON.stringify(mtLocal))
}
else{
 const isExits =i.find(item => item.id ==id)

    if (!isExits) {
        mtLocal.push(...i,donet)
    localStorage.setItem('price',JSON.stringify(mtLocal))
    swal({
        title: "Good job!",
        text: "Your Donation Successfully!",
        icon: "success",
        button: "OK!",
      });
    
    } else {
        swal({
            title: "Warning!!",
            text: " You Are AllReady Donated!",
            icon: "error",
            button: "Back!",
          });
    } 
}
}

    return (
        <div className="container mx-auto">
           <div style={{ backgroundColor:card_bg }} className="card  bg-base-100 shadow-xl">
  <figure><img className="w-full relative"  src={Picture} />
  
  </figure>
  <div className=" bg-stone-800 h-20 w-full opacity-80 absolute bottom-[284px]">
  <button onClick={handelLocalStorages} style={{backgroundColor:button_background} } className="w-32 text-white p-1 rounded-lg mt-6 ml-6" >Donate {Price}
</button>
  </div>
<div className="card-body">

<button style={{ backgroundColor:category_bg ,color:button_background}}  className="w-20 ">{Category}</button>
    <p style={{color:button_background} } className="text-3xl font-semibold"> {Title}</p>
   <p>{Description}</p>
</div>
</div>
 </div>
    );
 };
 
 export default DonationDetails;
