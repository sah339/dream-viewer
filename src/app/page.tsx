import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "~/components/ui/resizable";
import ImagePane from "./_components/image-pane";
import ChatPane from "./_components/chat-pane";

export default function HomePage() {
  return (
    <main className="bg-neutral-800 text-white">
      <div className="h-[100vh] w-full">
        <ResizablePanelGroup
          direction="horizontal"
          className="min-h-[100vh] w-full"
        >
          <ResizablePanel
            className="flex items-center justify-center"
            defaultSize={60}
            minSize={25}
            order={2}
          >
            <ImagePane />
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ChatPane />
        </ResizablePanelGroup>
      </div>
    </main>
  );
}
