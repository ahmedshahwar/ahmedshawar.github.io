function FAQ() {
    const [openIndex, setOpenIndex] = React.useState(null);

    const faqs = [
        {
            q: 'How long does it take to set up an AI automation system?',
            a: 'Most projects are live within 1–2 weeks. Simple automations (e.g., lead follow-up sequences) can be done in 3–5 days. More complex builds involving custom AI voice agents or multi-platform integrations typically take 2–3 weeks.'
        },
        {
            q: 'Do I need technical knowledge to use the systems you build?',
            a: 'Not at all. Everything is built to be easy to manage. I provide full handoff documentation, a walkthrough session, and ongoing support. Most clients never have to touch the backend themselves.'
        },
        {
            q: 'Which platforms do you work with?',
            a: 'My primary stack includes GoHighLevel, Zapier, Make.com, n8n, Twilio, Vapi, Retell AI, Assistable.ai, and OpenAI. I\'ve also integrated with Supabase, AssemblyAI, and dozens of other tools depending on client needs.'
        },
        {
            q: 'What industries have you worked with?',
            a: 'I\'ve built systems for 15+ industries including recruitment, debt relief, medical practices, auto service centers, home improvement, dental, real estate, and more. Most automation principles transfer across industries — the specifics just need customization.'
        },
        {
            q: 'Do you offer ongoing support or maintenance?',
            a: 'Yes. I offer retainer packages for clients who want ongoing monitoring, updates, and expansion of their automation systems. Monthly retainers are available and can be discussed during our consultation.'
        },
        {
            q: 'What does a typical engagement look like?',
            a: 'It starts with a free discovery call to understand your business and bottlenecks. Then I map out an automation strategy, get your approval, and build it out. After delivery, I do a full walkthrough and provide 30 days of post-launch support.'
        }
    ];

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); }),
            { threshold: 0.1 }
        );
        document.querySelectorAll('#faq .reveal').forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section id="faq" data-name="faq" data-file="components/FAQ.js" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-14 reveal">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-50 rounded-full text-indigo-600 text-sm font-semibold mb-4 tracking-wide uppercase">
                            <span>FAQ</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900" style={{fontFamily:'var(--font-display)', letterSpacing:'-0.02em'}}>
                            Common Questions
                        </h2>
                        <p className="text-xl text-gray-500">Everything you need to know before getting started</p>
                    </div>

                    <div className="space-y-3">
                        {faqs.map((faq, i) => (
                            <div key={i} className={`reveal delay-${(i % 3 + 1) * 100} bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:border-blue-100 transition-colors`}>
                                <button
                                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                    className="w-full flex items-center justify-between p-6 text-left group">
                                    <span className="font-semibold text-gray-900 pr-4 group-hover:text-blue-600 transition-colors"
                                        style={{fontFamily:'var(--font-display)'}}>
                                        {faq.q}
                                    </span>
                                    <div className={`icon-${openIndex === i ? 'minus' : 'plus'} text-xl flex-shrink-0 transition-all ${openIndex === i ? 'text-blue-600' : 'text-gray-400'}`}></div>
                                </button>
                                <div className={`faq-answer ${openIndex === i ? 'open' : ''}`}>
                                    <div className="px-6 pb-6 text-gray-500 leading-relaxed">
                                        {faq.a}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
