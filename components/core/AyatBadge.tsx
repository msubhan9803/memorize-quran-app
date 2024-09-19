"use client";
import React from "react";
import { Badge } from "@/components/ui/badge";

interface AyatBadgeProps {
  verse: number;
}

const AyatBadge: React.FC<AyatBadgeProps> = ({ verse }) => {
  return (
    <div className="absolute top-4 right-4">
      <Badge className="rounded-full text-lg bg-yellow-500 hover:bg-yellow-500 text-darkBlue">
        {verse}
      </Badge>
    </div>
  );
};

export default AyatBadge;
