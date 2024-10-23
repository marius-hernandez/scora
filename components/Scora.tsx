import React from "react";
import ScoraChart from "./ScoraChart";
import { Card } from "./ui/card";
import { ScoraType } from "@/types/ScoraType";

const Scora = (scora:ScoraType) => {
   const desc={
    length: ["length of the resume", 500],
    keyword: ["presence of specific keywords related to your job position", 5],
    education: ["presence of at least one degree", 5],
    experience: ["presence of relevant work experience", 5]
   } 
  return (
    <div id="scora" className="m-auto 
    lg:w-2/4 
    w-full leading-3 animate-fade-left
    py-10">
       <Card className="col-span-2 py-2 px-6 flex flex-wrap items-center justify-stretch">
          <div className="flex-1 flex items-center gap-2 font-medium leading-none">
            <span className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">{scora.scora}</span> <h1 className=''>%</h1>
          </div>
          <div className="flex-1 text-right gap-2 leading-3 text-muted-foreground">
          {scora.scora < 15 ? 'It is too low! Your resume needs MAJOR revisions' :
             scora.scora < 50 ? 'Your resume is weak' :
             scora.scora < 75 ? 'Your resume needs some modification' :
             scora.scora < 90 ? 'Your resume is almost good!' :
             'You have an excellent resume!'}
          </div>
        </Card>
      <div className="flex flex-wrap items-start justify-stretch text-center h-44
      ">
        {
        
        Object.entries(scora).slice(1).map(([key, value])=>(
            <Card key={key} className="flex-1 h-full py-8 rounded-lg">
                <p className="text-slate-400 text-base font-medium">{key}</p>
                <h2 className="text-4xl font-black">{value}</h2>
                <span className="text-xs underline">max {desc[key as keyof typeof desc][1]}</span>
                <p className="text-slate-400 text-xs leading-3 pt-3">{desc[key as keyof typeof desc][0]}</p>
            </Card>
        ))

        }
      </div>

      <ScoraChart />
    </div>
  );
};

export default Scora;
