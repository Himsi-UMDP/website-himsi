import Navbar from "@/components/common/Navbar";
import FormAspirasiSection from "@/components/features/aspirasi/Form-Aspirasi-Section";
import Footer from "@/components/common/Footer";

export default function KabinetPage() {
    return (
        <>
            <Navbar />
            <main>
                <FormAspirasiSection />
            </main>
            <Footer />
        </>
    );
}