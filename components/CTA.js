function CTA() {
    return (
        <section id="cta" data-name="cta" data-file="components/CTA.js"
            className="py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
                <div style={{backgroundImage:'linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)',backgroundSize:'60px 60px',position:'absolute',inset:0}}></div>
            </div>
            <div className="container mx-auto px-6 text-center relative z-10">
                <div className="max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white/80 text-sm font-semibold mb-6 border border-white/20 backdrop-blur-sm">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full" style={{animation:'pulse-dot 2s infinite'}}></div>
                        Available for new projects
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight"
                        style={{fontFamily:'var(--font-display)', letterSpacing:'-0.02em'}}>
                        Let's automate your{' '}
                        <span className="underline decoration-white/30 underline-offset-4">busiest workflows</span>
                    </h2>
                    <p className="text-xl text-white/80 mb-10 leading-relaxed">
                        Get a custom breakdown of what can be automated in your business — no fluff, just a clear plan.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://calendly.com/ahmedshahwarr/consultation-1-hour" target="_blank" rel="noopener noreferrer"
                            className="shimmer-line bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:shadow-2xl hover:shadow-blue-900/40 transition-all inline-flex items-center group text-lg">
                            Book a Free Call
                            <div className="icon-calendar ml-2 text-xl group-hover:rotate-12 transition-transform"></div>
                        </a>
                        <a href="https://wa.me/923165169330" target="_blank" rel="noopener noreferrer"
                            className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all inline-flex items-center border border-white/30 group text-lg">
                            WhatsApp Me
                            <div className="icon-message-circle ml-2 text-xl group-hover:scale-110 transition-transform"></div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
