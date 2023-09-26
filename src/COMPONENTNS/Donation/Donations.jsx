import { useEffect, useState } from "react";
import Donar from "../Donar/Donar";

const Donations = () => {
const [donation,setDonation] =useState([])


useEffect(()=>{
fetch("data.json")
.then(res => res.json())
.then(data =>setDonation(data))

},[])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {
            donation.map((donar,i)=><Donar key={i} donar={donar}></Donar>,[])
          }
        </div>
    );
};

export default Donations;