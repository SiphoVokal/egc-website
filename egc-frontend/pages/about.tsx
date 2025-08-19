"use client";
import React, { useState } from "react";
import Image from "next/image";
import Footer from "@/components/layout/Footer";
import ValueCard from "@/components/common/ValueCard";
import { ValueCardProps } from "@/interfaces";
import Navbar from "@/components/layout/Navbar";
import { Poppins, Pinyon_Script } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-poppins' });
const pinyon = Pinyon_Script({ subsets: ['latin'], weight: ['400'], variable: '--font-pinyon' });

const About: React.FC<ValueCardProps> = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [amount, setAmount] = useState(100);
  const [showBankDetails, setShowBankDetails] = useState(false);

  const presetAmounts = [50, 100, 250, 1000, 5000];

  const handlePayment = () => {
    // Normally you'd call your backend API that connects to Zappa
    const paymentUrl = `https://zappa-payments.com/checkout?amount=${amount}&currency=ZAR`;
    window.open(paymentUrl, "_blank");
  };

  const valueCards = [
  { cardNumber: "01", 
    title: "We Love Jesus", 
    description: "Our Purpose is to share hope and the love of Jesus to all, Jesus who we love because he first loved us, Everthing we do is for Jesus."
},
  { cardNumber: "02", 
    title: "We serve people", 
    description: "Many people have the misconception that being called by God is something only Missionaries, pas and other church leaders experience."
 },
  { cardNumber: "03", 
    title: "Honor is our expression", 
    description: "We are not saved by serving, but we are saved for serving. You were called to be free. You cannot serve God until you&apos;ve been set by Jesus." 
},
  { cardNumber: "04", 
    title: "Joy is our decision", 
    description: "Until you experience the transforming power of God&apos;s grace in your life, you&apos;re too ensalved by your own hurts, and hang ups to think about others."
},
  { cardNumber: "05", 
    title: "Generousity is our priviledge", 
    description: "The number one reason we dont have the time or energy to serve others is that we are preoccupied with our own agendas, dreams, and pleasure."
},
  { cardNumber: "06", 
    title: "We are there, even in times of crisis", 
    description: "The motive for serving is love serving one another in love. This an important key to building community."
},
];

  return (
    <div className="m-0 p-0">
      <div className="relative m-auto w-[85%] top-4 justify-self-center z-50">
        <Navbar />
      </div>
      <section className="bg-white py-12 sm:px-6 lg:px-8 m-auto w-[85%]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
            {/* Image */}
            <div className="w-full lg:w-[45%]">
              <div className="rounded-4xl overflow-hidden">
                <Image
                  src="/image 8.png"
                  alt="Ps Martin and Dr. Sphe Mgiba"
                  width={800}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Text */}
            <div className="w-full lg:w-[65%] text-center lg:text-left my-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Our Pastors</h2>
              <h3 className="text-lg sm:text-xl font-semibold mt-2 font-poppins">
                Pastor Martin and Dr. Sphe Mgiba
              </h3>

              {/* First paragraph */}
              <p className="mt-4 text-gray-700 leading-relaxed font-poppins">
                Ps Martin and Dr. Siphelele Mgiba, affectionately known as Dr. Sphe,
                are founders and senior pastors of the urban, homely, and Word-filled Eternal Glory Church,
                known for its vibrant worship and praise, and where thousands of young people find their spiritual home.
              </p>

              {/* Second paragraph with ... */}
              <p className="mt-4 text-gray-700 leading-relaxed">
                The kingdom-focused couple has dedicated their lives to leading thousands in their Christian walk
                and relentlessly sacrificing for the spreading of the gospel and winning souls for the Kingdom of God{" "}
                <button
                  onClick={() => setIsOpen(true)}
                  className="text-red-600 hover:underline font-medium"
                >
                  ...see more
                </button>
              </p>

              <p className="mt-6 italic font-pinyon text-2xl text-gray-900">You belong here!</p>
              <p className="mt-6 text-center font-pinyon text-4xl sm:text-4xl lg:text-6xl font-light text-gray-200 italic relative z-0 -m-12">
            you are always welcome here!
          </p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="rounded-4xl overflow-hidden">
            <Image
              src="/ps.jpg" 
              alt="Pastor preaching"
              width={400}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="rounded-4xl overflow-hidden">
            <Image
              src="/dr.jpg" 
              alt="Pastor appreciation event"
              width={400}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="rounded-4xl overflow-hidden">
            <Image
              src="/ps0.jpg" 
              alt="Pastor speaking"
              width={400}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>

          
        </div>
        </div>
      </section>

      <section className=" bg-white m-auto w-[85%]">
        
        <div className="relative z-10 top-14 left-4 text-center sm:text-start mb-11">
          <h2 className="text-3xl sm:text-5xl font-poppins font-bold text-black relative z-10">
              Our core beliefs
          </h2>
          <p className="text-gray-100 font-pinyon text-5xl sm:text-7xl italic relative -mt-6 z-0">that unite us</p>
        </div>

        <div className="relative z-10 flex flex-col md:flex-row items-center gap-4 sm:gap-12 mb-12">
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-semibold text-black mb-4">
              To call many sons into glory
            </h3>
            <p className="text-gray-700 leading-relaxed">
              At Eternal Glory Church, our vision is to raise a generation of believers
              who walk boldly in the fullness of God&apos;s glory. We are committed to
              transforming lives through the revelation of Jesus Christ, empowering
              individuals to live with purpose, walk in divine authority, and bring
              heaven to earth. We believe that every person is called to reflect God&apos;s
              light in every sphere of life, and we exist to awaken that divine
              identity within them.
            </p>
          </div>
            
          <div className="md:w-1/2">
            <img
             src="/core.jpg"
              alt="Worship scene"
              className="rounded-4xl w-full h-auto object-cover"
            />   
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center gap-6 mb-8">
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-semibold text-black mb-4">
              To carry the Word, the love, and the mission into our communities.
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Our mission is to cultivate a Christ-centered community where the presence
              of God is tangible, the Word of God is foundational, and love is our
              lifestyle. We are passionate about discipling believers, equipping leaders,
              and reaching the lost. Through passionate worship, sound biblical teaching,
              and intentional outreach, we aim to make Jesus known, not just within the
              walls of the church, but in homes, schools, businesses, and beyond.
              We exist to bring eternal impact to everyday life.
            </p>
          </div>
            
          <div className="md:w-1/2">
            <img
              src="/core0.jpg"
              alt="Church congregation"
              className="rounded-4xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

        <section className="relative py-16">
        
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.jpg"
            alt="Values background"
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
          <div className="absolute inset-0 bg-white opacity-50 z-10"></div>
        </div>

        
        <div className="relative z-20 w-[85%] mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">Our Values</h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {valueCards.map(({ cardNumber, title, description }) => (
            <ValueCard
              key={cardNumber}
              cardNumber={cardNumber}
              title={title}
              description={description}
            />
          ))}
        </div>
        </div>

        
        <div className="relative z-20 mt-12 mb- w-[85%] mx-auto overflow-hidden rounded-4xl">
          <Image
            src="/btm.png"
            alt="Bottom image"
            width={1200}
            height={300}
            className="w-full object-cover h-60"
          />
        </div>
      </section>

      <section className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side Image */}
      <div className="md:w-1/2">
        <img
          src="/pay.jpg"
          alt="Donations"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side Donation Form */}
      <div className="md:w-1/2 flex flex-col justify-center items-center bg-gradient-to-r from-pink-500 via-red-400 to-yellow-300 p-10">
        <h2 className="text-3xl font-bold mb-4 text-black">Donations and Tithing</h2>
        <p className="text-sm mb-6 text-gray-800 text-center">
          Give, and it will be given to you. A good measure, pressed down, shaken together and running over, will be poured into your lap.<br />
          
          Luke 6: 38
        </p>

        {/* Notice */}
        <div className="bg-white text-red-500 px-4 py-2 mb-4 rounded-xl shadow">
          <strong>Notice:</strong> Secure online donation system (Zappa or local banking)
        </div>

        {/* Input Field */}
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="w-full px-4 py-2 mb-4 rounded-4xl bg-white border border-white focus:outline-none focus:ring-2 focus:ring-red-400"
          placeholder="Enter custom amount"
        />

        {/* Preset Amounts */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {presetAmounts.map((amt) => (
            <button
              key={amt}
              onClick={() => setAmount(amt)}
              className={`px-4 py-2 rounded-4xl border ${
                amount === amt
                  ? "bg-black text-white border border-black"
                  : "bg-white text-black hover:bg-gray-200 border border-white"
              }`}
            >
              R{amt}
            </button>
          ))}
          <button
            onClick={() => setAmount(amount)}
            className="px-4 py-2 rounded-4xl bg-white text-black hover:bg-gray-200"
          >
            Custom
          </button>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            onClick={handlePayment}
            className="bg-black text-white px-6 py-3 rounded-full shadow hover:bg-gray-900"
          >
            Donate Now
          </button>
          <button
            onClick={() => setShowBankDetails(!showBankDetails)}
            className="bg-yellow-400 text-black px-6 py-3 rounded-full shadow hover:bg-yellow-500"
          >
            Bank Details
          </button>
        </div>

        {/* Bank Details */}
        {showBankDetails && (
          <div className="mt-6 bg-white p-4 rounded-lg shadow text-sm text-gray-700 w-full">
            <h3 className="font-bold mb-2">Banking Details</h3>
            <p>Bank: ABSA</p>
            <p>Account Number: 123456789</p>
            <p>Branch Code: 632005</p>
            <p>Reference: Your Name + Donation</p>
          </div>
        )}
      </div>
    </section>

    <div className="relative z-0 -mt-7 sm:-mt-12">
      <Footer />
    </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-50">
          <div className="bg-white rounded-2xl shadow-lg w-[85%] max-h-[95vh] p-6 relative overflow-y-auto">
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl"
            >
              ✖
            </button>

            <h2 className="text-2xl font-bold mb-4">Our Pastors</h2>
            <p className="text-gray-700 leading-relaxed">
              Ps Martin is a seasoned preacher and teacher of the Word, 
              and has held several platforms across the nation, including his recently born podcast, 
              Urban Church Talk, where he generously shares knowledge on principles relating to kingdom planting, 
              building, and growth in the Kingdom of God. Ps Martin is also a mentor in the Kingdom and several industries, 
              and has been described by his mentees as relatable, sincere, and honest.<br />
              <br />
              Outside of his undeniable contribution to the Kingdom of God, 
              Ps Martin is an admitted attorney of the High Court of South Africa by profession. 
              Ps Martin has also authored Joseph Generation, the Multiply Effect, 
              which provide practical tools to navigate real life and worldly systems, God's way.<br />
              <br />
              Dr. Sphe is a medical practitioner by profession, 
              with a particular passion for childhood development and women's health. 
              Despite the demands of her profession, Dr. Sphe is a mother to the Eternal Glory Church community, 
              and carries a deep burden for people, and an honest heart (and voice) for worship.<br />
              <br />
              Together, the senior pastors are loving shepherds, 
              devoted to the work of God and carry a united heart for the people of God.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
