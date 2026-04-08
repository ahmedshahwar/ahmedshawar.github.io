function ProofStrip() {
    return (
        <section data-name="proof-strip" data-file="components/ProofStrip.js"
            className="proof-strip-section py-8 bg-gradient-to-r from-blue-600 to-purple-700 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10"
                style={{backgroundImage:'linear-gradient(45deg,rgba(255,255,255,0.1) 25%,transparent 25%,transparent 50%,rgba(255,255,255,0.1) 50%,rgba(255,255,255,0.1) 75%,transparent 75%)',backgroundSize:'40px 40px'}}></div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-center md:text-left text-white/90 font-semibold text-lg tracking-wide">
                        Trusted by growing teams to automate and scale operations
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-8">
                        <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-2xl px-5 py-3 border border-white/20">
                            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                                <div className="icon-clock text-lg"></div>
                            </div>
                            <div>
                                <div className="text-xl font-extrabold leading-tight">100+ hrs/month</div>
                                <div className="text-white/70 text-xs tracking-wide">saved for clients</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-2xl px-5 py-3 border border-white/20">
                            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                                <div className="icon-zap text-lg"></div>
                            </div>
                            <div>
                                <div className="text-xl font-extrabold leading-tight">3–5x faster</div>
                                <div className="text-white/70 text-xs tracking-wide">lead response times</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
