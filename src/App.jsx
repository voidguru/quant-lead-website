import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import AboutSection from "./components/AboutSection"
import ExpertiseSection from "./components/ExpertiseSection"
import ProjectsSection from "./components/ProjectsSection"
import InsightsSection from "./components/InsightsSection"
import ContactSection from "./components/ContactSection"
import Footer from "./components/Footer"

export default function App() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center w-full overflow-x-hidden">
        <HeroSection />
        <AboutSection />
        <ExpertiseSection />
        <ProjectsSection />
        <InsightsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
