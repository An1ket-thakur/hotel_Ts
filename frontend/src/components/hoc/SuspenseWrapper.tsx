import React from "react";

export default function SuspenseWrapper({ children }: { children: React.ReactNode }) {
  return <React.Suspense fallback={<div>Loading...</div>}>{children}</React.Suspense>;
}
