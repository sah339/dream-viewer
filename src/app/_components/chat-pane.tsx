"use client";
import { Textarea } from "~/components/ui/textarea";
import { Label } from "~/components/ui/label";
import { useEffect, useRef } from "react";
import { ResizablePanel } from "~/components/ui/resizable";

export default function ChatPane() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const adjustHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      // Reset height to auto to get the correct scrollHeight
      textarea.style.height = "auto";
      // Set the height to match the content
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  // Adjust height on initial render
  useEffect(() => {
    adjustHeight();

    window.addEventListener("resize", adjustHeight);

    return () => {
      window.removeEventListener("resize", adjustHeight);
    };
  }, []);

  return (
    <ResizablePanel
      defaultSize={40}
      minSize={25}
      onResize={adjustHeight}
      order={2}
    >
      <div className="flex h-full flex-col justify-between p-4">
        <div></div>
        <div className="w-full">
          <Label className="text-neutral-300" htmlFor="message">
            Your Message
          </Label>
          <Textarea
            id="message"
            className="mt-2 w-full resize-none overflow-hidden bg-neutral-700 text-neutral-300 outline-neutral-300"
            placeholder="Type your message here."
            ref={textareaRef}
            rows={0}
            onInput={adjustHeight}
            onChange={adjustHeight}
          />
        </div>
      </div>
    </ResizablePanel>
  );
}
