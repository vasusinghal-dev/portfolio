import { useState } from "react";
import { toast } from "sonner";
import { Mail, Globe } from "lucide-react";
import data from "@/src/data/portfolio.json";

export default function InfoPanel() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(data.contact.email);
    setCopied(true);
    toast.success("Email copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="space-y-6">
      <div className="bg-card border border-border rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 bg-primary/10 rounded-lg">
            <Mail className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-medium">Communication</h3>
            <p className="text-sm text-foreground/60">Preferred channels</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="p-4 bg-background/50 border border-border rounded-xl">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Primary Email</span>
              <button
                onClick={copyEmail}
                className="text-xs px-3 py-1.5 bg-muted hover:bg-border rounded-lg transition-colors"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
            <div className="font-mono text-sm text-foreground/80 break-all">
              {data.contact.email}
            </div>
            <div className="mt-2 text-xs text-foreground/40">
              {data.contact.note}
            </div>
          </div>

          <div className="p-4 bg-background/50 border border-border rounded-xl">
            <div className="flex items-center gap-3 mb-3">
              <Globe className="w-4 h-4 text-foreground/40" />
              <span className="text-sm font-medium">Security</span>
            </div>
            <div className="text-sm text-foreground/80">
              All messages are{" "}
              <span className="text-primary">end-to-end encrypted</span>
            </div>
            <div className="mt-2 text-xs text-foreground/40">
              Your data is protected and never shared
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
