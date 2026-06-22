const KEY = 'ao-theme';

type Theme = 'light' | 'dark';

function system(): Theme {
  return window.matchMedia?.('(prefers-color-scheme:dark)').matches ? 'dark' : 'light';
}

export function getTheme(): Theme {
  try {
    return (localStorage.getItem(KEY) as Theme) || system();
  } catch {
    return system();
  }
}

export function setTheme(t: Theme): void {
  document.documentElement.setAttribute('data-theme', t);
  try {
    localStorage.setItem(KEY, t);
  } catch {
    /* noop */
  }
}

export function toggleTheme(): Theme {
  const next: Theme = getTheme() === 'dark' ? 'light' : 'dark';
  setTheme(next);
  return next;
}

export function initTheme(): Theme {
  const t = getTheme();
  setTheme(t);
  return t;
}
