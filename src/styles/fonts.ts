// This is a Next 13 feature for optimised font loading
import localFont from "next/font/local";

const neueHaasGrotDisp = localFont({
  src: [
    { path: "../../public/fonts/NeueHaasGrotDisp-55Roman.otf", weight: "normal", style: "normal" },
    { path: "../../public/fonts/NeueHaasGrotDisp-65Medium.otf", weight: "bold", style: "bold" },
    { path: "../../public/fonts/NeueHaasGrotText-56Italic.otf", weight: "normal", style: "italic" },
  ],
  variable: "--font-neue-haas-grot",
});

export default neueHaasGrotDisp;
