import React from "react";
import ScoraChart from "./ScoraChart";
const Scora = () => {

   const score={
    Length: [100, "The length of the resume"],
    Keywords: [200, "The presence of specific keywords related to the job position"],
    Education: [2, "Presence of at least one degree"],
    Experience: [200, "The presence of relevant work experience"]
   } 
  return (
    <div id="scora" className="m-auto w-2/4">

       <ScoraChart />
      <div className="flex flex-wrap items-center justify-stretch text-center my-10 
      ">
        
        {Object.entries(score).map(([key, [value, desc]])=>(
            <div className="flex-1 rounded-lg shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                <p className="text-slate-400">{key}</p>
                <h2 className="text-4xl font-black">{value}</h2>
                <p className="text-slate-400 text-sm">{desc}</p>
            </div>
        ))

        }
      </div>
    </div>
  );
};

export default Scora;
