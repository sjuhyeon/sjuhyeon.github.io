import Image from "next/image";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="py-10 px-6">
        <Hero />
      </section>
    </main>
  );
}
