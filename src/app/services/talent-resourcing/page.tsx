import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <section className="py-20 px-10 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 capitalize"></h1>
        <p>This is the service page for .</p>
      </section>
      <Footer />
    </main>
  );
}
