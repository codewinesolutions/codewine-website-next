'use client';

import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A0B2E] via-[#0B0B0F] to-[#2D1B3D] opacity-90"></div>

      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#7B3F99] rounded-full filter blur-[128px] animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#C4314B] rounded-full filter blur-[128px] animate-pulse delay-1000"></div>
      </div>

      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #7B3F99 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* --- CHANGE 1: Updated the tagline to reflect the broader scope --- */}
        <div className="inline-flex items-center space-x-2 bg-[#7B3F99]/10 border border-[#7B3F99]/30 rounded-full px-4 py-2 mb-8 animate-fade-in">
          <Sparkles size={16} className="text-[#7B3F99]" />
          <span className="text-sm text-[#E0E0E0]">Full-Service Digital Agency</span>
        </div>

        {/* --- CHANGE 2: New, more comprehensive headline --- */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          From Code to{' '}
          <span className="bg-gradient-to-r from-[#7B3F99] to-[#C4314B] bg-clip-text text-transparent">
            Conversion
          </span>
        </h1>

        {/* --- CHANGE 3: New sub-headline covering all service pillars --- */}
        <p className="text-lg sm:text-xl text-[#E0E0E0]/80 mb-10 max-w-3xl mx-auto leading-relaxed">
          We unite custom web development, data-driven digital marketing, and intelligent AI automation to elevate your brand and accelerate growth.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#7B3F99] to-[#C4314B] hover:opacity-90 transition-all duration-300 group px-8"
          >
            <a href="#contact">Get Started</a>
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-[#7B3F99] text-[#E0E0E0] bg-[#7B3F99]/10 hover:bg-[#7B3F99]/20 hover:text-[#E0E0E0] px-8"
            asChild
          >
            <a href="#services">View Services</a>
          </Button>
        </div>

        {/* --- CHANGE 4: Updated stats to include marketing --- */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { label: 'Projects Delivered', value: '100+' },
            { label: 'Happy Clients', value: '50+' },
            { label: 'Marketing Campaigns', value: '80+' }, // Replaced 'AI Solutions'
            { label: 'Success Rate', value: '98%' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#7B3F99] to-[#C4314B] bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-[#E0E0E0]/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#7B3F99] rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-[#7B3F99] rounded-full"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;