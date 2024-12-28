import Artistas from "@/components/Artistas";
import Galeria from "@/components/Galeria";
import { Hero } from "@/components/Hero";
import Location from "@/components/Location";
import Padres from "@/components/Padres";
import Regalos from "@/components/Regalos";
import Vestimenta from "@/components/Vestimenta";

export default function Home() {
  return (
    <main>
      <Hero />
      <Location />
      <Padres />
      <Regalos />
      <Vestimenta />
      <Artistas />
      <Galeria />
    </main>
  );
}
