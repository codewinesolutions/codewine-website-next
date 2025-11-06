'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { serviceData } from '@/constants';

const ServiceCard = ({ icon: Icon, title, description, gradient }) => (
  <div
    className="group relative bg-[#0B0B0F] border border-[#7B3F99]/20 rounded-2xl p-6 hover:border-[#7B3F99]/50 transition-all duration-300 hover:transform hover:-translate-y-2 overflow-hidden"
  >
    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity rounded-full blur-2xl`}></div>
    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
      <Icon size={24} className="text-white" />
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-[#E0E0E0]/70 text-sm leading-relaxed">{description}</p>
  </div>
);

const Services = () => {

  return (
    <section id="services" className="py-20 md:py-32 bg-gradient-to-b from-transparent to-[#0B0B0F] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-[#7B3F99] to-[#C4314B] bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-lg text-[#E0E0E0]/80 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to elevate your business
          </p>
        </div>

        <Tabs defaultValue="web" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-2xl grid-cols-2 md:grid-cols-4 rounded-full bg-[#1A0B2E]/50 border border-[#7B3F99]/20 p-1">
              <TabsTrigger className="data-[state=active]:bg-white rounded-full transition-all duration-300" value="web">Web & App</TabsTrigger>
              <TabsTrigger className="data-[state=active]:bg-white rounded-full transition-all duration-300" value="marketing">Digital Marketing</TabsTrigger>
              <TabsTrigger className="data-[state=active]:bg-white rounded-full transition-all duration-300" value="ai">AI & Automation</TabsTrigger>
              <TabsTrigger className="data-[state=active]:bg-white rounded-full transition-all duration-300" value="hosting">Hosting</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="web">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceData.web.map((service, index) => (
                <ServiceCard key={index} {...service} gradient="from-[#7B3F99] to-[#9D5BB5]" />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="marketing">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceData.marketing.map((service, index) => (
                <ServiceCard key={index} {...service} gradient="from-[#9D5BB5] to-[#C4314B]" />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="ai">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceData.ai.map((service, index) => (
                <ServiceCard key={index} {...service} gradient="from-[#C4314B] to-[#D95B6F]" />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="hosting">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceData.hosting.map((service, index) => (
                <ServiceCard key={index} {...service} gradient="from-[#D95B6F] to-[#7B3F99]" />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

export default Services;