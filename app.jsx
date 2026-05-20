// === App router + Tweaks ===

function useHashRoute() {
  const parse = () => {
    const h = window.location.hash || "#/";
    const seg = h.replace(/^#\/?/, "").split("/")[0] || "";
    return seg;
  };
  const [route, setRoute] = useState(parse());
  useEffect(() => {
    const onHash = () => {
      setRoute(parse());
      window.scrollTo({ top: 0, behavior: "instant" });
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  return [route, (r) => { window.location.hash = r; }];
}

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "heroVariant": "fullbleed",
  "accent": "#C85A3A"
}/*EDITMODE-END*/;

function App() {
  const [route] = useHashRoute();
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // apply accent dynamically
  useEffect(() => {
    document.documentElement.style.setProperty("--terracotta", tweaks.accent);
  }, [tweaks.accent]);

  const renderPage = () => {
    switch (route) {
      case "": case "home": return <Home heroVariant={tweaks.heroVariant} />;
      case "menu": return <Menu />;
      case "about": return <About />;
      case "reservations": return <Reservations />;
      case "contact": return <Contact />;
      case "reviews": return <Reviews />;
      case "offers": return <Offers />;
      default: return <Home heroVariant={tweaks.heroVariant} />;
    }
  };

  return (
    <LangProvider>
      <div className="app-shell">
        <Header route={route} />
        <main key={route}>{renderPage()}</main>
        <Footer />
      </div>
      <TweaksPanel title="Tweaks">
        <TweakSection title="Hero layout (Home)">
          <TweakRadio
            label="Variant"
            value={tweaks.heroVariant}
            onChange={(v) => setTweak("heroVariant", v)}
            options={[
              { value: "fullbleed", label: "Photo" },
              { value: "split",     label: "Split" },
              { value: "typeled",   label: "Type" },
            ]}
          />
          <p style={{ fontSize: 12, color: "#9C8674", marginTop: 8, lineHeight: 1.5 }}>
            Photo · full-bleed restaurant ambience<br/>
            Split · text left, signature dish right<br/>
            Type · large italic wordmark + dish strip
          </p>
        </TweakSection>
        <TweakSection title="Accent colour">
          <TweakColor
            label="Primary"
            value={tweaks.accent}
            onChange={(v) => setTweak("accent", v)}
            options={["#C85A3A", "#A8401F", "#C9923D", "#7A4A2E", "#8C2A2A"]}
          />
        </TweakSection>
      </TweaksPanel>
    </LangProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
