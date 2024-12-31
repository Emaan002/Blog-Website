import localFont from 'next/font/local'
import React from 'react'
import "@fortawesome/fontawesome-free/css/all.min.css";


const font = localFont({
  src: "../fonts/ivy-mode-10.ttf"
})

function Contact() {
  return (
<div id="contact" className="flex flex-col md:flex-row items-center justify-center h-auto md:h-[700px] bg-[#3C5E39] p-4">
  {/* Image Container */}
  <div className="w-full md:w-1/2 p-4">
    <img
      src="/final.jpg"
      alt="Two women posing for a fashion photo"
      className="hidden md:block w-[600px] h-[600px] object-cover"
    />
  </div>

  {/* Contact Form Container */}
  <div className="w-full h-full md:mt-64 md:w-1/2 p-4 border-t-2 border-l-2 border-[#c4d4a7] ">
    <h1 className={`text-4xl font-bold mb-4 text-[#c4d4a7] text-center ${font.className}`}>
      Contact Us
    </h1>
    <div className="flex flex-col md:flex-row justify-around">
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-[#c4d4a7]">Full Name</label>
          <input
            type="text"
            className="mt-1 block w-full md:w-60 border-b-2 border-gray-300 focus:border-black focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#c4d4a7]">E-mail</label>
          <input
            type="email"
            className="mt-1 block w-full md:w-60 border-b-2 border-gray-300 focus:border-black focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#c4d4a7]">Message</label>
          <textarea
            className="mt-1 block w-full md:w-60 border-b-2 border-gray-300 focus:border-black focus:outline-none"
          ></textarea>
        </div>
      </form>
      <div className="mt-8 ">
        <h2 className="text-lg font-bold text-[#c4d4a7]">Contact</h2>
        <p className="text-[#c4d4a7]">hafsaahmed697@gmail.com</p>
        <h2 className="text-lg font-bold mt-4 text-[#c4d4a7]">Based in</h2>
        <p className="text-[#c4d4a7]">Karachi, Pakistan</p>
      </div>
    </div>
    <div className="flex flex-col md:flex-row justify-around items-center">
      <button
        type="submit"
        className="bg-[#c4d4a7] mt-6 text-[#3C5E39] py-2 px-4 rounded-full"
      >
        Contact Us
      </button>
      <div className="flex space-x-7 mt-8">
        <a href="https://github.com/Emaan002" target='_blank' className="text-[#c4d4a7]">
          <i className="fab fa-github"></i>
        </a>
        <a href="#" className="text-[#c4d4a7]">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/in/hafsa-sagheer-ahmed-737251311?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank' className="text-[#c4d4a7]">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </div>
  </div>
</div>
  )
}
export default Contact