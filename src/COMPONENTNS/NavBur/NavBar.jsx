import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="flex justify-between items-center container mx-auto shadow-lg px-8">
            <div>
            
<img src="/Logo.png" alt="" />
            </div>
            <div className="flex gap-12 font-semibold text-xl">
                
<NavLink
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active text-red-700 underline" : ""
  }
> Home</NavLink>
<NavLink
  to="/Donation"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active text-red-700 underline" : ""
  }
> Donation</NavLink>

<NavLink
  to="/Statistics"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active text-red-700 underline" : ""
  }
>Statistics</NavLink>

            </div>
        </div>
    );
};

export default NavBar;