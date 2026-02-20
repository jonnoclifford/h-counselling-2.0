"use client";

import Statement from "@/components/sections/Statement";
import type { StatementConfig } from "@/types/content";

interface StatementTwoProps {
  data: StatementConfig;
}

export default function StatementTwo({ data }: StatementTwoProps) {
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
