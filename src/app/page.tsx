import { HeroTextName } from "@/components/HeroTextName";
import { NavBar } from "@/components/NavBar";
import { SocialIconsBar } from "@/components/SocialIconsBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-center items-center">
      <HeroTextName />
      <SocialIconsBar />
    </main>
  );
}
