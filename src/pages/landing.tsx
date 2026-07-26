import Navbar from "../components/layout/navbar";
import Hero from "../components/landing/hero";
import Features from "../components/landing/features";
import HowItWorks from "../components/landing/howitworks";
import Templates from "../components/landing/templates";
import CTA from "../components/landing/cta";
import Footer from "../components/layout/footer";

export default function Landing() {
    return (
        <main className="bg-white text-black">
            <Navbar />
            <Hero />
            <Features />
            <HowItWorks />
            <Templates />
            <CTA />
            <Footer />
        </main>
    );
}