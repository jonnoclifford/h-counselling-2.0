"use client";

import Statement from "@/components/sections/Statement";

export default function StatementOne() {
  return (
    <Statement
      bg="lilac"
      shadow="orange"
      subtitle={<>You don&apos;t need to wait until things get worse.<br />If something feels off, that&apos;s reason enough to talk.</>}
    >
      You deserve to feel like<br className="hidden md:block" /> yourself again.
    </Statement>
  );
}
