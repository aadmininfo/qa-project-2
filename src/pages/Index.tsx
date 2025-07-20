import HeroSection from "@/components/HeroSection";
import QASection from "@/components/QASection";
import CourseSection from "@/components/CourseSection";
import EmploymentSection from "@/components/EmploymentSection";
import PricingSection from "@/components/PricingSection";
import BenefitsSection from "@/components/BenefitsSection";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <Separator className="my-0" />
      <QASection />
      <Separator className="my-0" />
      <CourseSection />
      <Separator className="my-0" />
      <EmploymentSection />
      <Separator className="my-0" />
      <PricingSection />
      <Separator className="my-0" />
      <BenefitsSection />
      <Separator className="my-0" />
      <AboutSection />
      <Separator className="my-0" />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
