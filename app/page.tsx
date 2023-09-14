import ClientOnly from "./components/ClientOnly";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import HomeClient from "./HomeClient";

export default function Home() {
  return (
    <>
      <Navbar />
      <ClientOnly>
        <HomeClient />
      </ClientOnly>
      <Footer />
    </>
  );
}
