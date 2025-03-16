import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "~/components/ui/resizable";
import ImagePane from "./_components/image-pane";

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-neutral-800 text-white">
      <div className="h-screen w-screen">
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel className="flex items-center justify-center">
            <ImagePane />
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel className="flex items-center justify-center">
            Two
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </main>
  );
}
