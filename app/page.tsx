import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <main className="w-fit m-auto">
      <h1 className="font-black text-5xl">scora.</h1>
      <p>Let us scora your resume!</p>
      <br />
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Input id="picture" type="file" />
      </div>
    </main>
  );
}
