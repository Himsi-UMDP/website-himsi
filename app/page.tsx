import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import HomeAbout from "@/components/features/home/About";
import HomeContact from "@/components/features/home/Contact";
import HomeFaq from "@/components/features/home/Faq";
import HomeHero from "@/components/features/home/Hero";
import HomeSpeech from "@/components/features/home/Speech";
import HomeTestimonials from "@/components/features/home/Testimonials";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="bg-himsi-hero">
        <Navbar />
        <HomeHero />
        <HomeAbout />
        <HomeSpeech />
        <HomeTestimonials />
        <HomeFaq />
        <HomeContact />
        <Footer />
      </div>
    </main>
  );
}
