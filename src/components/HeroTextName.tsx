import { cn } from "@/lib/utils";
import { Pattaya, Racing_Sans_One } from "next/font/google";
const pattaya = Pattaya({ weight: "400", subsets: ["latin"] });
const racingSansOne = Racing_Sans_One({
  weight: "400",
  subsets: ["latin"],
});

export const HeroTextName = () => {
  return (
    <div>
      <p className={cn(racingSansOne.className, "text-center text-3xl")}>
        Hi my name Is
      </p>
      <h1
        className={cn(
          pattaya.className,
          "text-center text-6xl md:text-9xl bg-gradient-to-r from-indigo-500 via-violet-700 to-purple-900 bg-clip-text text-transparent"
        )}
      >
        Alexander Little
      </h1>

      <p className="text-center mt-5 text-xl md:w-[500px] mx-auto">
        Im a software developer specializing in making exceptional digital
        experiences that scale.
      </p>
    </div>
  );
};
