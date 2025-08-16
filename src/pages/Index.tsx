import { Header } from "@/components/Header";
import { ChatSidebar } from "@/components/ChatSidebar";
import { ChatPanel } from "@/components/ChatPanel";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground dark">
      <Header />
      <div className="flex h-[calc(100vh-4rem)]">
        <ChatSidebar />
        <ChatPanel />
      </div>
    </div>
  );
};

export default Index;
