"use client";
import { cn } from "@/lib/utils";
import React from "react";

interface AyatBadgeProps {
  verse: number;
  totalVerse: number;
}

const AyatBadge: React.FC<AyatBadgeProps> = ({ verse, totalVerse }) => {
  return (
    <div
      className={cn(
        "text-yellow-300 text-3xl lg:text-3xl text-center",
        "py-2 px-4 rounded",
        "border-2 border-white"
      )}
    >
      {verse} <span className="text-white">/</span>{" "}
      <span className="text-teal-400">{totalVerse}</span>
    </div>
  );
};

export default AyatBadge;
