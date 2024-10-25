"use client";

import Scora from "@/components/Scora";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { evaluateResume } from "@/lib/evaluateResume";
import { pdfToText } from "@/lib/helper";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


export default function Home() {
  const [scoraComponent, setScoraComponent] = useState(false);
  const router = useRouter();
  const [resume, setResume]=useState("")
  const [scora, setScora] = useState({
    scora: [0,0],
    length: [0,0],
    keyword: [0,0],
    education: [0,0],
    experience: [0,0],
  });

  const action = () => {
    const result = evaluateResume(resume);
    setScora(result);
    setScoraComponent(true)
    router.push("#scora");
  };
  

   async function extractText(event:any) {
    console.log("yo")
    await pdfToText(event.target.files[0])
      .then((text) => setResume(text!))
      .catch((error) => console.error(error))
  }

  return (
    <main
      className={`
    flex 
    flex-wrap
    

    justify-stretch
    
    `}
    >
      <Card
        className="
      lg:w-fit
      w-full animate-fade
        
      my-10 mx-auto h-fit py-20 px-12 rounded-lg shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
      >
        <h1 className="font-black text-5xl">scora.</h1>
        <br />
        <p>
          Let us <span className="font-bold">scora</span> your resume!
        </p>
        <p>Upload pdf only</p>
        <br />
        <form action={action}>
          <br />
          <div className="grid w-full max-w-sm items-center gap-1.5">
    <input type="file" accept="application/pdf" onChange={extractText} />
          </div>
          <br />
          <br />
          <Button type="submit" className="w-full hover:scale-110">
            Calculate my scora!
          </Button>
        </form>
        <br />
        <span className="text-sm text-slate-400 italic text-center">
          Developed by
          <Link className="underline" href={`https://mariusjacob.vercel.app/`}>
            marius jacob
          </Link>
        </span>
      </Card>

      {scoraComponent ? <Scora {...scora}/> : null}
    </main>
  );
}
