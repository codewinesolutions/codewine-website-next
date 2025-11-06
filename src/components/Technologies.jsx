'use client';

import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiFramer
} from 'react-icons/si';
import { RiOpenaiFill } from "react-icons/ri";
import { RxVercelLogo } from "react-icons/rx";


const Technologies = () => {
  const technologies = [
    { name: 'Next.js', Icon: SiNextdotjs, color: '#FFFFFF' },
    { name: 'React', Icon: SiReact, color: '#61DAFB' },
    { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#38B2AC' },
    { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
    { name: 'OpenAI', Icon: RiOpenaiFill, color: '#412991' },
    { name: 'Framer Motion', Icon: SiFramer, color: '#0055FF' },
    { name: 'Vercel', Icon: RxVercelLogo, color: '#FFFFFF' },
    { name: 'Node.js', Icon: SiNodedotjs, color: '#339933' },
  ];

  return (
    <section id="technologies" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#7B3F99]/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Powered by the Best{' '}
            <span className="bg-gradient-to-r from-[#7B3F99] to-[#C4314B] bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="text-lg text-[#E0E0E0]/80 max-w-3xl mx-auto">
            We leverage cutting-edge tools and frameworks to deliver exceptional results
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-[#7B3F99]/10 to-transparent border border-[#7B3F99]/20 rounded-2xl p-6 hover:border-[#7B3F99]/50 transition-all duration-300 hover:transform hover:-translate-y-2 text-center flex flex-col items-center justify-center"
            >
              <tech.Icon
                className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300"
                style={{ color: tech.color }}
              />
              <h3 className="text-white font-semibold">{tech.name}</h3>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-[#7B3F99]/10 border border-[#7B3F99]/30 rounded-full px-6 py-3">
            <span className="text-[#E0E0E0]">And many more modern technologies...</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Technologies;