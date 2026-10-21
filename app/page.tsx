import { About } from "@/components/sections/about";
import { Collection } from "@/components/sections/collection";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { Notify } from "@/components/sections/notify";
import { Philosophy } from "@/components/sections/philosophy";
import { Trust } from "@/components/sections/trust";
import { BackToTop } from "@/components/chrome/back-to-top";
import { StickyCta } from "@/components/chrome/sticky-cta";
import { Navbar } from "@/components/navbar";
import { ScrollProgress } from "@/components/scroll-progress";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="fixed top-[-100px] left-4 z-[300] rounded-full bg-moss px-[22px] py-3 text-sm font-semibold text-primary-foreground transition-[top] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] focus:top-4"
      >
        Skip to main content
      </a>
      <ScrollProgress />
      <Navbar />
      <main id="main-content">
        <Hero />
        <Trust />
        <Philosophy />
        <Collection />
        <Notify />
        <About />
        <Contact />
      </main>
      <Footer />
      <StickyCta />
      <BackToTop />
    </>
  );
}
