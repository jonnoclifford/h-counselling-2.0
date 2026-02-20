"use client";

import Statement from "@/components/sections/Statement";
import type { StatementConfig } from "@/types/content";

interface StatementOneProps {
  data: StatementConfig;
}

export default function StatementOne({ data }: StatementOneProps) {
  return (
    <Statement
      bg={data.bg}
      shadow={data.shadow}
      subtitle={data.subtitle}
    >
      {data.text}
    </Statement>
  );
}
