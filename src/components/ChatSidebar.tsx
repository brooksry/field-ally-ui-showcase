import { cn } from "@/lib/utils";

const chatSessions = [
  { id: 1, title: "2025 4Runner - Water Leak", isActive: true },
  { id: 2, title: "2024 Tacoma - Window Whistle", isActive: false },
  { id: 3, title: "2025 Ram 1500 - Infotainment Reboot", isActive: false },
  { id: 4, title: "2023 F-150 - Engine Knock", isActive: false },
  { id: 5, title: "2024 Silverado - AC Issues", isActive: false },
  { id: 6, title: "2025 Camry - Brake Squeal", isActive: false },
];

export function ChatSidebar() {
  return (
    <aside className="w-80 bg-sidebar border-r border-sidebar-border p-4">
      <h2 className="text-lg font-semibold text-sidebar-foreground mb-4">
        Chat History
      </h2>
      <div className="space-y-2">
        {chatSessions.map((session) => (
          <div
            key={session.id}
            className={cn(
              "p-3 rounded-lg cursor-pointer transition-colors",
              "hover:bg-sidebar-accent",
              session.isActive
                ? "bg-sidebar-accent text-sidebar-accent-foreground"
                : "text-sidebar-foreground"
            )}
          >
            <div className="text-sm font-medium truncate">
              {session.title}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}