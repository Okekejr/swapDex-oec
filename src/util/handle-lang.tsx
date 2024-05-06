export const handleLangImgs = (name: string): string => {
  if (name === "en") {
    return "/assets/flags/usa.png";
  } else if (name === "es") {
    return "/assets/flags/mexico.png";
  } else if (name === "fr") {
    return "/assets/flags/france.png";
  } else return "/assets/flags/usa.png";
};
