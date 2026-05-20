// === Menu page ===

function Menu() {
  const { lang } = useLang();
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all"); // all | veg | nonveg
  const [activeCat, setActiveCat] = useState(MENU[0].id);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return MENU.map((cat) => {
      const items = cat.items.filter((it) => {
        if (filter === "veg" && !it.veg) return false;
        if (filter === "nonveg" && it.veg) return false;
        if (q && !(it.n.toLowerCase().includes(q) || it.d.toLowerCase().includes(q))) return false;
        return true;
      });
      return { ...cat, items };
    }).filter((c) => c.items.length > 0);
  }, [query, filter]);

  // observer for active category as user scrolls
  useEffect(() => {
    const opts = { rootMargin: "-180px 0px -60% 0px", threshold: 0 };
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) setActiveCat(e.target.id);
      });
    }, opts);
    document.querySelectorAll(".menu-category").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [filtered.length]);

  const jumpTo = (id) => {
    setActiveCat(id);
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 160;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const total = MENU.reduce((s, c) => s + c.items.length, 0);

  return (
    <div className="page" data-screen-label="02 Menu">
      <section className="menu-hero">
        <div className="wrap-narrow">
          <span className="rule"><span className="diamond" />{t({ en: "The Menu", hi: "मेनू", mr: "मेनू" }, lang)}<span className="diamond" /></span>
          <h1 style={{ marginTop: 16 }}>{t({ en: "Eighteen categories. Every recipe from our kitchen.", hi: "अठारह श्रेणियाँ। हर नुस्ख़ा हमारी रसोई से।", mr: "अठरा प्रकार. प्रत्येक पाककृती आमच्या स्वयंपाकघरातून." }, lang)}</h1>
          <p className="sub">{t({ en: `${total} dishes plated to order. Search by name or ingredient. Use the green or red filter for veg / non-veg.`, hi: `${total} व्यंजन, हर एक ऑर्डर पर बनाया गया। नाम या सामग्री से खोजें।`, mr: `${total} पदार्थ, प्रत्येक ऑर्डरवर ताजे. नाव किंवा घटकाने शोधा.` }, lang)}</p>
        </div>
      </section>

      <div className="menu-tools">
        <div className="wrap menu-tools-inner">
          <div className="search-box">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5" />
              <path d="M11 11l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <input
              type="text"
              placeholder={t({ en: "Search dishes…", hi: "व्यंजन खोजें…", mr: "पदार्थ शोधा…" }, lang)}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            {query && <button onClick={() => setQuery("")} style={{ color: "var(--brown)" }}>×</button>}
          </div>
          <div className="filter-chips">
            <button className={`chip ${filter === "all" ? "active" : ""}`} onClick={() => setFilter("all")}>
              {t({ en: "All", hi: "सब", mr: "सर्व" }, lang)}
            </button>
            <button className={`chip veg ${filter === "veg" ? "active" : ""}`} onClick={() => setFilter("veg")}>
              <span className="veg-dot" /> {t({ en: "Veg only", hi: "केवल वेज", mr: "फक्त व्हेज" }, lang)}
            </button>
            <button className={`chip nonveg ${filter === "nonveg" ? "active" : ""}`} onClick={() => setFilter("nonveg")}>
              <span className="nonveg-dot" /> {t({ en: "Non-Veg", hi: "नॉन-वेज", mr: "नॉन-व्हेज" }, lang)}
            </button>
          </div>
          <div style={{ marginLeft: "auto" }}>
            <a className="btn btn-primary" href="https://swiggy.com" target="_blank" rel="noreferrer">{t({ en: "Order on Swiggy", hi: "Swiggy पर ऑर्डर", mr: "Swiggy वर ऑर्डर" }, lang)} →</a>
          </div>
        </div>
      </div>

      <div className="wrap">
        <div className="menu-layout">
          <aside className="menu-sidebar">
            <h5>{t({ en: "Categories", hi: "श्रेणियाँ", mr: "प्रकार" }, lang)}</h5>
            <ul>
              {filtered.map((c) => (
                <li key={c.id}>
                  <button className={activeCat === c.id ? "active" : ""} onClick={() => jumpTo(c.id)}>
                    <span>{t(c.name, lang)}</span>
                    <span className="count">{c.items.length}</span>
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          <div>
            {filtered.length === 0 && (
              <div style={{ padding: "80px 0", textAlign: "center" }}>
                <h3>{t({ en: "Nothing matches that.", hi: "कुछ नहीं मिला।", mr: "काहीच जुळले नाही." }, lang)}</h3>
                <p style={{ color: "var(--brown)", marginTop: 12 }}>{t({ en: "Try a different word, or clear filters.", hi: "अलग शब्द आज़माएँ।", mr: "वेगळा शब्द वापरून पहा." }, lang)}</p>
                <button className="btn btn-ghost" style={{ marginTop: 20 }} onClick={() => { setQuery(""); setFilter("all"); }}>Reset</button>
              </div>
            )}
            {filtered.map((cat) => (
              <section key={cat.id} id={cat.id} className="menu-category">
                <div className="menu-cat-head">
                  <h2>{t(cat.name, lang)}</h2>
                  <span className="count">{cat.items.length} {t({ en: "dishes", hi: "व्यंजन", mr: "पदार्थ" }, lang)}</span>
                </div>
                <div className="menu-items">
                  {cat.items.map((it, i) => (
                    <article className="menu-item" key={i}>
                      <div className="info">
                        <div className="menu-item-head">
                          <span className={it.veg ? "veg-dot" : "nonveg-dot"} style={{ marginTop: 6, flexShrink: 0 }} />
                          <span className="name">{it.n}{it.hero && <span style={{ marginLeft: 8, fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.18em", color: "var(--terracotta)" }}>★ SIGNATURE</span>}</span>
                        </div>
                        <p className="desc">{it.d}</p>
                        <div className="price-row">
                          <span className="price">{it.p}</span>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { Menu });
