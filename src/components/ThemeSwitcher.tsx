import React from 'react';

const themes = ['Sunset', 'Arcade', 'Cyber', 'Retrowave'];

export function ThemeSwitcher() {
  const setTheme = (theme: string) => {
    document.documentElement.setAttribute('data-theme', theme.toLowerCase());
  };

  return (
    <div className="flex gap-2">
      {themes.map((theme) => (
        <button
          key={theme}
          onClick={() => setTheme(theme)}
          className="px-4 py-2 rounded-md bg-secondary text-primary hover:bg-accent transition-colors"
        >
          {theme}
        </button>
      ))}
    </div>
  );
}