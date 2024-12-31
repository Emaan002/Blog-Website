import React from "react";
import localFont from "next/font/local";
import Link from "next/link";
import Image from "next/image";


const font = localFont({
  src: "../fonts/IvyMode-Regular.ttf",
});

const fontSec = localFont({
  src: "../fonts/ivy-mode-10.ttf",
});

function Hero() {
  return (
    <>
      <section className=" w-full mx-auto h-auto md:px-20 py-10 mt-16">
        <div className="flex flex-col md:flex-row justify-between  items-center md:items-start ">
          <div className="text-center md:text-left">
            <h1
              className={`${font.className} text-4xl md:text-6xl text-[#3C5E39] font-bold leading-[50px] md:leading-[80px]`}
            >
              Transform Your Life
              <br />
              With Balanced Living
            </h1>
            <p
              className={`${fontSec.className} mt-4 w-full md:w-[500px]  text-[#3C5E39] md:text-base font-bold mb-6`}
            >
              Your well-being is our priority. Discover actionable insights on
              building healthier habits, staying active, and finding balance in
              every aspect of your life.
            </p>
            <Link
              href={"#blog"}
              className={`text-[#c4d4a7] bg-[#3C5E39] py-2 px-4 rounded-xl`}
            >
              Explore
            </Link>
          </div>
          <div className="relative w-64 h-64 mt-20 md:mt-0 mx-auto">
            {/* Parent Picture */}
            <div className="relative w-full h-full">
              <Image
                src="/parent.jpg"
                alt="Parent"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>

            {/* Child Pictures */}
            <div className="absolute top-[-50px] left-[-60px] w-24 h-24 md:w-32 md:h-32 lg:w-32 lg:h-32">
              <Image
                src="/child1.jpg"
                alt="Child 1"
                layout="fill"
                objectFit="cover"
                className=" shadow-md"
              />
            </div>

            <div className="absolute bottom-[-80px] left-[-80px] w-24 h-24 md:w-32 md:h-32">
              <Image
                src="/child2.jpg"
                alt="Child 2"
                layout="fill"
                objectFit="cover"
                className="shadow-md"
              />
            </div>

            <div className="absolute bottom-4 right-[-120px] w-32 h-32 md:w-40 md:h-40">
              <Image
                src="/child3.jpg"
                alt="Child 3"
                layout="fill"
                objectFit="cover"
                className="shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
