function Features() {
    const points = [
        {
            icon: 'icon-cpu',
            title: 'Built for real business workflows, not demos',
            description: 'Every automation is designed around how your business actually operates — not a generic template.',
            color: '#3B82F6'
        },
        {
            icon: 'icon-trending-up',
            title: 'Designed to scale as your operations grow',
            description: 'The systems I build grow with you. No rework needed when your volume doubles.',
            color: '#8B5CF6'
        },
        {
            icon: 'icon-target',
            title: 'Focused on outcomes — time saved, revenue impact',
            description: "It's not about automating for the sake of it. Every workflow is tied to a measurable business result.",
            color: '#06B6D4'
        },
        {
            icon: 'icon-git-merge',
            title: 'Integrated into your existing tools, not isolated systems',
            description: 'Your CRM, inbox, calendar, and comms all stay connected. No siloed tools added to your stack.',
            color: '#10B981'
        }
    ];

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); }),
            { threshold: 0.1 }
        );
        document.querySelectorAll('#features .reveal, #features .reveal-scale').forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section id="features" data-name="features" data-file="components/Features.js"
            className="py-24 bg-gray-950 text-white relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
            </div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16 reveal">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 rounded-full text-white/70 text-sm font-semibold mb-4 tracking-wide uppercase border border-white/10">
                        <span>Why Different</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white"
                        style={{fontFamily:'var(--font-display)', letterSpacing:'-0.02em'}}>
                        Most AI automations fail.{' '}
                        <span style={{background:'linear-gradient(135deg,#60a5fa,#a78bfa)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>
                            Here's why mine don't.
                        </span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {points.map((point, i) => (
                        <div key={i} className={"flex gap-5 p-7 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/8 transition-all reveal delay-" + ((i % 2 + 1) * 100)}>
                            <div className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center"
                                style={{background:point.color + "20", border:"1px solid " + point.color + "30"}}>
                                <div className={point.icon + " text-2xl"} style={{color:point.color}}></div>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-2 text-white" style={{fontFamily:'var(--font-display)'}}>{point.title}</h3>
                                <p className="text-gray-400 leading-relaxed text-sm">{point.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
