"use client";
import {
  useSelectedLayoutSegment,
  useSelectedLayoutSegments,
} from "next/navigation";

export default function TestSegment() {
  const segment = useSelectedLayoutSegment();
  const segments = useSelectedLayoutSegments();

  return (
    <ul>
      {segments.map((segment) => {
        return <li>{segment}</li>;
      })}
    </ul>
  );
}
