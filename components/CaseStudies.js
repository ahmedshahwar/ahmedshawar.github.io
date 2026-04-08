function CaseStudies() {
    const cases = [
        {
            tag: 'Recruitment',
            title: 'Recruitment Agency Automation',
            client: 'Recruitment Agency',
            challenge: 'Manual candidate screening consuming excessive time and resources',
            solution: 'Built an AI-powered pre-screening pipeline using GoHighLevel to automate candidate qualification',
            result: '90% increase in qualified booked appointments',
            color: '#3B82F6',
            metrics: [
                { label: 'Appointment Increase', value: '90%', icon: 'icon-trending-up' },
                { label: 'Time Saved', value: '75%', icon: 'icon-clock' },
                { label: 'Lead Quality', value: '95%', icon: 'icon-target' }
            ],
            screenshots: [
                'https://app.trickle.so/storage/public/images/usr_1dad778348000001/c4005300-3836-40b4-a28d-d7ccc3c27cb5.png',
                'https://app.trickle.so/storage/public/images/usr_1dad778348000001/1377fccf-ad98-4a2b-a31d-fd0204db05bd.png'
            ]
        },
        {
            tag: 'Debt Relief',
            title: 'Debt Relief Campaign Optimization',
            client: 'Debt Relief Consultancy',
            challenge: 'Low appointment booking rates and inefficient follow-up processes',
            solution: 'Designed GHL outreach and follow-up automation with smart workflows and lead nurturing sequences',
            result: '100%+ increase in appointment bookings without increasing ad spend',
            color: '#8B5CF6',
            metrics: [
                { label: 'Booking Increase', value: '100%+', icon: 'icon-trending-up' },
                { label: 'Ad Spend', value: '$0', icon: 'icon-dollar-sign' },
                { label: 'Response Rate', value: '85%', icon: 'icon-message-circle' }
            ],
            screenshots: [
                'https://app.trickle.so/storage/public/images/usr_1dad778348000001/37ac5e1f-e96b-4bdb-8d3e-293ad5da7a20.png',
                'https://app.trickle.so/storage/public/images/usr_1dad778348000001/cadb9810-2619-4705-a107-d4354481774e.png'
            ]
        },
        {
            tag: 'Multi-Industry',
            title: 'Multi-Industry Agency Snapshots',
            client: 'Multiple Industries',
            challenge: 'Various businesses struggling with manual workload, slow lead response times, and inconsistent follow-up processes',
            solution: 'Delivered complete GoHighLevel agency snapshots with pre-built workflows, automations, and AI integrations across recruitment, dental, medical, home improvement, and automotive sectors',
            result: 'Dramatic improvement in operational efficiency with 80% reduction in manual tasks and near-instant lead response',
            color: '#06B6D4',
            metrics: [
                { label: 'Industries Served', value: '15+', icon: 'icon-briefcase' },
                { label: 'Manual Work Reduction', value: '80%', icon: 'icon-zap' },
                { label: 'Lead Response Time', value: '<2min', icon: 'icon-timer' },
                { label: 'Client Satisfaction', value: '98%', icon: 'icon-heart' },
                { label: 'Follow-up Rate', value: '100%', icon: 'icon-circle-check' },
                { label: 'ROI Increase', value: '250%', icon: 'icon-trending-up' }
            ]
        }
    ];

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); }),
            { threshold: 0.08 }
        );
        document.querySelectorAll('#case-studies .reveal, #case-studies .reveal-left, #case-studies .reveal-right').forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section id="case-studies" data-name="case-studies" data-file="components/CaseStudies.js" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16 reveal">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-cyan-50 rounded-full text-cyan-600 text-sm font-semibold mb-4 tracking-wide uppercase">
                        <span>Proven Results</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900" style={{fontFamily:'var(--font-display)', letterSpacing:'-0.02em'}}>
                        Case Studies
                    </h2>
                    <p className="text-xl text-gray-500">
                        Real results showing how AI automation transforms businesses
                    </p>
                </div>

                <div className="space-y-10 max-w-5xl mx-auto">
                    {cases.map((cs, i) => (
                        <div key={i} className={`case-card bg-white rounded-3xl shadow-md overflow-hidden border border-gray-100 reveal delay-${(i+1)*100}`}>
                            <div className="h-1.5 w-full" style={{background:`linear-gradient(90deg, ${cs.color}, ${cs.color}88)`}}></div>
                            <div className="p-8 md:p-10">
                                <div className="flex items-start gap-4 mb-6">
                                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
                                        style={{background:`${cs.color}15`, color:cs.color}}>
                                        {cs.tag}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold mb-2 text-gray-900" style={{fontFamily:'var(--font-display)'}}>{cs.title}</h3>
                                <p className="font-semibold mb-6" style={{color:cs.color}}>{cs.client}</p>

                                <div className="grid md:grid-cols-3 gap-4 mb-8">
                                    <div className="bg-red-50 rounded-xl p-4">
                                        <p className="text-xs font-bold text-red-500 uppercase tracking-wide mb-1">Challenge</p>
                                        <p className="text-sm text-gray-600 leading-relaxed">{cs.challenge}</p>
                                    </div>
                                    <div className="bg-blue-50 rounded-xl p-4">
                                        <p className="text-xs font-bold text-blue-500 uppercase tracking-wide mb-1">Solution</p>
                                        <p className="text-sm text-gray-600 leading-relaxed">{cs.solution}</p>
                                    </div>
                                    <div className="rounded-xl p-4 text-white" style={{background:`linear-gradient(135deg, ${cs.color}, ${cs.color}bb)`}}>
                                        <p className="text-xs font-bold text-white/70 uppercase tracking-wide mb-1">Result</p>
                                        <p className="text-sm font-semibold leading-relaxed">{cs.result}</p>
                                    </div>
                                </div>

                                <div className={`grid ${cs.metrics.length > 3 ? 'grid-cols-2 md:grid-cols-3' : 'grid-cols-3'} gap-3 mb-6`}>
                                    {cs.metrics.map((m, mi) => (
                                        <div key={mi} className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100">
                                            <div className={`${m.icon} text-xl mb-2`} style={{color:cs.color}}></div>
                                            <div className="text-2xl font-extrabold text-gray-900 metric-number">{m.value}</div>
                                            <div className="text-xs text-gray-500 mt-1">{m.label}</div>
                                        </div>
                                    ))}
                                </div>

                                {cs.screenshots && (
                                    <div>
                                        <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-3">Booked Appointments</h4>
                                        <div className="grid grid-cols-2 gap-4">
                                            {cs.screenshots.map((src, si) => (
                                                <div key={si} className="rounded-xl overflow-hidden shadow border border-gray-200">
                                                    <img src={src} alt={`Proof ${si+1}`} className="w-full h-auto" loading="lazy"/>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
