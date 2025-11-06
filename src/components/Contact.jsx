'use client';

import { useState } from 'react';
import { Send, MessageCircle, Mail, MapPin, Phone } from 'lucide-react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { contactDetails } from '@/constants';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A0B2E] via-[#0B0B0F] to-[#2D1B3D] opacity-50"></div>

      <div className="absolute top-20 left-10 w-72 h-72 bg-[#7B3F99] rounded-full filter blur-[128px] opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#C4314B] rounded-full filter blur-[128px] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Get in
            <span className="bg-gradient-to-r from-[#7B3F99] to-[#C4314B] bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-lg text-[#E0E0E0]/80 max-w-3xl mx-auto">
            Ready to transform your business? Let's start a conversation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-[#0B0B0F]/50 border-[#7B3F99]/30 text-white placeholder:text-[#E0E0E0]/40 focus:border-[#7B3F99] h-12"
                />
              </div>

              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-[#0B0B0F]/50 border-[#7B3F99]/30 text-white placeholder:text-[#E0E0E0]/40 focus:border-[#7B3F99] h-12"
                />
              </div>

              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="bg-[#0B0B0F]/50 border-[#7B3F99]/30 text-white placeholder:text-[#E0E0E0]/40 focus:border-[#7B3F99] resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-[#7B3F99] to-[#C4314B] hover:opacity-90 transition-all duration-300 group h-12"
              >
                Send Message
                <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-[#7B3F99]/10 to-transparent border border-[#7B3F99]/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

              <div className="space-y-6">
                <a
                  href={contactDetails.whatsapp.link}
                  className="flex items-start space-x-4 group hover:transform hover:translate-x-2 transition-transform"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7B3F99] to-[#C4314B] flex items-center justify-center flex-shrink-0">
                    <MessageCircle size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-[#E0E0E0]/60 text-sm mb-1">WhatsApp</p>
                    <p className="text-white font-medium">{contactDetails.whatsapp.label}</p>
                  </div>
                </a>

                <a
                  href={`mailto:${contactDetails.email}`}
                  className="flex items-start space-x-4 group hover:transform hover:translate-x-2 transition-transform"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7B3F99] to-[#C4314B] flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-[#E0E0E0]/60 text-sm mb-1">Email</p>
                    <p className="text-white font-medium">{contactDetails.email}</p>
                  </div>
                </a>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7B3F99] to-[#C4314B] flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-[#E0E0E0]/60 text-sm mb-1">Phone</p>
                    <p className="text-white font-medium">{contactDetails.phone}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#7B3F99]/10 to-transparent border border-[#7B3F99]/20 rounded-2xl p-8 text-center">
              <p className="text-[#E0E0E0]/80 mb-4">
                Prefer instant messaging?
              </p>
              <Button
                className="bg-gradient-to-r from-[#7B3F99] to-[#C4314B] hover:opacity-90"
                asChild
              >
                <a href={contactDetails.whatsapp.link}>
                  <MessageCircle className="mr-2" size={18} />
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;