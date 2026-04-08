function Contact() {
    React.useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); }),
            { threshold: 0.1 }
        );
        document.querySelectorAll('#contact .reveal, #contact .reveal-scale').forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section id="contact" data-name="contact" data-file="components/Contact.js"
            className="py-24 mesh-gradient text-white relative overflow-hidden noise-overlay">
            <div className="absolute inset-0 pointer-events-none">
                <div className="orb-float-slow absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
                <div className="orb-float-medium absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
                <div style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                    position: 'absolute', inset: 0
                }}></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="reveal inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 rounded-full text-white/80 text-sm font-semibold mb-6 tracking-wide uppercase border border-white/20">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        Available for New Projects
                    </div>

                    <h2 className="reveal text-4xl md:text-5xl font-extrabold mb-6" style={{fontFamily:'var(--font-display)', letterSpacing:'-0.02em'}}>
                        Ready to Automate Your Business?
                    </h2>
                    <p className="reveal text-xl mb-12 text-white/75 leading-relaxed max-w-2xl mx-auto">
                        Let's discuss how AI automation can transform your operations and scale your business without increasing headcount.
                        Book a free consultation to explore the possibilities.
                    </p>

                    <div className="reveal flex flex-col sm:flex-row gap-4 justify-center mb-16">
                        <a href="https://calendly.com/ahmedshahwarr/consultation-1-hour"
                            target="_blank" rel="noopener noreferrer"
                            className="shimmer-line bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:shadow-2xl hover:shadow-blue-900/30 transition-all inline-flex items-center justify-center group">
                            <div className="icon-calendar mr-2 text-xl group-hover:rotate-12 transition-transform"></div>
                            Schedule Free Consultation
                        </a>
                        <a href="https://wa.me/923165169330"
                            target="_blank" rel="noopener noreferrer"
                            className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all inline-flex items-center justify-center border border-white/30 group">
                            <div className="icon-message-circle mr-2 text-xl group-hover:scale-110 transition-transform"></div>
                            WhatsApp Me
                        </a>
                    </div>

                    <div className="grid md:grid-cols-3 gap-5 max-w-3xl mx-auto">
                        {[
                            { icon: 'icon-users', value: '50+', label: 'Happy Clients' },
                            { icon: 'icon-zap', value: '1000+', label: 'Automations Built' },
                            { icon: 'icon-trending-up', value: '95%+', label: 'Avg Success Rate' }
                        ].map((s, i) => (
                            <div key={i} className={`stat-card p-6 rounded-2xl text-center reveal delay-${(i+1)*100}`}>
                                <div className={`${s.icon} text-3xl mb-3 text-white/80`}></div>
                                <div className="text-3xl font-extrabold mb-1 metric-number">{s.value}</div>
                                <div className="text-white/60 text-sm">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
