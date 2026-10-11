import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans ">
        <h1 className="text-black">
          Welcome to <span className="text-blue-500">Z-Maths!</span> <br />
        </h1>
    </div>
  );
}
