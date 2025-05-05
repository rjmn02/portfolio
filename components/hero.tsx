import { Badge } from "@/components/ui/badge";
import {Zap } from "lucide-react";
import { SkillsCarousel } from "./skills-carousel";




const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 pt-6 overflow-hidden" id="hero-background">      
      <div className="relative z-[1] text-center max-w-screen-md">
        <Badge className="rounded-full border-none">
          <Zap className="fill-current" />
          Back-end Developer
        </Badge>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold !leading-[1.2] tracking-tight">
          Christian Rhyss R. Jimenez
        </h1>
        <p className="mt-6 text-[17px] md:text-lg">
         Hello! My name is Christian Rhyss Jimenez, I am a 3rd year BS Computer Science Student. Welcome to my portfolio, here you can view my projects and educational background.
        </p>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold !leading-[1.2] tracking-tight">
          Technical Skills
        </h1>
        <SkillsCarousel />
      </div>
    </div>
  );
};

export default Hero;
