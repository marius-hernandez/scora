import React from "react";
import ScoraChart from "./ScoraChart";
import { Card } from "./ui/card";
const Scora = () => {

   const score={
    Length: [100, "length of the resume"],
    Keywords: [200, "presence of specific keywords related to the job position"],
    Education: [2, "presence of at least one degree"],
    Experience: [200, "presence of relevant work experience"]
   } 
  return (
    <div id="scora" className="m-auto 
    lg:w-2/4 
    w-full
    py-10">

       
       <Card className="col-span-2 p-6">
          <div className="flex items-center gap-2 font-medium leading-none">
            <span className='font-black text-5xl'>500</span> <h1 className=''>scora pts.</h1>
          </div>
          <div className="flex items-center gap-2 leading-none text-muted-foreground">
            Not bad!
          </div>
        </Card>
      <div className="flex flex-wrap items-start justify-stretch text-center
      ">
        
        
        {Object.entries(score).map(([key, [value, desc]])=>(
            <div key={key} className="flex-1 h-32 rounded-lg shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                <p className="text-slate-400 text-base font-medium">{key}</p>
                <h2 className="text-4xl font-black">{value}</h2>
                <p className="text-slate-400 text-xs">{desc}</p>
            </div>
        ))

        }
      </div>

      <ScoraChart />
    </div>
  );
};

export default Scora;
