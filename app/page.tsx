"use client";

import Scora from "@/components/Scora";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { evaluateResume } from "@/lib/evaluateResume";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function Home() {
  const [scora, setScora] = useState(false);
  const router = useRouter();
  const action = async (formData: FormData) => {
    // "use server"

    // const resume=formData.get("resume") as File
    // if(!resume || resume.size ===0){
    //   console.log("no file")
    // }
    // console.log(resume)
    setScora(true);
    router.push("#scora");
  };

  useEffect(() => {
    console.log(evaluateResume(`manage manage manage`));
  }, []);
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
      w-full

      my-10 mx-auto h-fit py-20 px-12 rounded-lg shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
      >
        <h1 className="font-black text-5xl">scora.</h1>
        <br />
        <p>
          Let us <span className="font-bold">scora</span> your resume!
        </p>
        <p>Upload pdf, docs or plain txt.</p>
        <br />
        <form action={action}>
          <br />
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Input name="resume" id="picture" type="file" />
          </div>
          <br />
          <br />
          <Button type="submit" className="w-full">
            Calculate my scora!
          </Button>
        </form>
        <br />
        <span className="text-sm text-slate-400 italic text-center">
          Developed by{" "}
          <Link className="underline" href={`https://mariusjacob.vercel.app/`}>
            marius jacob
          </Link>
        </span>
      </Card>

      {scora ? <Scora /> : null}
    </main>
  );
}
