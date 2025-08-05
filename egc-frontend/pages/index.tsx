import Navbar from "@/components/common/Navbar";
import Image from "next/image";


export default function Home() {
  return (
    <div className="min-h-screen bg-black text-black">
      <Navbar />

      {/* Hero Banner */}
      {/* Hero Section with Overlayed Navbar */}
      <section className="relative h-[75vh] w-full">
        {/* Collage Image */}
        <Image src="/hero.jpg" alt="Church collage" fill priority className="object-cover z-0"/>

        {/* Navbar on top */}
        <div className="absolute top-0 w-full z-20">
          <Navbar />
        </div>

        {/* Hero Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center px-4">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
            A place where you belong.
          </h1>
        </div>  
      </section>
            
      <section className="relative bg-gray-100 px-6 py-2 text-center w-full mx-auto rounded-t-4xl">
        <div >
              <p className=" text-lg font-medium">
                <span className="font-bold text-lg"> Join us this Sunday <br /></span> 
                07:30 · 09:30 · 11:30 · 14:00 at Fourways Junction, Lonehill. + Online 
              </p>
        </div>  
      </section>

      {/* Belief Section */}
      <section className="bg-white px-6 py-16 text-center ">
        <h2 className="text-3xl md:text-4xl font-bold max-w-4xl mx-auto">
          A church that believes in <span className="text-black"><br></br>Jesus</span>, a{" "}
          <span className="text-yellow-500">church that loves <br></br>People</span> and{" "}
          <span className="text-black">community</span>
        </h2>
        <p className="mt-4 text-gray-400">
          To carry the Word, the Love, and the Mission into our communities.{" "}
          <a href="#" className="underline text-sm hover:text-red-600">see more</a>
        </p>
        <p className="mt-20 text-4xl italic text-gray-300 max-w-5xl mx-auto text-end">you are always welcome here.</p>
      </section>
    </div>
  );
}
