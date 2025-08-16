import fieldAllyLogo from "@/assets/field-ally-logo.png";

export function Header() {
  return (
    <header className="h-16 bg-background border-b border-border px-6 flex items-center">
      <div className="flex items-center gap-3">
        <img 
          src={fieldAllyLogo} 
          alt="Field Ally Logo" 
          className="w-8 h-8"
        />
        <h1 className="text-xl font-bold text-foreground">Field Ally</h1>
      </div>
    </header>
  );
}