"use client";

import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { Send, AlertCircle, Mail, MessageSquare, User } from "lucide-react";
import { sendContactEmail } from "@/src/actions/contact.action";
import { contactSchema, FormErrors } from "@/src/lib/schema";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const handleSubmit = async (
    e: React.SyntheticEvent<HTMLFormElement, SubmitEvent>,
  ) => {
    e.preventDefault();
    setErrors({});

    const formData = Object.fromEntries(new FormData(e.currentTarget));
    const parsed = contactSchema.safeParse(formData);

    if (!parsed.success) {
      setErrors(z.flattenError(parsed.error).fieldErrors);
      return;
    }

    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      const result = await sendContactEmail(parsed.data);

      if (!result.success) {
        toast.error("Unable to send message", {
          description: result.error,
          duration: 5000,
        });
        return;
      }

      toast.success("Message sent successfully!", {
        description: "I'll respond within 24-48 hours.",
        duration: 5000,
      });
    } catch (error) {
      console.log(error);
      toast.error("Failed to send message", {
        description: "Please try again later or contact me directly via email.",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <User className="w-4 h-4 text-foreground/40" />
          <label className="text-sm font-medium">Name</label>
        </div>
        <input
          name="name"
          type="text"
          className={`w-full px-4 py-3 bg-background border rounded-lg focus:outline-none focus:ring-1 transition-all placeholder:text-foreground/30 ${
            errors.name
              ? "border-red-500/50 focus:border-red-500/50 focus:ring-red-500/20"
              : "border-border focus:border-primary/50 focus:ring-primary/20"
          }`}
          placeholder="Enter your full name"
        />
        {errors.name && (
          <p className="text-red-500 text-sm flex items-center gap-1">
            <AlertCircle className="w-4 h-4" />
            {errors.name}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4 text-foreground/40" />
          <label className="text-sm font-medium">Email</label>
        </div>
        <input
          name="email"
          type="email"
          className={`w-full px-4 py-3 bg-background border rounded-lg focus:outline-none focus:ring-1 transition-all placeholder:text-foreground/30 ${
            errors.email
              ? "border-red-500/50 focus:border-red-500/50 focus:ring-red-500/20"
              : "border-border focus:border-primary/50 focus:ring-primary/20"
          }`}
          placeholder="you@example.com"
        />
        {errors.email && (
          <p className="text-red-500 text-sm flex items-center gap-1">
            <AlertCircle className="w-4 h-4" />
            {errors.email}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <MessageSquare className="w-4 h-4 text-foreground/40" />
          <label className="text-sm font-medium">Message</label>
        </div>
        <textarea
          name="message"
          rows={5}
          className={`w-full px-4 py-3 bg-background border rounded-lg focus:outline-none focus:ring-1 transition-all resize-none placeholder:text-foreground/30 ${
            errors.message
              ? "border-red-500/50 focus:border-red-500/50 focus:ring-red-500/20"
              : "border-border focus:border-primary/50 focus:ring-primary/20"
          }`}
          placeholder="Describe your project or inquiry..."
        />
        {errors.message && (
          <p className="text-red-500 text-sm flex items-center gap-1">
            <AlertCircle className="w-4 h-4" />
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-medium transition-all ${
          isSubmitting
            ? "bg-muted text-foreground/50 cursor-not-allowed"
            : "bg-primary text-black hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/10"
        }`}
      >
        {isSubmitting ? (
          <>
            <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
