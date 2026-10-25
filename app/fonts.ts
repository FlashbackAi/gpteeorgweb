import { Inter, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";

// The site's fonts, shared by the marketing layout and the docs layout (each
// is a root layout of its own; see app/(site) and app/(docs)).

export const nevera = localFont({
  src: "../public/fonts/Nevera-Regular.otf",
  variable: "--font-nevera",
  display: "swap",
  weight: "400",
});

export const glitchGoblin = localFont({
  src: "../public/fonts/GlitchGoblin-2O87v.ttf",
  variable: "--font-glitch",
  display: "swap",
  weight: "400",
});

export const hydrogen = localFont({
  src: "../public/fonts/hydrogen.ttf",
  variable: "--font-hydrogen",
  display: "swap",
  weight: "400",
});

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

/** Every font variable, for a root layout's <html> className. */
export const fontVariables = `${nevera.variable} ${glitchGoblin.variable} ${hydrogen.variable} ${inter.variable} ${jetbrainsMono.variable}`;
