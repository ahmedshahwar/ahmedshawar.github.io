function Hero() {
    const [count1, setCount1] = React.useState(0);
    const [count2, setCount2] = React.useState(0);
    const [count3, setCount3] = React.useState(0);
    const [started, setStarted] = React.useState(false);

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setStarted(true);
            // Animate counters
            const animate = (setter, target, duration) => {
                const start = Date.now();
                const tick = () => {
                    const elapsed = Date.now() - start;
                    const progress = Math.min(elapsed / duration, 1);
                    const eased = 1 - Math.pow(1 - progress, 3);
                    setter(Math.floor(eased * target));
                    if (progress < 1) requestAnimationFrame(tick);
                };
                requestAnimationFrame(tick);
            };
            animate(setCount1, 50, 1800);
            animate(setCount2, 1000, 2000);
            animate(setCount3, 95, 1600);
        }, 800);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section data-name="hero" data-file="components/Hero.js"
            className="mesh-gradient text-white pt-32 pb-24 relative overflow-hidden noise-overlay">

            {/* Animated background orbs */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="orb-float-slow absolute top-16 left-8 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
                <div className="orb-float-medium absolute bottom-16 right-8 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
                <div className="orb-float-fast absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl"></div>
                {/* Grid lines */}
                <div style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                    position: 'absolute', inset: 0
                }}></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="hero-tag inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6 backdrop-blur-sm border border-white/20">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full" style={{animation:'pulse-dot 2s infinite'}}></div>
                            <span className="text-sm font-medium tracking-wide">AI Automation Specialist</span>
                        </div>

                        <h1 className="hero-title text-5xl md:text-6xl font-extrabold mb-6 leading-tight"
                            style={{fontFamily:'var(--font-display)', letterSpacing:'-0.02em'}}>
                            Scale Your Business{' '}
                            <span style={{
                                background: 'linear-gradient(135deg, #60a5fa, #a78bfa, #34d399)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text'
                            }}>Without Increasing Headcount</span>
                        </h1>

                        <p className="hero-sub text-lg mb-10 text-white/80 leading-relaxed max-w-lg">
                            From lead capture to follow-ups and operations, I design and implement end-to-end workflows so you can scale without hiring and save 20+ hours/week on manual work. Let's build your AI-powered growth engine.
                        </p>

                        <div className="hero-cta flex flex-wrap gap-4">
                            <a href="https://calendly.com/ahmedshahwarr/consultation-1-hour" target="_blank" rel="noopener noreferrer"
                                className="shimmer-line bg-white text-blue-600 px-8 py-3.5 rounded-full font-bold hover:shadow-2xl hover:shadow-blue-900/30 transition-all inline-flex items-center group">
                                Schedule Consultation
                                <div className="icon-calendar ml-2 text-xl group-hover:rotate-12 transition-transform"></div>
                            </a>
                            <a href="https://wa.me/923165169330" target="_blank" rel="noopener noreferrer"
                                className="bg-white/10 backdrop-blur-sm text-white px-8 py-3.5 rounded-full font-bold hover:bg-white/20 transition-all inline-flex items-center border border-white/30 group">
                                WhatsApp
                                <div className="icon-message-circle ml-2 text-xl group-hover:scale-110 transition-transform"></div>
                            </a>
                        </div>

                        {/* Mini stats row */}
                        <div className="hero-cta mt-10 flex gap-8">
                            {[
                                { val: count1 + '+', label: 'Happy Clients' },
                                { val: count2 + '+', label: 'Automations Built' },
                                { val: count3 + '%+', label: 'Success Rate' }
                            ].map((s, i) => (
                                <div key={i} className="text-center">
                                    <div className="text-2xl font-extrabold text-white metric-number">{s.val}</div>
                                    <div className="text-xs text-white/60 mt-0.5 tracking-wide">{s.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="hero-image flex justify-center">
                        <div className="relative">
                            {/* Pulse rings */}
                            <div className="pulse-ring"></div>
                            <div className="pulse-ring-2"></div>
                            {/* Photo */}
                            <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl glow-blue relative z-10">
                                <img src="https://app.trickle.so/storage/public/images/usr_1dad778348000001/2939249c-4c0a-41f3-9d6b-2df80ca02861.jpeg"
                                    alt="Ahmed Shahwar" className="w-full h-full object-cover" loading="eager"/>
                            </div>
                            {/* Badge */}
                            <div className="hero-badge absolute -bottom-4 -right-4 bg-white text-blue-600 px-5 py-2.5 rounded-full font-bold shadow-xl shadow-blue-200 z-20 flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                95%+ Success Rate
                            </div>
                            {/* Floating chips */}
                            <div className="absolute -left-8 top-12 bg-white/15 backdrop-blur-md border border-white/20 rounded-xl px-4 py-2 text-sm font-medium text-white z-20"
                                style={{animation:'float-fast 4s ease-in-out infinite'}}>
                                <span className="text-cyan-300">⚡</span> 50+ Clients
                            </div>
                            <div className="absolute -right-6 bottom-20 bg-white/15 backdrop-blur-md border border-white/20 rounded-xl px-4 py-2 text-sm font-medium text-white z-20"
                                style={{animation:'float-slow 6s ease-in-out infinite 1s'}}>
                                <span className="text-purple-300">🤖</span> AI Powered
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
