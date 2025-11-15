import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";
import { FeatureCards } from "./components/FeatureCards";
import { PricingSection } from "./components/PricingSection";
import { ValueProposition } from "./components/ValueProposition";
import { SuperpowersSection } from "./components/SuperpowersSection";
import { ControlCenterSection } from "./components/ControlCenterSection";
import { MissionSection } from "./components/MissionSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { EndBlock } from "./components/EndBlock";

const Section = ({ children, id }: { children: React.ReactNode; id?: string }) => (
  <div id={id} className="py-24 sm:py-32">{children}</div>
);

const Background = () => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden">
    <div 
      className="absolute -top-40 -left-40 w-96 h-96 rounded-full opacity-30"
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        filter: 'blur(100px)'
      }}
    />
    <div 
      className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full opacity-20"
      style={{
        background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        filter: 'blur(120px)'
      }}
    />
    <div 
      className="absolute bottom-0 left-1/3 w-96 h-96 rounded-full opacity-25"
      style={{
        background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        filter: 'blur(110px)'
      }}
    />
  </div>
);

const sections = [
  { id: "product", component: <Hero /> },
  { component: <ValueProposition /> },
  { component: <SuperpowersSection /> },
  { component: <ControlCenterSection /> },
  { id: "features", component: <FeatureCards /> },
  { id: "about", component: <MissionSection /> },
  { component: <TestimonialsSection /> },
  { id: "pricing", component: <PricingSection /> },
  { id: "contact", component: <EndBlock /> },
];

export default function App() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Background />
      <Nav />
      <main className="relative z-10">
        {sections.map((section, index) => (
          <Section key={index} id={section.id}>
            {section.component}
          </Section>
        ))}
      </main>
    </div>
  );
}
