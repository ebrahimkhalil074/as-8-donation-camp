import { useEffect, useState } from "react";
import NoFound from "../COMPONENTNS/NoFound";
import DonationCard from "../COMPONENTNS/DonationCard";

const Donation = () => {
const[storedData,setStoredData]=useState()
const [noFound,setFound] =useState('')

const [dataLength,setDataLength] =useState(4)
useEffect(()=>{
    const i =JSON.parse(localStorage.getItem("price"));
if (i) {
    setStoredData(i)
} else {
    setFound(<NoFound></NoFound>);
}

},[])

    return (
        <div className="container mx-auto">
            {
              noFound?noFound :
             <div className="grid grid-cols-1  lg:grid-cols-2  gap-7"  >
             {
                storedData?.slice(0,dataLength).map(item => <DonationCard key={item.id} item={item}></DonationCard>)
              }
             </div>
            }
        <div className="text-center">
        <div  className={dataLength > 4?'hidden':''}
          ><button
          onClick={()=>setDataLength(storedData.length)}
          className="btn btn-error">See All</button></div>
        </div>
        </div>
    );
};

export default Donation;