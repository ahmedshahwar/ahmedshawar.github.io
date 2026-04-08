function Testimonials() {
    const testimonials = [
        {
            name: 'Tony Lopez',
            company: 'Fractional Sales',
            industry: 'Recruitment Agency',
            aiAgent: 'Luna',
            photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&crop=face',
            content: 'Honestly, I was skeptical at first about AI handling our recruiting calls. But Ahmed proved me wrong. The system he built doesn\'t just screen candidates - it actually has natural conversations and asks the right questions. We went from spending 3–4 hours daily on screening to basically zero. Our recruiters can finally focus on what they do best: closing placements.',
            rating: 5
        },
        {
            name: 'Eric Earl',
            company: 'Thrive',
            industry: 'Debt Relief Consultancy',
            aiAgent: 'Amy',
            photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=face',
            content: 'We were stuck. Ad costs kept climbing but our booking rate stayed flat. Ahmed came in and within two weeks had our entire follow-up system automated. Now every single lead gets immediate response and consistent follow-up. We literally doubled our appointments without changing anything else. Best investment we\'ve made this year.',
            rating: 5
        },
        {
            name: 'Dr. Bharat Jain',
            company: 'Procare Medical Group',
            industry: 'Medical Consultancy',
            aiAgent: 'Zoey',
            photo: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=120&h=120&fit=crop&crop=face',
            content: 'What impressed me most was how quickly Ahmed understood our needs. He didn\'t just drop in some generic template - he actually customized everything for our practice flow. Our no-show rate dropped by almost 40% because patients get automatic reminders that actually make sense. Plus, our front desk team loves the breathing room.',
            rating: 5
        },
        {
            name: 'Tony Marulanda',
            company: 'Solo Motor Sports',
            industry: 'Auto Service Center',
            aiAgent: 'Luna',
            photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face',
            content: 'Running an auto shop means constant calls about appointments, quotes, availability... it was chaos. Ahmed set up this AI system that handles 80% of our inbound calls automatically. It books appointments, answers basic questions, even sends estimates. My guys can actually work on cars now instead of being stuck on the phone all day.',
            rating: 5
        },
        {
            name: 'Barry Greenberg',
            company: 'The Greener Institute',
            industry: 'Medical Consultancy',
            aiAgent: 'Charli',
            photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=120&h=120&fit=crop&crop=face',
            content: 'I\'ve worked with several automation consultants before, but Ahmed is different. He actually takes time to understand your business first. The system he built for us didn\'t just automate tasks - it improved our entire patient journey. Response times went from hours to minutes, and our conversion rate jumped significantly. Worth every penny.',
            rating: 5
        },
        {
            name: 'Brian Espinoza',
            company: 'TruBlue of North Idaho',
            industry: 'Home Improvement',
            aiAgent: 'Kate',
            photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=120&h=120&fit=crop&crop=face',
            content: 'We were losing leads left and right because we couldn\'t follow up fast enough. Ahmed implemented a complete automation system that catches leads, qualifies them, and books estimates automatically. Our close rate on booked estimates is up 30% just because we\'re getting to qualified leads while they\'re still hot. Game changer for our business.',
            rating: 5
        }
    ];

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); }),
            { threshold: 0.08 }
        );
        document.querySelectorAll('#testimonials .reveal, #testimonials .reveal-scale').forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section id="testimonials" data-name="testimonials" data-file="components/Testimonials.js" className="py-24 bg-gray-50/50">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16 reveal">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-yellow-50 rounded-full text-yellow-600 text-sm font-semibold mb-4 tracking-wide uppercase">
                        <span>Client Stories</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900" style={{fontFamily:'var(--font-display)', letterSpacing:'-0.02em'}}>
                        What Clients Say
                    </h2>
                    <p className="text-xl text-gray-500">
                        Real businesses that transformed their operations with AI automation
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {testimonials.map((t, i) => (
                        <div key={i}
                            className={`testimonial-card bg-white p-6 rounded-2xl shadow-sm border border-gray-100 reveal delay-${(i % 3 + 1) * 100}`}>
                            {/* Stars */}
                            <div className="flex gap-0.5 mb-4">
                                {[...Array(5)].map((_, si) => (
                                    <div key={si} className={`icon-star ${si < t.rating ? 'text-yellow-400' : 'text-gray-200'} text-base`}></div>
                                ))}
                            </div>

                            {/* Quote */}
                            <p className="text-gray-600 mb-6 leading-relaxed text-sm italic">
                                "{t.content}"
                            </p>

                            {/* AI Agent badge */}
                            <div className="ai-agent-badge mb-4">
                                <div className="ai-agent-dot"></div>
                                Powered by AI Agent: {t.aiAgent}
                            </div>

                            {/* Author */}
                            <div className="border-t border-gray-100 pt-4 flex items-center gap-3">
                                <div className="relative flex-shrink-0">
                                    <img
                                        src={t.photo}
                                        alt={t.name}
                                        className="w-12 h-12 rounded-full object-cover border-2 border-blue-100"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            const initials = t.name.split(' ').map(n => n[0]).join('');
                                            const div = document.createElement('div');
                                            div.className = 'w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0';
                                            div.style.background = 'linear-gradient(135deg, #3B82F6, #8B5CF6)';
                                            div.textContent = initials;
                                            e.target.parentNode.appendChild(div);
                                        }}
                                    />
                                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                                    <p className="text-xs font-semibold text-blue-600">{t.company}</p>
                                    <p className="text-xs text-gray-400">{t.industry}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Trust strip */}
                <div className="mt-16 text-center reveal">
                    <p className="text-gray-400 text-sm mb-6 font-medium tracking-wide uppercase">Trusted across industries</p>
                    <div className="flex flex-wrap justify-center gap-3">
                        {['Recruitment', 'Debt Relief', 'Medical', 'Auto Service', 'Home Improvement', 'Real Estate', 'Dental', 'Finance'].map((ind, i) => (
                            <span key={i} className="px-4 py-1.5 bg-white border border-gray-200 text-gray-500 text-sm rounded-full font-medium">
                                {ind}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
