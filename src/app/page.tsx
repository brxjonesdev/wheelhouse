import WheelhouseCTA from "@/shared/landing/wheelhouse-cta";
import WheelhouseFeatures from "@/shared/landing/wheelhouse-features";
import WheelhouseHero from "@/shared/landing/wheelhouse-hero";
import WheelhouseMission from "@/shared/landing/wheelhouse-mission";

export default function Landing() {
  return(
  <main className="font-savate subpixel-antialiased flex-2">
    <section className="max-w-6xl mx-auto px-4 ">
      <WheelhouseHero />
      <WheelhouseMission />
      <WheelhouseFeatures />
      <WheelhouseCTA />
    </section>

  </main>
  )
}
