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
    <Carousel>
      <CarouselContent className="">
        <CarouselItem>
          <Image
            src="/draft_henry.jpg"
            width={200}
            height={200}
            alt="Mynd af kóngnum Henry"
          ></Image>
        </CarouselItem>
        <CarouselItem>
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
  );
}
