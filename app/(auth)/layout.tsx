// app/(site)/layout.tsx
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
}