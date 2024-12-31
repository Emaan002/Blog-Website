
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Blog from "./Blog/page";

export default function Home() {
  return (
  <main className="bg-[#c4d4a7] min-h-screen w-full overflow-hidden">
     
    <Hero/>
    <About/>
    <Blog/>
    <Contact/>
  </main>
  );
}
