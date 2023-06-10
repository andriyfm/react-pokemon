import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#223150] flex flex-col h-screen">
      <Header />
      <main className="flex-1 space-y-5">{children}</main>
      <Footer />
    </div>
  );
}
