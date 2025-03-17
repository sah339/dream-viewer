import { cn } from "~/lib/utils";

interface MessageProps {
  text: string;
  align: "left" | "right";
  className?: string;
}

export default function Message({ text, align, className }: MessageProps) {
  return (
    <div
      className={cn(
        "mb-4 flex w-full",
        align === "right" ? "justify-end" : "justify-start",
      )}
    >
      <div
        className={cn(
          "max-w-[80%] rounded-lg px-4 py-2",
          align === "right"
            ? "rounded-tr-none bg-primary text-primary-foreground"
            : "rounded-tl-none bg-muted text-neutral-800",
          className,
        )}
      >
        {text}
      </div>
    </div>
  );
}
