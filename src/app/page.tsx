import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "~/components/ui/resizable"


export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-neutral-800 text-white">
      <div className="w-screen h-screen">
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel className="flex items-center justify-center">One</ResizablePanel>
          <ResizableHandle />
          <ResizablePanel className="flex items-center justify-center">Two</ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </main>
  );
}
