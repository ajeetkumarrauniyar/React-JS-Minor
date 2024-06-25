import { useEffect, useState } from "react";
import { ThemeProvider } from "./contexts/theme";
import ThemeButton from "./components/ThemeButton";
import Card from "./components/Card";

function App() {
  const [themeMode, setThemeMode] = useState("dark");

  const lightThemeMode = () => {
    setThemeMode("light");
  };

  const darkThemeMode = () => {
    setThemeMode("dark");
  };

  // Actual change in theme mode
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);
  return (
    <ThemeProvider value={{ themeMode, darkThemeMode, lightThemeMode }}>
      <div className="bg-white text-black transition-colors duration-300 dark:bg-zinc-500 dark:text-white">
        <div className="flex items-center justify-center min-h-screen">
          <div className="w-full max-w-sm p-4 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:text-white">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-xl font-semibold">Product Card</h1>
              <div className="flex items-center">
                <ThemeButton />
              </div>
            </div>
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
