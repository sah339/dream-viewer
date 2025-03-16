import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";

const imageData = [
  "/GD/it7800-0.png",
  "/GD/it7800-1.png",
  "/GD/it7800-2.png",
  "/GD/it7800-3.png",
  "/GD/it7800-4.png",
  "/GD/it10000-0.png",
  "/GD/it10000-1.png",
  "/GD/it10000-2.png",
  "/GD/it10000-3.png",
  "/GD/it10000-4.png",
];

export default function ImagePane() {
  return (
    <div className="relative m-auto">
      <Carousel className="row-span-2 mx-auto flex max-w-sm flex-col">
        <CarouselContent className="flex">
          {imageData.map((image, id) => {
            return (
              <CarouselItem key={id}>
                <Image src={image} alt={image} height={2048} width={2048} />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <div className="flex flex-row items-center justify-center p-4">
          <CarouselPrevious className="-absolute m-4 text-neutral-700" />
          <CarouselNext className="-absolute m-4 text-neutral-700" />
        </div>
      </Carousel>
    </div>
  );
}
