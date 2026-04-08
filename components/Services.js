function Services() {
    const services = [
        {
            icon: 'icon-phone-call',
            title: 'AI Voice Agents',
            description: 'Intelligent voice agents that handle customer calls, qualify leads, and book appointments 24/7 without human intervention.',
            color: '#3B82F6'
        },
        {
            icon: 'icon-message-square-text',
            title: 'AI Chat Agents',
            description: 'Smart chatbots that engage visitors, answer questions, and convert leads through natural conversations across all channels.',
            color: '#8B5CF6'
        },
        {
            icon: 'icon-workflow',
            title: 'Workflow Automation',
            description: 'End-to-end automation systems that take your operations from lead capture to nurturing to booked appointments — saving 20+ hours per week.',
            color: '#06B6D4'
        },
        {
            icon: 'icon-phone',
            title: 'Twilio Integration',
            description: 'Custom SMS and calling solutions integrated with your CRM for seamless communication automation.',
            color: '#EF4444'
        },
        {
            icon: 'icon-target',
            title: 'Lead Management',
            description: 'Automated lead qualification, scoring, and routing systems that ensure no opportunity falls through the cracks.',
            color: '#F59E0B'
        },
        {
            icon: 'icon-git-merge',
            title: 'System Integration',
            description: 'Connect all your business tools and build powerful automation workflows using Zapier, Make, and n8n — reducing manual handoffs and saving hours each week.',
            color: '#10B981'
        }
    ];

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); }),
            { threshold: 0.1 }
        );
        document.querySelectorAll('#services .reveal, #services .reveal-scale').forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section id="services" data-name="services" data-file="components/Services.js" className="pt-10 pb-24 bg-gray-50/50">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16 reveal">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-purple-50 rounded-full text-purple-600 text-sm font-semibold mb-4 tracking-wide uppercase">
                        <span>What I Offer</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900" style={{fontFamily:'var(--font-display)', letterSpacing:'-0.02em'}}>
                        Automation Systems I Build
                    </h2>
                    <p className="text-xl text-gray-500">
                        Custom AI-powered workflows built to save you time and increase results across every part of your business
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {services.map((service, i) => (
                        <div key={i}
                            className={`service-card bg-white p-8 rounded-2xl border border-gray-100 reveal delay-${(i % 3 + 1) * 100}`}>
                            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                                style={{background:`${service.color}15`}}>
                                <div className={`${service.icon} text-2xl`} style={{color: service.color}}></div>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-900" style={{fontFamily:'var(--font-display)'}}>{service.title}</h3>
                            <p className="text-gray-500 leading-relaxed">{service.description}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12 reveal">
                    <p className="text-lg text-gray-500 mb-4">Need a custom solution?</p>
                    <a href="https://calendly.com/ahmedshahwarr/consultation-1-hour" target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3.5 rounded-full font-bold hover:shadow-lg hover:shadow-blue-200 transition-all group">
                        Contact for Quote
                        <div className="icon-arrow-right text-lg group-hover:translate-x-1 transition-transform"></div>
                    </a>
                </div>
            </div>
        </section>
    );
}
