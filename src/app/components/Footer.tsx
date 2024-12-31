import React from 'react'

function Footer() {
  return (
    <footer className="bg-[#3C5E39] text-[#C4DA7] py-2 mb-0">
  <div className="max-w-screen-xl mx-auto text-center">
    <p className="text-lg font-medium ">
      &copy; 2024 Viblog All Rights Reserved.
    </p>
    <div className="flex justify-center space-x-6">
      <a
        href="https://www.linkedin.com/in/hafsa-sagheer-ahmed-737251311?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#C4DA7] hover:text-white transition duration-300"
      >
        LinkedIn
      </a>
      <a
        href="https://github.com/Emaan002"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#C4DA7] hover:text-white transition duration-300"
      >
        GitHub
      </a>
      <a
        href="https://www.twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#C4DA7] hover:text-white transition duration-300"
      >
        Twitter
      </a>
    </div>
    <p className="text-sm">
      Built with &hearts; using Next.js, Tailwind CSS, and local fonts.
    </p>
  </div>
</footer>
  )
}

export default Footer



