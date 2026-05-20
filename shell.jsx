// === Header, Footer, Lang Context ===

const { useState, useEffect, useContext, createContext, useMemo, useRef } = React;

const LangCtx = createContext({ lang: "en", setLang: () => {} });
const useLang = () => useContext(LangCtx);

function LangProvider({ children }) {
  const [lang, setLangState] = useState(() => localStorage.getItem("annapurna_lang") || "en");
  const setLang = (l) => { setLangState(l); localStorage.setItem("annapurna_lang", l); };
  return <LangCtx.Provider value={{ lang, setLang }}>{children}</LangCtx.Provider>;
}

function Logo({ onClick }) {
  return (
    <a className="logo" href="#/" onClick={onClick}>
      <span className="logo-mark">A</span>
      <span className="logo-text">
        <span className="logo-name">Annapurna</span>
        <span className="logo-sub">Kharghar · Est. 2004</span>
      </span>
    </a>
  );
}

function LangToggle() {
  const { lang, setLang } = useLang();
  return (
    <div className="lang-toggle" role="group" aria-label="Language">
      {["en", "hi", "mr"].map((l) => (
        <button key={l} className={lang === l ? "active" : ""} onClick={() => setLang(l)} aria-pressed={lang === l}>
          {l === "en" ? "EN" : l === "hi" ? "हि" : "मर"}
        </button>
      ))}
    </div>
  );
}

function Header({ route, navigate }) {
  const { lang } = useLang();
  const [open, setOpen] = useState(false);
  const links = [
    ["#/", I18N.nav.home, ""],
    ["#/menu", I18N.nav.menu, "menu"],
    ["#/about", I18N.nav.about, "about"],
    ["#/reservations", I18N.nav.reservations, "reservations"],
    ["#/reviews", I18N.nav.reviews, "reviews"],
    ["#/offers", I18N.nav.offers, "offers"],
    ["#/contact", I18N.nav.contact, "contact"],
  ];
  const isActive = (key) => (route === key || (key === "" && (route === "" || route === "home")));

  return (
    <React.Fragment>
      <header className="site-header" data-screen-label="Site Header">
        <div className="header-inner">
          <Logo onClick={() => setOpen(false)} />
          <nav className="nav">
            {links.map(([href, label, key]) => (
              <a key={href} href={href} className={isActive(key) ? "active" : ""}>
                {t(label, lang)}
              </a>
            ))}
          </nav>
          <div className="header-right">
            <LangToggle />
            <button className="mobile-menu-btn" onClick={() => setOpen(!open)} aria-label="Menu">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d={open ? "M4 4L16 16M16 4L4 16" : "M3 6h14M3 10h14M3 14h14"} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>
        <div className={`mobile-nav ${open ? "open" : ""}`}>
          {links.map(([href, label, key]) => (
            <a key={href} href={href} className={isActive(key) ? "active" : ""} onClick={() => setOpen(false)}>
              {t(label, lang)}
            </a>
          ))}
        </div>
      </header>
    </React.Fragment>
  );
}

function Footer() {
  const { lang } = useLang();
  return (
    <footer className="site-footer" data-screen-label="Footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <Logo />
            <p>{t({
              en: "A family kitchen in Kharghar, serving hand-cooked North Indian, Maharashtrian and Indo-Chinese dishes since 2004.",
              hi: "खारघर का एक पारिवारिक रसोईघर, 2004 से हाथ से बना उत्तर भारतीय, महाराष्ट्रीयन और इंडो-चायनीज़ खाना।",
              mr: "खारघरमधील एक कौटुंबिक स्वयंपाकघर, २००४ पासून हाताने बनवलेले उत्तर भारतीय, महाराष्ट्रीयन व इंडो-चायनीज जेवण.",
            }, lang)}</p>
          </div>
          <div>
            <h5>{t({ en: "Visit", hi: "मिलें", mr: "भेट" }, lang)}</h5>
            <ul>
              <li><a href="#/contact">Shop 12, Sector 19, Kharghar</a></li>
              <li><a href="#/contact">Navi Mumbai — 410210</a></li>
              <li><a href="tel:+919920068483">+91 99200 68483</a></li>
              <li><a href="mailto:hello@annapurnakharghar.in">hello@annapurnakharghar.in</a></li>
            </ul>
          </div>
          <div>
            <h5>{t({ en: "Hours", hi: "समय", mr: "वेळा" }, lang)}</h5>
            <ul>
              <li>{t({ en: "Mon–Thu", hi: "सोम–गुरु", mr: "सोम–गुरु" }, lang)} · 11:00–23:00</li>
              <li>{t({ en: "Fri–Sun", hi: "शुक्र–रवि", mr: "शुक्र–रवि" }, lang)} · 11:00–23:30</li>
              <li>{t({ en: "Kitchen closes", hi: "रसोई बंद", mr: "स्वयंपाकघर बंद" }, lang)} · 22:45</li>
            </ul>
          </div>
          <div>
            <h5>{t({ en: "Site", hi: "साइट", mr: "साइट" }, lang)}</h5>
            <ul>
              <li><a href="#/menu">{t(I18N.nav.menu, lang)}</a></li>
              <li><a href="#/reservations">{t(I18N.nav.reservations, lang)}</a></li>
              <li><a href="#/reviews">{t(I18N.nav.reviews, lang)}</a></li>
              <li><a href="#/offers">{t(I18N.nav.offers, lang)}</a></li>
              <li><a href="#/about">{t(I18N.nav.about, lang)}</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Annapurna Restaurant · Kharghar</span>
          <span>Crafted with care · A family business</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { LangProvider, useLang, Header, Footer, Logo, LangToggle });
