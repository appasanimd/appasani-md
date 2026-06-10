/* global React, useTweaks, TweaksPanel, TweakSection, TweakColor, TweakRadio */
const { useEffect } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "presidio",
  "type": "editorial",
  "density": "regular"
}/*EDITMODE-END*/;

// ---- Palettes: each sets the core CSS custom properties --------------------
const PALETTES = {
  presidio: {
    label: "Presidio",
    swatch: ["#3a4a3f", "#f7f4ec", "#9a8654"],
    vars: {
      "--bg": "#f7f4ec",
      "--surface": "#efe9dc",
      "--ink": "#23291f",
      "--ink-soft": "#5b5f51",
      "--green": "#4a5d4e",
      "--green-deep": "#202a22",
      "--brass": "#9a8654",
      "--line": "#dcd5c4",
      "--on-dark": "#eef0e6",
      "--on-dark-soft": "#aab19f",
    },
  },
  fog: {
    label: "Fog & Stone",
    swatch: ["#3f4a4d", "#f1f1ee", "#7d8a86"],
    vars: {
      "--bg": "#f2f1ed",
      "--surface": "#e6e6e0",
      "--ink": "#222826",
      "--ink-soft": "#565d5b",
      "--green": "#4c5a58",
      "--green-deep": "#1f2725",
      "--brass": "#8a8b7a",
      "--line": "#d7d7cf",
      "--on-dark": "#edefea",
      "--on-dark-soft": "#a4aaa5",
    },
  },
  clay: {
    label: "Clay & Cypress",
    swatch: ["#384237", "#f6efe4", "#b07a55"],
    vars: {
      "--bg": "#f6efe4",
      "--surface": "#ede2d1",
      "--ink": "#2a261f",
      "--ink-soft": "#5f574a",
      "--green": "#4b5641",
      "--green-deep": "#222a1d",
      "--brass": "#b07a55",
      "--line": "#e0d4bf",
      "--on-dark": "#f0ece1",
      "--on-dark-soft": "#b0a890",
    },
  },
  forest: {
    label: "Forest & Cream",
    swatch: ["#1d2a20", "#f4efe2", "#c2a35a"],
    vars: {
      "--bg": "#f4efe2",
      "--surface": "#e9e1cd",
      "--ink": "#1e261d",
      "--ink-soft": "#555c4c",
      "--green": "#3c4d3b",
      "--green-deep": "#16201a",
      "--brass": "#c2a35a",
      "--line": "#ddd3bb",
      "--on-dark": "#f1ecdd",
      "--on-dark-soft": "#aab199",
    },
  },
};

const TYPE = {
  editorial: {
    label: "Editorial",
    vars: { "--font-display": "'Newsreader', Georgia, serif", "--display-weight": "400" },
  },
  luxe: {
    label: "Luxe",
    vars: { "--font-display": "'Cormorant Garamond', Georgia, serif", "--display-weight": "500" },
  },
  literary: {
    label: "Literary",
    vars: { "--font-display": "'Spectral', Georgia, serif", "--display-weight": "300" },
  },
};

const DENSITY = {
  compact: { "--space-scale": "0.85" },
  regular: { "--space-scale": "1" },
  comfy: { "--space-scale": "1.18" },
};

function applyVars(obj) {
  const root = document.documentElement;
  Object.entries(obj).forEach(([k, v]) => root.style.setProperty(k, v));
}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  useEffect(() => { applyVars(PALETTES[t.palette]?.vars || {}); }, [t.palette]);
  useEffect(() => { applyVars(TYPE[t.type]?.vars || {}); }, [t.type]);
  useEffect(() => { applyVars(DENSITY[t.density] || {}); }, [t.density]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Palette" />
      <TweakColor
        label="Color story"
        value={PALETTES[t.palette].swatch}
        options={Object.values(PALETTES).map((p) => p.swatch)}
        onChange={(arr) => {
          const key = Object.keys(PALETTES).find(
            (k) => PALETTES[k].swatch.join() === arr.join()
          );
          if (key) setTweak("palette", key);
        }}
      />
      <TweakSection label="Typography" />
      <TweakRadio
        label="Display face"
        value={t.type}
        options={["editorial", "luxe", "literary"]}
        onChange={(v) => setTweak("type", v)}
      />
      <TweakSection label="Layout" />
      <TweakRadio
        label="Density"
        value={t.density}
        options={["compact", "regular", "comfy"]}
        onChange={(v) => setTweak("density", v)}
      />
    </TweaksPanel>
  );
}

ReactDOM.createRoot(document.getElementById("tweaks-root")).render(<App />);
