import React, { useState } from "react";
import MinistryCard from "@/components/common/MinistryCard";
import Footer from "@/components/layout/Footer";
import { Poppins, Pinyon_Script, Roboto, League_Script } from 'next/font/google'
import { MinistryCardProps } from "@/interfaces";
import Navbar from "@/components/layout/Navbar";

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-poppins' });
const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-roboto' });
const pinyon = Pinyon_Script({ subsets: ['latin'], weight: ['400'], variable: '--font-pinyon' });
const league = League_Script({ subsets: ['latin'], weight: ['400'], variable: '--font-league' });

const Ministries: React.FC<MinistryCardProps> = () => {
  return (
    <div>
      <div className="relative m-auto w-[85%] top-8 justify-self-center z-50">
        <Navbar />
      </div>
      
      <section className="m-auto w-[85%]">
        <div className="relative z-10 top-22 left-4 text-start mb-2">
          <h2 className="text-2xl sm:text-5xl font-poppins font-bold text-black relative z-10 leading-relaxed tracking-wide">
              Ministries and Groups
          </h2>
          <p className="text-gray-200 font-pinyon text-4xl sm:text-7xl italic relative -mt-6 sm:-mt-12 z-0 mb-10 tracking-wide">that unite us</p>
        </div>
        <div className="max-w-6xl  grid grid-cols-1 pt-8 gap-8">
            <MinistryCard
              title="Glory Hubs"
              description="Small groups for spiritual growth and fellowship. GloryHubs are the heartbeat of our church — small, 
                intimate gatherings of believers who come together regularly to grow in faith, build authentic relationships, 
                and journey through life together.

                These spaces are where we dive deeper into the Word, pray together, ask the tough questions, 
                and support one another in real, meaningful ways. It’s more than a Bible study — it’s family.
                It’s not just about Sundays — it’s about doing life together, every day.

                If you’ve been looking for community, a place to belong, or a space to be seen and known, GloryHubs are for you."
              imageSrc="/core.jpg"
            />
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 gap-8">
            <MinistryCard
              title="E-Hubbies"
              description="E-Hubbies are our online discipleship and community groups designed to connect you to spiritual family — 
              no matter where you are. We know life gets busy, and not everyone can attend in-person gatherings. 
              That’s why E-Hubbies bring the power of community, the Word, and intentional discipleship right to your screen. 
              
              Through regular online meetups, we grow together in faith, deepen our understanding of Scripture, 
              and hold each other accountable as we walk in purpose. 
              
              You will always find belonging, encouragement, and truth in an E-Hubby"
              imageSrc="/core.jpg"
              reverse
            />
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 gap-8">
            <MinistryCard
              title="Glory Squad"
              description="Glory Squad are where purpose meets action. These are our volunteer and outreach teams, passionate, 
              hands-on groups of people who serve with excellence, love with intention, and carry the heart of Christ into every space. 
              
              From welcoming first-time visitors to running Sunday services, from packing food parcels to reaching communities in need — 
              Glory Squad make ministry happen.
              
              It’s more than just volunteering — it’s ministry in motion. Every gift matters. Every role is significant. Every act of service is worship.
              
              If you’re ready to make an impact, grow in leadership, and be part of something bigger than yourself, Glory Squad is calling your name."
              imageSrc="/core.jpg"
            />
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 gap-8">
            <MinistryCard
              title="Glory Kidz"
              description="Glory Kidz is our vibrant children’s ministry designed to nurture the faith of the next generation — 
              one fun-filled, Spirit-led Sunday at a time!
              
              From toddlers to tweens, we create a safe, loving, and engaging environment where kids can learn about Jesus, 
              build friendships, and discover their identity in Christ. Through age-appropriate lessons, worship, storytelling, 
              games, and crafts, children don’t just attend church — they experience it in a way they’ll never forget.
              
              At Glory Kidz, your child will be seen, celebrated, and spiritually equipped to shine God’s glory in their world"
              imageSrc="/core.jpg"
              reverse
            />
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 gap-8">
            <MinistryCard
              title="NextGen Youth"
              description="NextGen is our youth and young adult ministry — a dynamic space where teenagers and young adults encounter God, grow in identity, 
              and rise in purpose. In a world that’s constantly shifting, NextGen is where young people are grounded in truth, empowered by faith, 
              and surrounded by real community. We gather to worship, learn, laugh, ask deep questions, and walk through life together — 
              because growing up doesn’t mean growing away from God.
              
              Whether you’re in high school, varsity, or figuring out your next steps — NextGen is your tribe. It’s not just a youth group. 
              It’s a movement of young leaders, creatives, thinkers, and dreamers who are called to shape the future with Christ at the centre."
              imageSrc="/core.jpg"
            />
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 gap-8">
            <MinistryCard
              title="Outreach"
              description="Our Outreach Programs are how we put faith into action — loving our neighbours, lifting communities, 
              and being the hands and feet of Jesus to those in need.Whether it’s feeding families, visiting shelters, 
              running skills workshops, or responding to crisis, our heart is to serve with compassion, dignity, and hope. 
              Every outreach is an opportunity to extend grace beyond the church walls and bring real change to real lives. 
              We don’t just talk about love — we show it.If you're passionate about social impact, justice, and being part of something greater, 
              join us as we serve and rebuild communities — one act of kindness at a time"
              imageSrc="/core.jpg"
              reverse
            />
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 gap-8">
            <MinistryCard
              title="Eternal Glory Worship"
              description="The worship collective of Eternal Glory Church. 
              We are a passionate community of worshippers dedicated to creating Christ-centered music that inspires hearts, 
              shifts atmospheres, and glorifies God. Through original songs, live worship sessions, 
              and moments captured in the presence of the Holy Spirit, our desire is to lead people into deeper encounters with Jesus. 
              
              Our latest single, Praise Medley 2.0, has reached over 1 million streams on YouTube — 
              and it's just the beginning. We’re humbled, grateful, and expectant for even more lives to be touched through our sound."
              imageSrc="/core.jpg"
            />
        </div>
      </section>
      <div className="relative z-0 -mt-12">
          <Footer />
        </div>
    </div>
  )
}

export default Ministries