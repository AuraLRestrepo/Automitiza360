import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogosStrip from './components/LogosStrip';
import ProblemSection from './components/ProblemSection';
import BenefitsSection from './components/BenefitsSection';
import HowItWorks from './components/HowItWorks';
import UseCases from './components/UseCases';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogosStrip />
        <ProblemSection />
        <BenefitsSection />
        <HowItWorks />
        <UseCases />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
