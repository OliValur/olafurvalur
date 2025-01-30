import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
export default function CarouselComponent() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold">Ólafur í hnotskurn</h1>
      <div>
        <Carousel className="w-full md:w-1/2 mx-auto">
          <CarouselContent className="flex  text-center">
            <CarouselItem className="basis-full items-center justify-center">
              <p>Jólsveinn</p>
              <Image
                src="/draft_henry.jpg"
                width={200}
                height={200}
                alt="Mynd af kóngnum Henry"
              ></Image>
            </CarouselItem>
            <CarouselItem className="basis-full items-center justify-center">
              <Image
                src="/drsantastein.webp"
                width={200}
                height={200}
                alt="Mynd af DrSantastein"
              ></Image>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
