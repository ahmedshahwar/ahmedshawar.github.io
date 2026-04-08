function Header() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [scrolled, setScrolled] = React.useState(false);

    React.useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    return (
        <header data-name="header" data-file="components/Header.js"
            className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 shadow-md backdrop-blur-md' : 'bg-white/90 backdrop-blur-sm shadow-sm'}`}
            style={{borderBottom: scrolled ? '1px solid rgba(0,0,0,0.06)' : 'none'}}>
            <nav className="container mx-auto px-6 py-3">
                <div className="flex items-center justify-between">
                    <div className="text-xl font-bold" style={{fontFamily:'var(--font-display)'}}>
                        <span className="gradient-text">Ahmed</span>
                        <span className="text-gray-900"> Shahwar</span>
                    </div>

                    <div className="hidden md:flex items-center space-x-6">
                        {[
                            {id:'about', label:'About'},
                            {id:'services', label:'Services'},
                            {id:'how-it-works', label:'How It Works'},
                            {id:'case-studies', label:'Case Studies'},
                            {id:'testimonials', label:'Testimonials'}
                        ].map(item => (
                            <button key={item.id} onClick={() => scrollToSection(item.id)}
                                className="text-gray-500 hover:text-blue-600 transition-colors font-medium text-sm tracking-wide">
                                {item.label}
                            </button>
                        ))}
                        <a href="https://calendly.com/ahmedshahwarr/consultation-1-hour" target="_blank" rel="noopener noreferrer"
                            className="btn-glow bg-gradient-to-r from-blue-500 to-purple-600 text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:shadow-lg hover:shadow-blue-200 transition-all flex items-center gap-2 whitespace-nowrap">
                            <div className="icon-calendar text-sm"></div>
                            Book a Call
                        </a>
                    </div>

                    <div className="md:hidden flex items-center gap-3">
                        <a href="https://calendly.com/ahmedshahwarr/consultation-1-hour" target="_blank" rel="noopener noreferrer"
                            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full font-semibold text-xs">
                            Book Call
                        </a>
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700">
                            <div className={"icon-" + (isMenuOpen ? 'x' : 'menu') + " text-2xl"}></div>
                        </button>
                    </div>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 space-y-3 border-t border-gray-100 pt-4">
                        {[
                            {id:'about', label:'About'},
                            {id:'services', label:'Services'},
                            {id:'how-it-works', label:'How It Works'},
                            {id:'case-studies', label:'Case Studies'},
                            {id:'testimonials', label:'Testimonials'}
                        ].map(item => (
                            <button key={item.id} onClick={() => scrollToSection(item.id)}
                                className="block w-full text-left py-2 text-gray-500 hover:text-blue-600 transition-colors">
                                {item.label}
                            </button>
                        ))}
                        <a href="https://calendly.com/ahmedshahwarr/consultation-1-hour" target="_blank" rel="noopener noreferrer"
                            className="block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2.5 rounded-full text-center font-semibold">
                            Book a Free Call
                        </a>
                    </div>
                )}
            </nav>
        </header>
    );
}
