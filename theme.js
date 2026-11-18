(function () {
  var TONES = {
    light: {
      white: { bg: "#ffffff", surface: "#f7fbf9", card: "#ffffff", header: "rgba(255,255,255,0.72)" },
      mint: { bg: "#f4fbf7", surface: "#ebf8f1", card: "#ffffff", header: "rgba(244,251,247,0.78)" },
      slate: { bg: "#f6f8fb", surface: "#eef2f7", card: "#ffffff", header: "rgba(246,248,251,0.78)" },
    },
    dark: {
      white: { bg: "#06100c", surface: "#0a1813", card: "#0c1d16", header: "rgba(6,16,12,0.76)" },
      mint: { bg: "#04120d", surface: "#071d15", card: "#0a2419", header: "rgba(4,18,13,0.78)" },
      slate: { bg: "#070d12", surface: "#0a141c", card: "#0d1a23", header: "rgba(7,13,18,0.78)" },
    },
  };

  function parse(hex) {
    var m = /^#?([0-9a-f]{6})$/i.exec(String(hex || "").trim());
    if (!m) return null;
    var n = parseInt(m[1], 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  }

  function hex(rgb) {
    return (
      "#" +
      rgb
        .map(function (v) {
          return Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, "0");
        })
        .join("")
    );
  }

  function mix(color, target, amount) {
    var a = parse(color);
    var b = parse(target) || [0, 0, 0];
    if (!a) return color;
    return hex([
      a[0] + (b[0] - a[0]) * amount,
      a[1] + (b[1] - a[1]) * amount,
      a[2] + (b[2] - a[2]) * amount,
    ]);
  }

  function rgba(color, alpha) {
    var c = parse(color);
    if (!c) return "rgba(5,150,105," + alpha + ")";
    return "rgba(" + c[0] + "," + c[1] + "," + c[2] + "," + alpha + ")";
  }

  function luminance(color) {
    var c = parse(color);
    if (!c) return 0.4;
    var values = c.map(function (v) {
      var s = v / 255;
      return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * values[0] + 0.7152 * values[1] + 0.0722 * values[2];
  }

  function apply(design, mode) {
    design = design || {};
    var dark = (mode || document.documentElement.dataset.theme) === "dark";
    var primary = (dark ? design.accentDark : design.accent) || design.accent || "#059669";
    if (!parse(primary)) primary = dark ? "#10b981" : "#059669";
    var root = document.documentElement;
    var set = function (name, value) {
      root.style.setProperty(name, value);
    };

    var strong = dark ? mix(primary, "#ffffff", 0.2) : mix(primary, "#000000", 0.14);
    var solid2 = dark ? mix(primary, "#ffffff", 0.14) : mix(primary, "#000000", 0.26);
    var accentText = dark ? mix(primary, "#ffffff", 0.36) : mix(primary, "#000000", 0.2);

    set("--accent", primary);
    set("--accent-strong", strong);
    set("--accent-solid", primary);
    set("--accent-solid-2", solid2);
    set("--accent-text", accentText);
    set("--on-accent", luminance(primary) > 0.55 ? "#04120c" : "#ffffff");
    set("--accent-soft", rgba(primary, dark ? 0.12 : 0.08));
    set("--accent-border", rgba(primary, dark ? 0.28 : 0.22));
    set("--accent-ring", rgba(primary, dark ? 0.2 : 0.16));
    set("--grid-line", rgba(primary, dark ? 0.07 : 0.05));
    set("--glow-1", rgba(primary, dark ? 0.22 : 0.3));
    set("--glow-2", rgba(primary, dark ? 0.16 : 0.22));
    set("--shadow-md", "0 12px 30px -18px " + rgba(primary, 0.3));
    set("--shadow-lg", "0 28px 60px -30px " + rgba(primary, 0.38));

    var radius = Math.max(10, Math.min(36, Number(design.radius) || 26));
    set("--radius-sm", Math.max(8, radius - 14) + "px");
    set("--radius-md", Math.max(10, radius - 8) + "px");
    set("--radius-lg", radius + "px");
    set("--radius-xl", radius + 8 + "px");

    var tone = TONES[dark ? "dark" : "light"][design.tone] || TONES[dark ? "dark" : "light"].mint;
    set("--bg", tone.bg);
    set("--surface", tone.surface);
    set("--card", tone.card);
    set("--header-bg", tone.header);
    set("--card-gradient", "linear-gradient(180deg, " + tone.card + " 0%, " + mix(tone.card, tone.bg, 0.55) + " 100%)");

    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = tone.bg;
    return { primary: primary, background: tone.bg };
  }

  window.MGTheme = { apply: apply, mix: mix, rgba: rgba, luminance: luminance };
})();
