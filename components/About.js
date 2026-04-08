function About() {
    const techStack = [
        { name: 'GoHighLevel', icon: '⚡', color: '#FF6B35', logo: 'https://ghlreview.com/wp-content/uploads/2021/07/ghl-logo.png' },
        { name: 'Assistable.ai', icon: '🤖', color: '#6366F1', logo: 'https://framerusercontent.com/images/9N4SQVKGkKOPKwQ9dSGd9WrCb7I.png' },
        { name: 'Vapi', icon: '📞', color: '#3B82F6', logo: 'https://framerusercontent.com/images/gcVwqBnQ5iyX1aJFuCzY8tBFJ8.png' },
        { name: 'Retell AI', icon: '🎙️', color: '#8B5CF6', logo: 'https://framerusercontent.com/images/FIX5QuXdxGiOHCCK27fMBfMPA.png' },
        { name: 'Zapier', icon: '🔗', color: '#FF4A00', logo: 'https://cdn.worldvectorlogo.com/logos/zapier-1.svg' },
        { name: 'Make', icon: '⚙️', color: '#6D00CC', logo: 'https://cdn.worldvectorlogo.com/logos/make-seeklogo.svg' },
        { name: 'n8n', icon: '🔄', color: '#EF4444', logo: 'https://n8n.io/favicon.ico' },
        { name: 'OpenAI', icon: '🧠', color: '#10a37f', logo: 'https://cdn.worldvectorlogo.com/logos/openai-2.svg' },
        { name: 'Twilio', icon: '📱', color: '#F22F46', logo: 'https://cdn.worldvectorlogo.com/logos/twilio.svg' },
        { name: 'Supabase', icon: '🗄️', color: '#3ECF8E', logo: 'https://cdn.worldvectorlogo.com/logos/supabase.svg' },
    ];

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); }),
            { threshold: 0.1 }
        );
        document.querySelectorAll('#about .reveal, #about .reveal-left, #about .reveal-right, #about .reveal-scale').forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section id="about" data-name="about" data-file="components/About.js" className="pt-24 pb-8 bg-white">
            <div className="container mx-auto px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16 reveal">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 rounded-full text-blue-600 text-sm font-semibold mb-4 tracking-wide uppercase">
                            <span>About Me</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-5 text-gray-900" style={{fontFamily:'var(--font-display)', letterSpacing:'-0.02em'}}>
                            What I Do
                        </h2>
                        <p className="text-xl text-gray-500 leading-relaxed max-w-3xl mx-auto">
                            I design and implement AI-powered systems that replace repetitive manual work and streamline business operations. My focus is on building reliable automation workflows, including AI voice agents and chatbots, that manage lead engagement, qualification, and appointment booking from end to end.
                        </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="reveal delay-200">
                        <div className="bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-3xl p-10 border border-gray-100">
                            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900" style={{fontFamily:'var(--font-display)'}}>
                                Tech Stack
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
                                {techStack.map((tech, i) => (
                                    <div key={i}
                                        className={`tech-badge flex flex-col items-center p-4 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md reveal delay-${(i % 5 + 1) * 100} cursor-default`}>
                                        <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-3 overflow-hidden"
                                            style={{background:`${tech.color}15`}}>
                                            <img
                                                src={tech.logo}
                                                alt={tech.name}
                                                className="object-contain"
                                                style={{
                                                    width: tech.name === 'GoHighLevel' ? '72px' : '32px',
                                                    height: tech.name === 'GoHighLevel' ? '22px' : '32px',
                                                    maxWidth: '100%'
                                                }}
                                                onError={(e) => { e.target.style.display='none'; e.target.parentNode.innerHTML = `<span style="font-size:24px">${tech.icon}</span>`; }}
                                                loading="lazy"
                                            />
                                        </div>
                                        <span className="text-xs font-semibold text-gray-700 text-center leading-tight">{tech.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
