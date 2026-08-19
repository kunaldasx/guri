import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import FeaturesSection from "./components/Features";
import PropertyDashboard from "./components/PropertyDashboard";
import FaqSection from "./components/Faq";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<Navbar />
			<main className="min-h-screen">
				<Hero />
				<ProblemSection />
				<FeaturesSection />
				<PropertyDashboard />
				<FaqSection />
			</main>
			<Footer />
		</>
	);
}

export default App;
