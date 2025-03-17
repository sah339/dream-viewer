"use client";
import { Textarea } from "~/components/ui/textarea";
import { Label } from "~/components/ui/label";
import { useEffect, useRef, useState } from "react";
import { ResizablePanel } from "~/components/ui/resizable";
import Message from "./message";
import { Button } from "~/components/ui/button";
import { ArrowUp } from "lucide-react";
import { getResponse } from "~/server/queries";

export default function ChatPane() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const [messages, setMessages] = useState([
    <Message text="Hi, what is your message?" align="left" />,
  ]);

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

  // Handle key press in textarea
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // If Enter is pressed without Shift, submit the form
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // Prevent default Enter behavior (new line)
      formRef.current?.requestSubmit();
    }
    // If Shift+Enter, let the default behavior happen (new line)
  };

  return (
    <ResizablePanel
      defaultSize={40}
      minSize={25}
      onResize={adjustHeight}
      order={2}
    >
      <div className="flex h-full flex-col justify-between p-4">
        <div className="flex-1 overflow-y-auto px-2">
          {messages.map((val, ind) => (
            <div key={ind}>{val}</div>
          ))}
        </div>
        <div className="mt-4 w-full rounded-md p-1 outline-neutral-500">
          <Label className="text-neutral-300" htmlFor="message">
            Your Message
          </Label>
          <div>
            <form
              action={() => {
                // Only send if there is text in the box
                if (textareaRef.current?.value) {
                  const text = textareaRef.current?.value;
                  // Add message to the
                  setMessages([
                    ...messages,
                    <Message text={text} align="right" />,
                  ]);
                  if (textareaRef.current) {
                    textareaRef.current.style.height = "auto";
                  }
                }
              }}
              className="flex gap-2"
              ref={formRef}
            >
              <Textarea
                id="message"
                className="mt-2 w-full resize-none overflow-hidden bg-neutral-700 text-neutral-300"
                placeholder="Type your message here. Press Enter to send, Shift+Enter for new line."
                onKeyDown={handleKeyDown}
                ref={textareaRef}
                rows={0}
                onInput={adjustHeight}
                onChange={adjustHeight}
              />

              <Button type="submit" size="icon" className="h-10 w-10 self-end">
                <ArrowUp className="h-5 w-5" />
                <span className="sr-only">Send message</span>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </ResizablePanel>
  );
}
