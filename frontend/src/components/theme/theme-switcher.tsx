import { useState } from "react";
import useDarkMode from "use-dark-mode";
import { Switch } from "@nextui-org/react";
import { MoonIcon, SunIcon } from "./icon";

export default function ThemeSwitcher() {
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const darkMode = useDarkMode(false);

  const toggleTheme = () => {
    darkMode.toggle();
    setDarkModeEnabled(!darkModeEnabled);
  };

  return (
    <Switch
      defaultSelected={darkModeEnabled}
      size="md"
      color="primary"
      onChange={toggleTheme}
      thumbIcon={({ isSelected, className }) =>
        isSelected ? <SunIcon className={className} /> : <MoonIcon className={className} />
      }
    />
  );
}
