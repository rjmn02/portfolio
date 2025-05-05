"use client"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


interface Skills {
  image: string,
  title: string,
}

export const SkillsCarousel = () => {
  const skills: Skills[] = [
    {
      image: "/ts.png",
      title: "TypeScript"
    },
    {
      image: "/js.png",
      title: "JavaScript"
    },
    {
      image: "/nextjs.png",
      title: "NextJS"
    },
    {
      image: "/pg.png",
      title: "PostgreSQL"
    },
    {
      image: "/py.png",
      title: "Python"
    },
    {
      image: "/java.png",
      title: "Java"
    },
    {
      image: "/git.png",
      title: "Git/Github"
    },
    {
      image: "/rest.png",
      title: "REST API"
    },
    
  ]

  return (
    <Carousel>
      <CarouselContent>
        {skills.map((skill)=>(
          <CarouselItem className="md:basis-1/3 lg:basis-1/4">
            <Card>
              <CardContent>
                <img src={skill.image} alt="skill_image.png" className="w-28 h-28"/>
              </CardContent>
              <CardFooter className="flex justify-center">
                <p>{skill.title}</p>
              </CardFooter>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}