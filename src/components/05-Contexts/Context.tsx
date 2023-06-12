import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  fetchData,
  isDark,
  isHsl,
  hexToHsl,
  hslToHex,
  hexToRgb,
  getContrast,
  getLevel,
  updatePath,
} from "../Utils";
import { doc, updateDoc } from "firebase/firestore";
import { auth, db } from "../../firebaseConfig";

export interface ColourContrastContextTypes {
  fonts: CC.FontsProps[];
  colors: CC.ColorsProps[];
  background: number[];
  foreground: number[];
  contrast: number;
  level: CC.LevelsProps;
  colorState: string;
  handleContrastCheck: (value: number[], name: string) => void;
  reverseColors: () => void;
  saveColors: () => void;
  setColors: React.Dispatch<React.SetStateAction<CC.ColorsProps[]>>;
  updateView: (bg: number[], fg: number[]) => void;
  updatePath: (bg: number[], fg: number[]) => void;
}

const ColourContrastContext = createContext<
  ColourContrastContextTypes | undefined
>(undefined);

const ColourContrastProvider = (props: { children: React.ReactNode }) => {
  const localColors = JSON.parse(localStorage.getItem("colors") as string);
  const localFonts = JSON.parse(localStorage.getItem("fonts") as string);
  const levels = { AALarge: "Pass", AA: "Pass", AAALarge: "Pass", AAA: "Pass" };
  const updateViewRef = useRef(updateView);

  const [fonts, setfonts] = useState<CC.FontsProps[]>(localFonts || []);
  const [colors, setColors] = useState<CC.ColorsProps[]>(localColors || []);
  const [background, setBackground] = useState<number[]>([0, 0, 1]);
  const [foreground, setForeground] = useState<number[]>([240, 0.07, 0.11]);
  const [contrast, setContrast] = useState<number>(17.17);
  const [level, setLevel] = useState<CC.LevelsProps>(levels);
  const colorState: string =
    contrast < 3
      ? isDark(background)
        ? "#ffffff"
        : "#1a1a1e"
      : hslToHex(foreground);

  function checkContrast(bg: string, fg: string) {
    const backgroundRgb = hexToRgb(bg);
    const foregroundRgb = hexToRgb(fg);
    const newContrast = getContrast(
      backgroundRgb as number[],
      foregroundRgb as number[]
    );
    const newLevel = getLevel(newContrast);

    setContrast(newContrast);
    setLevel(newLevel);
  }

  function handleContrastCheck(value: number[], name: string) {
    const bg = name === "background" ? hslToHex(value) : hslToHex(background);
    const fg = name === "foreground" ? hslToHex(value) : hslToHex(foreground);

    name === "background" ? setBackground(value) : setForeground(value);

    document.body.style.setProperty(`--${name}`, hslToHex(value));

    checkContrast(bg, fg);

    updatePath(hexToHsl(bg) as number[], hexToHsl(fg) as number[]);
  }

  function storeFontsData({ items }: { items: CC.GoogleFontsProps[] }) {
    const families = items.slice(0, 50);
    const fonts: CC.FontsProps[] = [];

    families.forEach((item) => {
      const { family, variants } = item;
      const weight = variants.sort();
      const variant = weight[weight.length - 1];

      fonts.push({ family, variant });
    });

    localStorage.setItem("fonts", JSON.stringify(families));
    setfonts(fonts);
  }

  // Сохранение цветов на бек
  const addColorsMap = async (colors: any) => {
    await updateDoc(doc(db, "Settings", auth?.currentUser?.uid as string), {
      Colors: colors,
    });
  };

  function saveColors() {
    const colors = JSON.parse(localStorage.getItem("colors") as string) || [];
    const bg = hslToHex(background);
    const fg = hslToHex(foreground);
    const sameColors =
      colors.filter(
        (color: CC.ColorsProps) =>
          color.background === bg && color.foreground === fg
      ).length > 0;

    if (colors.length > 0 && sameColors) {
      return;
    }

    if (colors.length > 8) {
      colors.pop();
    }

    colors.unshift({ background: bg, foreground: fg });
    localStorage.setItem("colors", JSON.stringify(colors));
    setColors(colors);
    addColorsMap(colors);
  }

  function updateView(bg: number[], fg: number[]) {
    const backgroundHex = hslToHex(bg);
    const foregroundHex = hslToHex(fg);

    document.body.style.setProperty("--background", backgroundHex);
    document.body.style.setProperty("--foreground", foregroundHex);

    checkContrast(backgroundHex, foregroundHex);
    setBackground(bg);
    setForeground(fg);
  }

  function reverseColors() {
    updateView(foreground, background);
    updatePath(foreground, background);
  }

  useEffect(() => {
    const path = window.location.pathname.split("/");
    const fontsData = localStorage.getItem("fonts");
    const bg = hexToHsl(path[1]);
    const fg = hexToHsl(path[2]);

    function fetchGoogleFontsData() {
      const apiKey = process.env.REACT_APP_GOOGLE_FONT_API_KEY;

      const googleFontsApi = `https://www.googleapis.com/webfonts/v1/webfonts?key=${apiKey}&sort=popularity`;

      fetchData(googleFontsApi)
        .then((data) => storeFontsData(data))
        .catch((error) => console.error(error));
    }

    if (fontsData === null) {
      fetchGoogleFontsData();
    }

    if (!isHsl(bg as number[]) || !isHsl(fg as number[])) {
      return;
    }

    updateViewRef.current(bg as number[], fg as number[]);
  }, []);

  return (
    <ColourContrastContext.Provider
      value={{
        fonts,
        colors,
        background,
        foreground,
        contrast,
        level,
        colorState,
        handleContrastCheck,
        reverseColors,
        saveColors,
        setColors,
        updateView,
        updatePath,
      }}
    >
      {props.children}
    </ColourContrastContext.Provider>
  );
};

const useColourContrast = () => {
  const context = useContext(ColourContrastContext);

  if (context === undefined) {
    throw new Error(
      "useColourContrast must be used within a ColourContrastProvider"
    );
  }

  return context;
};

export { ColourContrastContext, useColourContrast };

export default ColourContrastProvider;
