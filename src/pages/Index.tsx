import HeroSection from "@/components/HeroSection";
import PersonalDetails from "@/components/PersonalDetails";
import BusinessDetails from "@/components/BusinessDetails";
import FamilyDetails from "@/components/FamilyDetails";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <PersonalDetails />
      <BusinessDetails />
      <FamilyDetails />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
