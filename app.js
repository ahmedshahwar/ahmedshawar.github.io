function App() {
    return (
        <div data-name="app" data-file="app.js">
            <Header />
            <main>
                <Hero />
                <ProofStrip />
                <About />
                <Services />
                <HowItWorks />
                <Features />
                <CaseStudies />
                <Testimonials />
                <FAQ />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error('Error caught by boundary:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <div>Something went wrong.</div>;
        }
        return this.props.children;
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ErrorBoundary>
        <App />
    </ErrorBoundary>
);
