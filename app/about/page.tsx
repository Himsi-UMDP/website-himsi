
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Logo from "@/components/features/about/Logo";
import HeroAbout from "@/components/features/about/Hero-About";
import Profile from "@/components/features/about/Profile";
import Dokumentasi from "@/components/features/about/Dokumentasi";
import VisiMisi from "@/components/features/about/Visi-Misi";

export default function AboutPage() {
    return (
      <>
      <Navbar />
      <main>
        <Logo />
        <HeroAbout />
        <Profile />
        <VisiMisi />
        <Dokumentasi />
      </main>
      <Footer />
      </>
    );
}
