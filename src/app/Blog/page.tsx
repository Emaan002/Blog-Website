import Link from "next/link";
import { blogsData } from "../Data/Blogs";
import localFont from "next/font/local";
import Image from "next/image";

const font = localFont({
  src: "../fonts/ivy-mode-8.ttf",
});


const HomePage = () => {
    return (
      <div id="Blog" className="p-8 mt-6">
        <h1
          className={`${font.className} text-5xl font-bold mb-4 text-center text-[#3C5E39]`}
        >
          Blogs
        </h1>
        <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 text-center gap-8 md:gap-6 mt-6">
          {blogsData.map((blog) => (
            <div key={blog.id} className="border w-[350px] rounded-lg p-4 shadow-lg">
              <div className="w-[300px] h-[300px] relative overflow-hidden rounded-lg">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
  
              <h2 className={`${font.className} text-[#3C5E39] text-xl font-semibold mt-1`}>{blog.title}</h2>
              <Link href={`/Blog/${blog.id}`}>Read More</Link>
            </div>
          ))}
        </div>
       </div> 
      </div>
    );
  };
  
  export default HomePage;