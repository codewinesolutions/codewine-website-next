'use client';

import { MessageCircle, Mail, Linkedin, Github, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B0B0F] border-t border-[#7B3F99]/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#7B3F99] to-[#C4314B] flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <span className="text-xl font-bold text-white">
                Codewine Solutions
              </span>
            </div>
            <p className="text-[#E0E0E0]/70 text-sm">
              Crafting innovative digital solutions that drive growth and
              efficiency.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {['About', 'Services', 'Portfolio', 'Contact', 'FAQ'].map(
                (link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="block text-[#E0E0E0]/70 hover:text-[#7B3F99] transition-colors text-sm"
                  >
                    {link}
                  </a>
                )
              )}
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-[#7B3F99]/10 hover:bg-[#7B3F99]/20 flex items-center justify-center transition-colors"
              >
                <MessageCircle size={18} className="text-[#E0E0E0]" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-[#7B3F99]/10 hover:bg-[#7B3F99]/20 flex items-center justify-center transition-colors"
              >
                <Mail size={18} className="text-[#E0E0E0]" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-[#7B3F99]/10 hover:bg-[#7B3F99]/20 flex items-center justify-center transition-colors"
              >
                <Linkedin size={18} className="text-[#E0E0E0]" />
              </a>
              <a
                href="https://www.instagram.com/codewine_solutions/"
                className="w-10 h-10 rounded-lg bg-[#7B3F99]/10 hover:bg-[#7B3F99]/20 flex items-center justify-center transition-colors"
              >
                <Instagram size={18} className="text-[#E0E0E0]" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#7B3F99]/20 pt-8 text-center">
          <p className="text-[#E0E0E0]/50 text-sm">
            © {currentYear} Codewine Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer