// app/fonts/fonts.ts

import {
  Bodoni_Moda,
  Montserrat,
  Roboto,
  Open_Sans,
  Cinzel,
  Poppins,
  Miss_Fajardose,
  Luxurious_Script,
} from "next/font/google";

export const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal"],
});

export const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  style: ["italic", "normal"],
});

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const openSans = Open_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const miss_fajordose = Miss_Fajardose({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
  display: "swap",
});

export const luxurious_script = Luxurious_Script({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
  display: "swap",
});

export const fonts = {
  bodoni: bodoni.className,
  cinzel: cinzel.className,
  montserrat: montserrat.className,
  roboto: roboto.className,
  openSans: openSans.className,
  poppins: poppins.className,
  miss_fajordose: miss_fajordose.className,
  luxurious_script: luxurious_script.className,
};
