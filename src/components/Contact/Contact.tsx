"use client";

import { Terminal as TerminalIcon } from "lucide-react";
import data from "@/src/data/portfolio.json";
import ContactForm from "./ContactForm";
import InfoPanel from "./InfoPanel";

export function ContactTerminal() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <TerminalIcon className="w-12 h-12 mx-auto mb-4 text-primary" />
          <h2 className="text-3xl font-light mb-4">{data.contact.title}</h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            {data.contact.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Form (2/3 width) */}
          <div className="lg:col-span-2">
            <div className="bg-card border border-border rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="text-sm font-medium text-foreground/60 ml-2">
                  new-message
                </span>
              </div>

              <ContactForm />
            </div>
          </div>

          <InfoPanel />
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 text-sm text-foreground/50">
            <div className="w-1 h-1 rounded-full bg-foreground/30" />
            All messages are end-to-end encrypted
            <div className="w-1 h-1 rounded-full bg-foreground/30" />
          </div>
        </div>
      </div>
    </section>
  );
}
