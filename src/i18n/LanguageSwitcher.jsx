// LanguageSwitcher.js

// FLAGS
import ar from "@/assets/morocco.png";
import fr from "@/assets/france.png";
import en from "@/assets/united-kingdom.png";
import es from "@/assets/espagna.png";

import { Tooltip } from "@/client/material-tailwind";
import Image from "next/image";
import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
      <div className="w-full mb-4 flex items-center justify-center mt-5 space-x-8">
        <div className="flex justify-center items-center w-full space-x-4">
          <Tooltip content="العربية">
            <span className="h-[34px] w-[34px] scale-100 hover:scale-105 cursor-pointer">
              <Image src={ar} alt="location-voiture-laayoune-arabic" />
            </span>
          </Tooltip>
          <Tooltip content="English">
            <span
              onClick={() => handleLanguageChange("en")}
              className="h-8 w-8 scale-100 hover:scale-105 cursor-pointer"
            >
              <Image src={en} alt="location-voiture-laayoune-English" />
            </span>
          </Tooltip>
          <Tooltip content="Français">
            <span
              onClick={() => handleLanguageChange("fr")}
              className="h-8 w-8 scale-100 hover:scale-105 cursor-pointer"
            >
              <Image src={fr} alt="location-voiture-laayoune-Français" />
            </span>
          </Tooltip>
          <Tooltip content="española">
            <span
              onClick={() => handleLanguageChange("fr")}
              className="h-8 w-8 scale-100 hover:scale-105 cursor-pointer"
            >
              <Image src={es} alt="location-voiture-laayoune-Français" />
            </span>
          </Tooltip>
        </div>
      </div>
  );
}

export default LanguageSwitcher;
