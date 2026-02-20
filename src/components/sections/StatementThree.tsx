"use client";

import Statement from "@/components/sections/Statement";
import type { StatementConfig } from "@/types/content";

interface StatementThreeProps {
  data: StatementConfig;
}

export default function StatementThree({ data }: StatementThreeProps) {
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
