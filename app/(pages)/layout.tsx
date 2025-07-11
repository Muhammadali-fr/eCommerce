
// components 
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PagesLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col justify-between">
            <Header />
            {children}
            <Footer />
        </div>
    )
}