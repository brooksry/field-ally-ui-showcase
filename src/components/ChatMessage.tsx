import { cn } from "@/lib/utils";
import { Download, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import fieldAllyLogo from "@/assets/field-ally-logo.png";

interface ChatMessageProps {
  message: {
    id: string;
    type: "user" | "ai" | "special";
    content: string | React.ReactNode;
    timestamp: string;
  };
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.type === "user";
  const isSpecial = message.type === "special";

  return (
    <div className={cn(
      "flex w-full mb-6",
      isUser ? "justify-end" : "justify-start"
    )}>
      <div className={cn(
        "flex gap-3 max-w-4xl",
        isUser ? "flex-row-reverse" : "flex-row"
      )}>
        {!isUser && (
          <div className="flex-shrink-0">
            <img 
              src={fieldAllyLogo} 
              alt="Field Ally" 
              className="w-8 h-8 mt-1"
            />
          </div>
        )}
        
        <div className={cn(
          "px-4 py-3 rounded-lg",
          isUser 
            ? "bg-chat-user text-foreground"
            : isSpecial
              ? "bg-chat-special text-foreground relative"
              : "bg-chat-ai text-foreground"
        )}>
          <div className="prose prose-invert max-w-none">
            {message.content}
          </div>
          
          {isSpecial && (
            <div className="flex gap-2 mt-4 justify-end">
              <Button size="sm" variant="ghost" className="h-8 w-8 p-0 hover:bg-sidebar-accent">
                <Download className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="h-8 w-8 p-0 hover:bg-sidebar-accent">
                <Printer className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}