function Footer() {
    return (
        <footer data-name="footer" data-file="components/Footer.js"
            className="bg-gray-950 text-white py-14">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-10 mb-10">
                    <div>
                        <h3 className="text-xl font-extrabold mb-3" style={{fontFamily:'var(--font-display)'}}>
                            <span className="gradient-text">Ahmed</span> Shahwar
                        </h3>
                        <p className="text-gray-400 leading-relaxed text-sm">
                            Building AI-powered systems for modern businesses. I help growing teams automate operations, save 100+ hours per month, and scale without increasing headcount.
                        </p>
                        <div className="flex gap-3 mt-5">
                            <a href="https://wa.me/923165169330" target="_blank" rel="noopener noreferrer"
                                className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                                <div className="icon-message-circle text-sm"></div>
                            </a>
                            <a href="mailto:ahmedshahwarr@gmail.com"
                                className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                                <div className="icon-mail text-sm"></div>
                            </a>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-sm font-bold text-gray-300 uppercase tracking-widest mb-4">Quick Links</h4>
                        <div className="space-y-2.5">
                            {[
                                { label: 'About', href: '#about' },
                                { label: 'Services', href: '#services' },
                                { label: 'Case Studies', href: '#case-studies' },
                                { label: 'Testimonials', href: '#testimonials' },
                                { label: 'FAQ', href: '#faq' }
                            ].map((l, i) => (
                                <a key={i} href={l.href}
                                    className="block text-gray-400 hover:text-white transition-colors text-sm">
                                    {l.label}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 className="text-sm font-bold text-gray-300 uppercase tracking-widest mb-4">Get in Touch</h4>
                        <div className="space-y-3 text-gray-400 text-sm">
                            <div className="flex items-center gap-2">
                                <div className="icon-mail text-blue-400"></div>
                                ahmedshahwarr@gmail.com
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="icon-phone text-blue-400"></div>
                                +92 316 5169330
                            </div>
                            <div className="mt-4">
                                <a href="https://calendly.com/ahmedshahwarr/consultation-1-hour" target="_blank" rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-blue-900/30 transition-all">
                                    <div className="icon-calendar text-sm"></div>
                                    Book Free Call
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-gray-500 text-sm">
                    <p>© 2026 Ahmed Shahwar. All rights reserved.</p>
                    <p className="flex items-center gap-1">
                        Built with <span className="text-red-400">♥</span> & AI Automation
                    </p>
                </div>
            </div>
        </footer>
    );
}
