import { useEffect, useState } from "react";



const Picslide = () => {

    const [currentpic,changepic]= useState(1);

    const handleprevious = ()=> {
        if (currentpic > 1){
            changepic(currentpic-1)
        }
    }

    const handlenext = ()=> {
        if (currentpic < 20){
            changepic(currentpic+1)
        }
    }
    return(
        <div className="flex flex-col items-center">
          <div className="font-pangolin text-4xl">ROBOT CAROUSEL</div>
        <div className="text-blue-500 border-4 inline-block mt-2 ">
           <img className="" src={`https://robohash.org/${currentpic}?size=200x200` }alt="robot" />
            
            <div className="text-2xl text-black">{currentpic}</div>
        </div>
        <div>
        <div>
  <div className="flex mt-4 ">
    <div className="border-2 w-20 items-center flex rounded bg-slate-200 text-gray-500 mr-2 justify-center text-center hover:scale-110 hover:bg-blue-300 hover:border-none">
      <button className="" onClick={handleprevious}>Prev</button>
    </div>
    <div className="border-2 w-20 items-center flex rounded bg-slate-200 text-gray-500 ml-2 justify-center text-center hover:scale-110 hover:bg-blue-300 hover:border-none">
      <button className="" onClick={handlenext}>Next</button>
    </div>
  </div>
</div>

</div>

        </div>
    )
}

export default Picslide;