"use client";
import { useState } from "react";
import { Toaster, toast } from 'sonner';

export default function Home() {
  const [img, setImg] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImg(reader.result); // Store the full base64 string including 'data:image/*;base64,'
    };
    if (file) {
      reader.readAsDataURL(file); // Convert the file to base64
    }
  };

  return (
    <>
          <Toaster />

      <h1 className=" text-center text-5xl my-10">Image to BASE 64</h1>
      <div className="flex mx-12 w-screen gap-10 h-[450px]">
        <div className="border-white rounded-xl border-2 basis-[40%]">
          <h1 className="text-center">Input Image</h1>
          <input
            onChange={handleImageChange}
            type="file"
          />
        </div>
        <div className="basis-[40%] rounded-xl border-2 border-white max-w-[450px]">
          <h2 className="text-center">Base64 String</h2>
          <p className="whitespace-pre-wrap ml-2 break-words">
            {img ? img.split("base64,")[1].slice(0,200)+ "...": "No image selected"}
          </p>
        </div>
        <div className="">
          <button onClick={(e)=>{
                  navigator.clipboard.writeText(img?.split("base64,")[1])
                  toast.success('Copied to clipboard')

          }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          COPY
          </button>

        </div>
      </div>
    </>
  );
}
