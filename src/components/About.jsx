'use client';

import { Lightbulb, Zap, Megaphone } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovative Development',
      description: 'Crafting high-performance websites and applications with cutting-edge code.',
    },
    {
      icon: Megaphone,
      title: 'Strategic Marketing',
      description: 'Driving growth and engagement with data-informed digital marketing strategies.',
    },
    {
      icon: Zap,
      title: 'Intelligent Automation',
      description: 'Leveraging AI to streamline workflows, enhance customer interaction, and boost efficiency.',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, #7B3F99 1px, transparent 1px), linear-gradient(to bottom, #7B3F99 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-[#7B3F99] to-[#C4314B] bg-clip-text text-transparent">Us</span>
          </h2>
          {/* --- CHANGE 2: Expanded the main description --- */}
          <p className="text-lg text-[#E0E0E0]/80 max-w-3xl mx-auto leading-relaxed">
            At Codewine Solutions, we are a full-service digital agency dedicated to building powerful online presences. We fuse innovative web development with strategic digital marketing and intelligent AI automation to deliver comprehensive solutions that drive measurable results and fuel business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-[#7B3F99]/10 to-transparent border border-[#7B3F99]/20 rounded-2xl p-8 hover:border-[#7B3F99]/50 transition-all duration-300 hover:transform hover:-translate-y-2"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#7B3F99] to-[#C4314B] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <value.icon size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
              <p className="text-[#E0E0E0]/70">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;