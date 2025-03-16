import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";

const imageData = [""];

export default function ImagePane() {
  return (
    <Carousel>
      <CarouselContent>
        <CarouselItem>1</CarouselItem>
        <CarouselItem>2</CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
