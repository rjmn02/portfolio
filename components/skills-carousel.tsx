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
  CardFooter,
} from "@/components/ui/card"

import Image from "next/image"

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
        {skills.map((skill: Skills) => (
          <CarouselItem key={skill.title} className="basis-1/4">
            <Card>
              <CardContent>
              <Image
                src={skill.image}
                width={500}
                height={500}
                alt="Picture of the author"
              />
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