import { NavBar } from "@/components/NavBar";
import { PortfolioCard } from "@/components/porfolio-card";
import { config } from "@/config";

const { portfolio } = config;

export default function Projects() {
  return (

      <div className=" p-4 mt-20 lg:mt-5 mb-20 lg:p-0 justify-center flex gap-8 md:gap-4 row flex-wrap flex-row">
        {portfolio.projects.map((project) => (
          <PortfolioCard
            key={project.title}
            title={project.title}
            description={project.longDescription}
            image={project.image}
            github={project.github}
            siteUrl={project.siteUrl}
          />
        ))}
      </div>

  );
}
