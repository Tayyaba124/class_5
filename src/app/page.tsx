"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const Home = () => {
  const router = useRouter();
  const navigate = (name: string) => {
    router.push(name);
  };

  return (
    <div className="bg-emerald-100">
      <div className="bg-slate-800 h-20 flex justify-center items-center pr-10">
        <nav className="space-x-4 hover:text-amber-400">
          <Button
            variant="destructive"
            onClick={() => navigate("/About")}
            className=" bg-slate-500"
          >
            About
          </Button>
          <Button
            variant="destructive"
            onClick={() => navigate("/Skills")}
            className=" bg-slate-500"
          >
            Navbar
          </Button>
          <Button
            variant="destructive"
            onClick={() => navigate("/Project")}
            className=" bg-slate-500"
          >
            Footer
          </Button>
          <Button
            variant="destructive"
            onClick={() => navigate("/Experience")}
            className=" bg-slate-500"
          >
            Contact
          </Button>
        </nav>
      </div>

      {/* Main introduction text */}
      <div className="text-center text-3xl font-bold mb-4 p-10   text-slate-500">
        <h1>  Hi, I'm Tayyaba Shoukat,</h1>
        <h1>My Assignment # 5</h1><h1> By Sir Asharib Ali & Naeem Hussaain</h1><h1>Simple Portfolio Website</h1>
      </div>

      {/* Profile image section */}
      <div className="flex justify-center items-center">
        <div className="w-64 h-64 rounded-full overflow-hidden flex justify-center items-center mt-10">
          <img
            src="\Capture 1.PNG"
            alt="Tayyaba Shoukat's Profile"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
