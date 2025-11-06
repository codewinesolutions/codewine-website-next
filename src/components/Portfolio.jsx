'use client';

import { ExternalLink, Tag } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'AI Chatbot for Business',
      description: 'Intelligent customer service automation with natural language processing',
      tags: ['AI', 'Chatbot', 'NLP'],
      gradient: 'from-[#7B3F99] to-[#9D5BB5]',
    },
    {
      title: 'E-Commerce Dashboard',
      description: 'Real-time analytics and inventory management system',
      tags: ['Web App', 'Dashboard', 'Analytics'],
      gradient: 'from-[#9D5BB5] to-[#C4314B]',
    },
    {
      title: 'WhatsApp Business Bot',
      description: 'Automated customer engagement and order processing',
      tags: ['WhatsApp', 'Automation', 'AI'],
      gradient: 'from-[#C4314B] to-[#D95B6F]',
    },
    {
      title: 'SaaS Landing Page',
      description: 'Modern, conversion-optimized landing page design',
      tags: ['Web Design', 'UI/UX', 'Next.js'],
      gradient: 'from-[#D95B6F] to-[#7B3F99]',
    },
    {
      title: 'Business Workflow Automation',
      description: 'Custom automation suite for enterprise operations',
      tags: ['Automation', 'Enterprise', 'API'],
      gradient: 'from-[#7B3F99] to-[#C4314B]',
    },
    {
      title: 'AI Content Generator',
      description: 'GPT-powered content creation platform',
      tags: ['AI', 'GPT', 'Content'],
      gradient: 'from-[#C4314B] to-[#9D5BB5]',
    },
  ];

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-gradient-to-b from-transparent to-[#0B0B0F] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-[#7B3F99] to-[#C4314B] bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-lg text-[#E0E0E0]/80 max-w-3xl mx-auto">
            Discover our latest projects and success stories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-[#0B0B0F] border border-[#7B3F99]/20 rounded-2xl overflow-hidden hover:border-[#7B3F99]/50 transition-all duration-300 hover:transform hover:-translate-y-2"
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative`}>
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                    <ExternalLink size={24} className="text-white" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-[#E0E0E0]/70 text-sm mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="inline-flex items-center space-x-1 bg-[#7B3F99]/10 border border-[#7B3F99]/30 rounded-full px-3 py-1 text-xs text-[#E0E0E0]"
                    >
                      <Tag size={12} />
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio