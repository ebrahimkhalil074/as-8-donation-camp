



const Header = ({handelSubmit}) => {

 
    return (
        <div className="container mx-auto ">
          
         <div className="hero min-h-[80vh] " style={{backgroundImage: 'url(https://i.ibb.co/qybvPMx/Clothing.png)'}}>
  <div className="hero-overlay bg-opacity-90 bg-white "></div>
  <div className=" text-center text-neutral-content">
    <div className="">
      <h1 className=" hero-content mb-5 text-4xl text-black font-bold">I Grow By Helping People In Need</h1>
      
    <form onSubmit={handelSubmit}>
    <div className="flex justify-center items-center">
    <input type="text" name="name" placeholder="Search…" className="input input-bordered" />
    <button type="submit" className="btn btn-error">
      Search
    </button>
      </div>
    </form>
  
    </div>
  </div>
</div>
   
      
   </div>     
    
    );
};

export default Header;