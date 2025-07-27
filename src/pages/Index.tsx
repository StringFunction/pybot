import { HeroSection } from "@/components/ui/hero-section";
import { ServicoSection } from "@/components/ui/servicos-section";
import { BeneficiosSection } from "@/components/ui/beneficios-section";
import { ContatoSection } from "@/components/ui/contato-section";
import { EmpresaSection } from "@/components/ui/empresa-section";

const Index = () => {
  return (
    <div className="min-h-screen font-boa">
      <HeroSection />
      <ServicoSection />
      <BeneficiosSection />
      <ContatoSection />
    </div>
  );
};

export default Index;