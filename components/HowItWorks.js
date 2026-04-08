function HowItWorks() {
    const steps = [
        {
            title: 'Audit',
            description: 'Identify bottlenecks in your current workflow and uncover automation opportunities.',
            color: '#3B82F6',
            bgColor: '#EFF6FF',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                </svg>
            )
        },
        {
            title: 'Design',
            description: 'Map out a custom automation system tailored to your business processes.',
            color: '#8B5CF6',
            bgColor: '#F5F3FF',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18M9 21V9"/>
                </svg>
            )
        },
        {
            title: 'Build',
            description: 'Implement end-to-end workflows using AI tools, integrations, and APIs.',
            color: '#06B6D4',
            bgColor: '#ECFEFF',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
                </svg>
            )
        },
        {
            title: 'Optimize',
            description: 'Continuously refine and improve performance based on real usage.',
            color: '#10B981',
            bgColor: '#ECFDF5',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
                </svg>
            )
        }
    ];

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); }),
            { threshold: 0.1 }
        );
        document.querySelectorAll('#how-it-works .reveal').forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section id="how-it-works" data-name="how-it-works" data-file="components/HowItWorks.js"
            className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16 reveal">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-cyan-50 rounded-full text-cyan-600 text-sm font-semibold mb-4 tracking-wide uppercase">
                        <span>The Process</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900"
                        style={{fontFamily:'var(--font-display)', letterSpacing:'-0.02em'}}>
                        How It Works
                    </h2>
                    <p className="text-xl text-gray-500">
                        A clear, proven process from first conversation to a fully running automation system
                    </p>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Connector line desktop */}
                    <div className="hidden md:block absolute top-14 left-0 right-0 h-0.5 mx-20"
                        style={{background:'linear-gradient(to right,#BFDBFE,#DDD6FE,#A5F3FC,#6EE7B7)'}}></div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {steps.map((step, i) => (
                            <div key={i} className={"flex flex-col items-center text-center reveal"}
                                style={{transitionDelay: (i * 100) + 'ms'}}>
                                {/* Icon circle */}
                                <div className="relative mb-6 z-10">
                                    <div className="w-28 h-28 rounded-2xl flex items-center justify-center shadow-md"
                                        style={{background: step.bgColor, border:'2px solid ' + step.color + '30'}}>
                                        <div style={{color: step.color}}>
                                            {step.svg}
                                        </div>
                                    </div>
                                    {/* Step number badge */}
                                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-black shadow-lg"
                                        style={{background: step.color}}>
                                        {i + 1}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-gray-900" style={{fontFamily:'var(--font-display)'}}>
                                    Step {i + 1}: {step.title}
                                </h3>
                                <p className="text-gray-500 leading-relaxed text-sm">{step.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Bottom note */}
                    <div className="mt-14 text-center reveal" style={{transitionDelay:'400ms'}}>
                        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 rounded-2xl px-8 py-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                            </svg>
                            <p className="text-gray-700 font-semibold">
                                No technical setup required from your side.{' '}
                                <span className="text-blue-600">Everything is handled end-to-end.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
