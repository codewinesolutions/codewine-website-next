import {
    Globe,
    Smartphone,
    Layers,
    Palette,
    Link2,
    Megaphone,
    Search,
    PenSquare,
    Mail,
    BarChart,
    MessageCircle,
    Bot,
    Workflow,
    BrainCircuit,
    Voicemail,
    Wrench,
    Server
} from 'lucide-react';

export const contactDetails = {
    whatsapp: {
        label: '+1 (234) 567-890',
        link: `https://wa.me/1234567890?text=Hi,+I'm+interested+in+learning+more+about+your+services.`,
        number: '1234567890'
    },
    email: 'codewinesolutions@gmail.com',
    phone: '+1 (234) 567-890'
};


export const serviceData = {
    web: [
        { icon: Globe, title: 'Custom Website Development', description: 'High-performance sites with Next.js, React, and Tailwind CSS.' },
        { icon: Smartphone, title: 'Progressive Web Apps (PWAs)', description: 'App-like experiences on the web for maximum reach.' },
        { icon: Layers, title: 'Full-Stack Web Applications', description: 'Robust and scalable applications from frontend to backend.' },
        { icon: Palette, title: 'Landing Page & Portfolio Design', description: 'Visually stunning, conversion-focused page designs.' },
        { icon: Link2, title: 'API Integration & Automation', description: 'Seamlessly connect services and automate data flows.' },
    ],
    marketing: [
        { icon: Megaphone, title: 'Social Media Marketing', description: 'Engaging campaigns on Instagram, Facebook, and LinkedIn.' },
        { icon: Search, title: 'SEO Optimization', description: 'Improve your search engine rankings and attract organic traffic.' },
        { icon: PenSquare, title: 'Content Creation & Copywriting', description: 'Compelling content that resonates with your audience.' },
        { icon: Mail, title: 'Email Marketing', description: 'Nurture leads and drive conversions with targeted email campaigns.' },
        { icon: BarChart, title: 'Performance Campaigns & Analytics', description: 'Data-driven advertising and in-depth performance analysis.' },
    ],
    ai: [
        { icon: MessageCircle, title: 'WhatsApp AI Agent', description: 'Automate customer support and sales with intelligent chatbots.' },
        { icon: Bot, title: 'AI Automation for Businesses', description: 'Streamline repetitive tasks and boost operational efficiency.' },
        { icon: Workflow, title: 'Business Process Automation', description: 'Design and implement automated workflows for your team.' },
        { icon: BrainCircuit, title: 'Custom AI Integrations', description: 'Leverage ChatGPT, NLP, and other APIs for custom solutions.' },
        { icon: Voicemail, title: 'Voice & Chat AI Assistants', description: 'Build intelligent assistants for any platform.' },
    ],
    hosting: [
        { icon: Wrench, title: 'Website Maintenance & Updates', description: 'Keep your website secure, fast, and up-to-date.' },
        { icon: Server, title: 'Domain & Hosting Setup', description: 'Reliable and scalable hosting solutions for your web projects.' },
    ],
};