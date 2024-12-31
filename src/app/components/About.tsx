import React from "react";

function About() {
  return (
    <div
    id="about"
    className="w-full mt-24 flex items-center justify-center bg-[#3C5E39] px-4"
  >
    <div className="w-full max-w-4xl my-6 bg-[url('/bg.jpg')] bg-cover bg-center rounded-3xl p-6">
      <p className="text-gray-300 text-lg font-mono leading-7 sm:text-base md:text-lg lg:text-xl">
       &quot;Health blogs are a valuable resource for individuals seeking to improve
        their overall well-being. They offer practical advice on topics like
        fitness, nutrition, mental health, and self-care, making it easier to
        adopt healthy habits. A well-curated health blog serves as a guide,
        empowering readers with actionable tips for staying active, eating
        balanced meals, and managing stress effectively. These platforms often
        feature expert insights, ensuring the information shared is both credible
        and inspiring. From exploring the benefits of yoga to understanding the
        importance of quality sleep, health blogs cater to diverse interests.
        Many blogs focus on holistic wellness,
        addressing the mind-body connection for a balanced lifestyle. With the
        increasing focus on mental health, these blogs provide tools for
        mindfulness and stress relief. Ultimately, health blogs inspire
        individuals to take proactive steps toward a happier, healthier life&quot;
      </p>
    </div>
  </div>
  
  );
}

export default About;
