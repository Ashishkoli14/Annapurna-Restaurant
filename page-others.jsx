// === Contact + Reviews + Offers pages ===

function Contact() {
  const { lang } = useLang();
  return (
    <div className="page" data-screen-label="05 Contact">
      <section className="section-sm" style={{ background: "var(--cream)", borderBottom: "1px solid var(--line)" }}>
        <div className="wrap-narrow text-center">
          <span className="rule"><span className="diamond" />{t({ en: "Find Us", hi: "हम तक पहुँचें", mr: "आमच्यापर्यंत पोहोचा" }, lang)}<span className="diamond" /></span>
          <h1 style={{ marginTop: 14 }}>{t({ en: "Shop 12, Sector 19, Kharghar.", hi: "दुकान 12, सेक्टर 19, खारघर।", mr: "दुकान १२, सेक्टर १९, खारघर." }, lang)}</h1>
          <p className="sub" style={{ margin: "16px auto 0", maxWidth: 560 }}>{t({ en: "Five minutes' walk from Kharghar station. Parking available on the side lane.", hi: "खारघर स्टेशन से 5 मिनट पैदल। साइड लेन में पार्किंग उपलब्ध।", mr: "खारघर स्टेशनपासून ५ मिनिटे चालत. बाजूच्या गल्लीत पार्किंग." }, lang)}</p>
        </div>
      </section>

      <div className="wrap">
        <div className="contact-grid">
          <div className="contact-info">
            <h2 className="serif">{t({ en: "Get in touch.", hi: "संपर्क करें।", mr: "संपर्क साधा." }, lang)}</h2>
            <p style={{ color: "var(--brown)", marginTop: 12 }}>{t({ en: "We answer phone calls between 10am and 11pm. WhatsApp messages are seen within an hour.", hi: "हम सुबह 10 से रात 11 बजे तक कॉल लेते हैं। WhatsApp संदेश एक घंटे में देखे जाते हैं।", mr: "आम्ही सकाळी १० ते रात्री ११ कॉल घेतो. WhatsApp संदेश एका तासात पाहिले जातात." }, lang)}</p>

            <div className="contact-actions">
              <a className="contact-action call" href="tel:+919920068483">
                <span className="ico">☎</span>
                <div><div className="lab">{t({ en: "Call now", hi: "अभी कॉल करें", mr: "कॉल करा" }, lang)}</div><div className="val">+91 99200 68483</div></div>
              </a>
              <a className="contact-action wa" href="https://wa.me/919920068483">
                <span className="ico">▼</span>
                <div><div className="lab">WhatsApp</div><div className="val">Chat with us</div></div>
              </a>
              <a className="contact-action mail" href="mailto:hello@annapurnakharghar.in">
                <span className="ico">✉</span>
                <div><div className="lab">Email</div><div className="val">hello@annapurna…</div></div>
              </a>
              <a className="contact-action dir" href="#/">
                <span className="ico">◎</span>
                <div><div className="lab">{t({ en: "Directions", hi: "रास्ता", mr: "रस्ता" }, lang)}</div><div className="val">Google Maps</div></div>
              </a>
            </div>

            <ul>
              <li>
                <span className="diamond" style={{ marginTop: 4, flexShrink: 0 }} />
                <div>
                  <strong>{t({ en: "Address", hi: "पता", mr: "पत्ता" }, lang)}</strong>
                  Shop 12, Plot 47, Sector 19, Kharghar,<br/>Navi Mumbai, Maharashtra — 410210
                </div>
              </li>
              <li>
                <span className="diamond" style={{ marginTop: 4, flexShrink: 0 }} />
                <div>
                  <strong>{t({ en: "Other numbers", hi: "अन्य नंबर", mr: "इतर नंबर" }, lang)}</strong>
                  +91 85911 68483 (party bookings)<br/>+91 87796 94496 (catering)
                </div>
              </li>
              <li>
                <span className="diamond" style={{ marginTop: 4, flexShrink: 0 }} />
                <div>
                  <strong>{t({ en: "Hours", hi: "समय", mr: "वेळा" }, lang)}</strong>
                  Mon–Thu · 11:00 — 23:00<br/>Fri–Sun · 11:00 — 23:30
                </div>
              </li>
              <li>
                <span className="diamond" style={{ marginTop: 4, flexShrink: 0 }} />
                <div>
                  <strong>{t({ en: "Getting here", hi: "कैसे पहुँचें", mr: "कसे यायचे" }, lang)}</strong>
                  5 min walk from Kharghar Railway Station. Auto stand at Sector 19 entrance.
                </div>
              </li>
            </ul>
          </div>

          <div>
            <div className="map-frame">
              <div className="map-canvas" />
              <svg className="map-roads" viewBox="0 0 400 300" preserveAspectRatio="none">
                <path d="M0,180 Q120,160 220,140 T400,100" fill="none" stroke="#FAF4EA" strokeWidth="14" />
                <path d="M0,180 Q120,160 220,140 T400,100" fill="none" stroke="#C9923D" strokeWidth="2" strokeDasharray="6 6" />
                <path d="M180,0 L210,300" fill="none" stroke="#FAF4EA" strokeWidth="10" />
                <path d="M180,0 L210,300" fill="none" stroke="#5C3A1B" strokeWidth="1" strokeDasharray="4 6" />
                <path d="M0,60 L400,40" fill="none" stroke="#FAF4EA" strokeWidth="6" />
                <rect x="60" y="200" width="40" height="30" fill="#EFE4D6" stroke="#5C3A1B" strokeWidth="0.5" />
                <rect x="280" y="190" width="50" height="40" fill="#EFE4D6" stroke="#5C3A1B" strokeWidth="0.5" />
                <rect x="100" y="80" width="30" height="40" fill="#EFE4D6" stroke="#5C3A1B" strokeWidth="0.5" />
              </svg>
              <div className="map-pin">
                <span className="lab">Annapurna</span>
                <span className="dot" />
              </div>
              <div className="map-corner">SECTOR 19 · KHARGHAR</div>
            </div>
            <div style={{ marginTop: 16, padding: "16px 20px", border: "1px solid var(--line)", borderRadius: 12, background: "var(--cream-paper)", fontSize: 13, color: "var(--brown)" }}>
              {t({ en: "Tip: Park on the side lane behind the building — free for diners.", hi: "टिप: इमारत के पीछे साइड लेन में पार्क करें — डाइनर्स के लिए मुफ़्त।", mr: "टीप: इमारतीच्या मागील गल्लीत पार्क करा — पाहुण्यांसाठी मोफत." }, lang)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Reviews() {
  const { lang } = useLang();
  const [rating, setRating] = useState("all");
  const [cat, setCat] = useState("all");
  const [sort, setSort] = useState("recent");

  const filtered = useMemo(() => {
    let r = [...REVIEWS];
    if (rating !== "all") r = r.filter((x) => x.rating === parseInt(rating));
    if (cat !== "all") r = r.filter((x) => x.cat === cat);
    if (sort === "highest") r.sort((a, b) => b.rating - a.rating);
    return r;
  }, [rating, cat, sort]);

  const avg = (REVIEWS.reduce((s, r) => s + r.rating, 0) / REVIEWS.length).toFixed(1);
  const counts = [5, 4, 3, 2, 1].map((s) => ({
    s, c: REVIEWS.filter((r) => r.rating === s).length,
  }));
  const total = REVIEWS.length;

  return (
    <div className="page" data-screen-label="06 Reviews">
      <section className="reviews-hero">
        <div className="wrap">
          <div className="reviews-hero-grid">
            <div>
              <span className="rule"><span className="diamond" />{t({ en: "Customer Reviews", hi: "ग्राहक समीक्षाएँ", mr: "ग्राहक अभिप्राय" }, lang)}<span className="diamond" /></span>
              <div className="rating-big" style={{ marginTop: 16 }}>
                <span className="v">{avg}</span>
                <span className="of">/ 5.0</span>
              </div>
              <div className="stars" style={{ fontSize: 20, marginTop: 8 }}>{"★".repeat(Math.round(avg))}{"☆".repeat(5 - Math.round(avg))}</div>
              <p className="rating-meta">{t({ en: `Based on ${487} aggregated reviews across Google, Zomato and Swiggy.`, hi: `Google, Zomato और Swiggy की 487 समीक्षाओं के आधार पर।`, mr: `Google, Zomato व Swiggy च्या ४८७ अभिप्रायांवर आधारित.` }, lang)}</p>
              <div style={{ display: "flex", gap: 10, marginTop: 24, flexWrap: "wrap" }}>
                <a className="btn btn-primary" href="https://google.com" target="_blank" rel="noreferrer">{t({ en: "Review on Google", hi: "Google पर समीक्षा", mr: "Google वर अभिप्राय" }, lang)} →</a>
                <a className="btn btn-ghost" href="https://zomato.com" target="_blank" rel="noreferrer">{t({ en: "Review on Zomato", hi: "Zomato पर समीक्षा", mr: "Zomato वर अभिप्राय" }, lang)} →</a>
              </div>
            </div>
            <div className="rating-bars">
              {counts.map(({ s, c }) => {
                const pct = Math.round((c / total) * 100);
                return (
                  <div className="rating-bar" key={s}>
                    <span className="lab">{s} STARS</span>
                    <div className="track"><div className="fill" style={{ width: `${pct}%` }} /></div>
                    <span className="pct">{pct}%</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <div className="wrap">
        <div className="reviews-filters">
          <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
            <span className="eyebrow">{t({ en: "Filter", hi: "फ़िल्टर", mr: "फिल्टर" }, lang)}</span>
            {["all", "5", "4", "3"].map((r) => (
              <button key={r} className={`chip ${rating === r ? "active" : ""}`} onClick={() => setRating(r)}>
                {r === "all" ? t({ en: "All ratings", hi: "सब", mr: "सर्व" }, lang) : `${r} ★`}
              </button>
            ))}
          </div>
          <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
            <span className="eyebrow">{t({ en: "Category", hi: "श्रेणी", mr: "प्रकार" }, lang)}</span>
            {["all", "Food Quality", "Service", "Ambiance", "Value for Money"].map((c) => (
              <button key={c} className={`chip ${cat === c ? "active" : ""}`} onClick={() => setCat(c)}>
                {c === "all" ? t({ en: "All", hi: "सब", mr: "सर्व" }, lang) : c}
              </button>
            ))}
          </div>
          <div style={{ marginLeft: "auto" }}>
            <select value={sort} onChange={(e) => setSort(e.target.value)} style={{ padding: "10px 16px", borderRadius: 999, border: "1px solid var(--line-strong)", background: "var(--cream-paper)", font: "inherit", color: "var(--brown-deep)" }}>
              <option value="recent">{t({ en: "Most recent", hi: "नवीनतम", mr: "अलीकडील" }, lang)}</option>
              <option value="highest">{t({ en: "Highest rated", hi: "सर्वोच्च रेटिंग", mr: "सर्वोच्च रेटिंग" }, lang)}</option>
            </select>
          </div>
        </div>

        <div className="reviews-list">
          {filtered.length === 0 && (
            <div style={{ gridColumn: "1/-1", padding: "60px 0", textAlign: "center" }}>
              <h3>{t({ en: "No reviews match those filters.", hi: "कोई समीक्षा नहीं मिली।", mr: "अभिप्राय सापडले नाहीत." }, lang)}</h3>
            </div>
          )}
          {filtered.map((r, i) => (
            <article className="review-card" key={i}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span className="stars">{"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}</span>
                <span style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--terracotta)" }}>{r.cat}</span>
              </div>
              <p className="review-text">"{r.text}"</p>
              <div className="review-meta">
                <span className="avatar">{r.name.split(" ").map(p => p[0]).join("")}</span>
                <div><div className="name">{r.name}</div><div className="when">{r.when}</div></div>
              </div>
            </article>
          ))}
        </div>

        <div style={{ padding: "40px 0 80px", textAlign: "center" }}>
          <p style={{ color: "var(--brown)" }}>{t({ en: "Showing", hi: "दिखाया जा रहा है", mr: "दाखवत आहे" }, lang)} {filtered.length} {t({ en: "of", hi: "में से", mr: "पैकी" }, lang)} {total}. {t({ en: "Read all reviews on Google →", hi: "Google पर सभी समीक्षाएँ पढ़ें →", mr: "Google वर सर्व अभिप्राय वाचा →" }, lang)}</p>
        </div>
      </div>
    </div>
  );
}

function Offers() {
  const { lang } = useLang();
  const [email, setEmail] = useState("");
  const [subbed, setSubbed] = useState(false);

  const subscribe = (e) => {
    e.preventDefault();
    if (email.includes("@")) { setSubbed(true); setEmail(""); }
  };

  return (
    <div className="page" data-screen-label="07 Offers">
      <section className="offers-hero">
        <div className="wrap inner">
          <span className="eyebrow" style={{ color: "var(--saffron)" }}>{t({ en: "Promotions & Specials", hi: "ऑफ़र और प्रोमोशन", mr: "ऑफर्स व प्रमोशन" }, lang)}</span>
          <h1>{t({ en: "Six reasons to come back this month.", hi: "इस महीने वापस आने की छह वजहें।", mr: "या महिन्यात पुन्हा यायची सहा कारणे." }, lang)}</h1>
          <p className="sub">{t({ en: "Lunch combos, weekend biryani BOGO, student pricing — all the ways to make a meal lighter on the wallet.", hi: "लंच कॉम्बो, वीकेंड बिरयानी BOGO, स्टूडेंट प्राइसिंग — खाने को थोड़ा हल्का करने के सभी तरीक़े।", mr: "लंच कॉम्बो, वीकेंड बिर्याणी BOGO, विद्यार्थी सूट — जेवण थोडे स्वस्त करण्याचे सर्व मार्ग." }, lang)}</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="offers-grid">
            {OFFERS.map((o) => (
              <article key={o.id} className="offer-card">
                <div className="offer-img" style={{ backgroundImage: `url(${o.img})` }}>
                  <div className="badge">{o.off}<small>{o.small}</small></div>
                </div>
                <div className="offer-content">
                  <span className="offer-validity">{o.category} · {o.validity}</span>
                  <h3>{t(o.title, lang)}</h3>
                  <p className="desc">{t(o.desc, lang)}</p>
                  <p className="terms">{o.terms}</p>
                  {o.code !== "—" && (
                    <div className="offer-code" style={{ alignSelf: "flex-start", marginTop: 0 }}>CODE · {o.code}</div>
                  )}
                  <div className="actions">
                    <a className="btn btn-primary" href="https://swiggy.com" target="_blank" rel="noreferrer">Order →</a>
                    <a className="btn btn-ghost" href="#/reservations">{t(I18N.reserveTable, lang)}</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="newsletter">
            <div>
              <span className="rule" style={{ color: "var(--saffron)" }}><span className="diamond" style={{ background: "var(--saffron)" }} />{t({ en: "Newsletter", hi: "न्यूज़लेटर", mr: "वार्तापत्र" }, lang)}<span className="diamond" style={{ background: "var(--saffron)" }} /></span>
              <h3 style={{ marginTop: 14 }}>{t({ en: "Get notified about new offers and seasonal menus.", hi: "नए ऑफ़र और मौसमी मेनू की जानकारी पाएँ।", mr: "नवीन ऑफर्स व मोसमी मेनूची माहिती मिळवा." }, lang)}</h3>
              <p>{t({ en: "One email a month, never more. We send what's worth knowing.", hi: "महीने में एक ईमेल, उससे ज़्यादा कभी नहीं।", mr: "महिन्याला एक ईमेल, त्यापेक्षा जास्त नाही." }, lang)}</p>
            </div>
            <div>
              {subbed ? (
                <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "16px 20px", background: "rgba(244,176,69,0.12)", border: "1px solid var(--saffron)", borderRadius: 12 }}>
                  <span style={{ fontSize: 24, color: "var(--saffron)" }}>✓</span>
                  <div style={{ color: "var(--cream-paper)" }}>{t({ en: "You're subscribed. Look out for our next note.", hi: "आप सब्सक्राइब हो गए। हमारी अगली नोट का इंतज़ार करें।", mr: "तुमची नोंदणी झाली. पुढच्या नोटची वाट पहा." }, lang)}</div>
                </div>
              ) : (
                <form onSubmit={subscribe}>
                  <input type="email" required placeholder={t({ en: "your@email.com", hi: "your@email.com", mr: "your@email.com" }, lang)} value={email} onChange={(e) => setEmail(e.target.value)} />
                  <button type="submit" className="btn btn-gold">{t({ en: "Subscribe", hi: "सब्सक्राइब", mr: "नोंदणी" }, lang)} →</button>
                </form>
              )}
              <p style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(245,235,224,0.5)", marginTop: 14 }}>
                {t({ en: "We never share your address. Unsubscribe in one click.", hi: "हम कभी आपका पता नहीं बेचते।", mr: "तुमचा पत्ता आम्ही कधीही शेअर करत नाही." }, lang)}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { Contact, Reviews, Offers });
