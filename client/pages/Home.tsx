import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Statistics from "@/components/Statistics";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="pt-16 md:pt-20">
      <Hero />
      <Features />
      <Statistics />
      <Testimonials />
    </main>
  );
}
