"use client";

import { ReactLenis } from "@studio-freight/react-lenis";

const LenisProviders = ({ children }: { children: React.ReactNode }) => {
  return <ReactLenis root>{children}</ReactLenis>;
};

export default LenisProviders;
