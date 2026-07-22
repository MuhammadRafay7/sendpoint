"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

/**
 * Frontend-only newsletter capture. Validates the email client-side and shows
 * a success state — wire up to your ESP / API route when a backend exists.
 */
export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    setDone(true);
    setEmail("");
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4" noValidate={false}>
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      {done ? (
        <p
          role="status"
          className="flex items-center gap-2 rounded-full bg-brand-600/15 px-4 py-3 text-sm font-medium text-brand-200"
        >
          <Check className="size-4" />
          You&apos;re on the list — watch your inbox.
        </p>
      ) : (
        <div className="flex flex-col gap-2 sm:flex-row">
          <Input
            id="newsletter-email"
            type="email"
            required
            autoComplete="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-white/15 bg-white/5 text-white placeholder:text-ink-400 focus-visible:ring-brand-500"
          />
          <Button type="submit" aria-label="Subscribe" className="shrink-0">
            Subscribe
            <ArrowRight className="size-4" />
          </Button>
        </div>
      )}
    </form>
  );
}
