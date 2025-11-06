'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
    const faqData = [
        {
            question: "What services does Codewine Solutions provide?",
            answer:
                "We offer web development, UI/UX design, digital marketing, and AI-based solutions including WhatsApp AI Agents, business automation, and custom AI integrations."
        },
        {
            question: "Do you build websites for all types of businesses?",
            answer:
                "Yes. Whether you're a startup, small business, or established brand, we create tailored websites that match your goals and audience."
        },
        {
            question: "Can you automate my business using AI?",
            answer:
                "Absolutely. We design custom AI workflows, chatbots, and automation systems that streamline repetitive tasks and improve productivity."
        },
        {
            question: "Do you provide ongoing maintenance and support?",
            answer:
                "Yes, we offer hosting, updates, and long-term maintenance plans to ensure your website or system remains fast, secure, and up-to-date."
        },
        {
            question: "How can I get a quote for my project?",
            answer:
                "You can reach us through the contact form on our website or message us on WhatsApp. We’ll discuss your requirements and provide a custom quote."
        },
        {
            question: "Do you work with clients outside India?",
            answer:
                "Yes, we work with clients globally through virtual collaboration and secure online project management tools."
        },
        {
            question: "How long does it take to complete a project?",
            answer:
                "Project timelines vary depending on complexity. A standard website usually takes 2–4 weeks, while advanced AI or automation projects may take longer."
        },
    ];

    return (
        <section id="faq" className="py-20 md:py-32 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                        Frequently Asked{' '}
                        <span className="bg-gradient-to-r from-[#7B3F99] to-[#C4314B] bg-clip-text text-transparent">
                            Questions
                        </span>
                    </h2>
                    <p className="text-lg text-[#E0E0E0]/80 max-w-3xl mx-auto">
                        Have questions? We have answers. Here are some of the most common inquiries we receive.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <Accordion type="single" collapsible className="w-full">
                        {faqData.map((item, index) => (
                            <AccordionItem value={`item-${index}`} key={index}>
                                <AccordionTrigger className="text-lg text-left">{item.question}</AccordionTrigger>
                                <AccordionContent>
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
};

export default FAQ;