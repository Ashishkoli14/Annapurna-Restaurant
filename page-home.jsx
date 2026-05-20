// === Home page ===

function VegBadge({ veg }) {
  return (
    <span className="dish-tag">
      <span className={veg ? "veg-dot" : "nonveg-dot"} />
      {veg ? "Veg" : "Non-Veg"}
    </span>
  );
}

function DishCard({ dish }) {
  const { lang } = useLang();
  return (
    <article className="dish-card">
      <div className="dish-img" style={{ backgroundImage: `url(${dish.img})` }}>
        <VegBadge veg={dish.veg} />
      </div>
      <div className="dish-body">
        <div className="dish-name">{t(dish.name, lang)}</div>
        <div className="dish-desc">{t(dish.desc, lang)}</div>
        <div className="dish-foot">
          <span className="dish-price">{dish.price}</span>
          <a className="dish-order" href="#/menu">Order →</a>
        </div>
      </div>
    </article>
  );
}

function HeroFullbleed() {
  const { lang } = useLang();
  return (
    <section className="hero hero-fullbleed" style={{ backgroundImage: `url(${IMG.heroAmbience})` }}>
      <div className="wrap">
        <div className="hero-content fade-in">
          <span className="eyebrow">{t(I18N.hero.eyebrow, lang)}</span>
          <h1 style={{ whiteSpace: "pre-line" }}>{t(I18N.hero.title, lang)}</h1>
          <p className="hero-sub">{t(I18N.hero.sub, lang)}</p>
          <div className="hero-ctas">
            <a className="btn btn-primary" href="#/reservations">{t(I18N.hero.cta1, lang)}</a>
            <a className="btn btn-ghost" style={{ color: "var(--cream-paper)", borderColor: "rgba(245,235,224,0.4)" }} href="#/menu">{t(I18N.hero.cta2, lang)} →</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroSplit() {
  const { lang } = useLang();
  return (
    <section className="hero hero-split">
      <div className="hero-text fade-in">
        <span className="eyebrow">{t(I18N.hero.eyebrow, lang)}</span>
        <h1 style={{ whiteSpace: "pre-line" }}>{t(I18N.hero.title, lang)}</h1>
        <p className="hero-sub">{t(I18N.hero.sub, lang)}</p>
        <div className="hero-ctas">
          <a className="btn btn-primary" href="#/reservations">{t(I18N.hero.cta1, lang)}</a>
          <a className="btn btn-ghost" href="#/menu">{t(I18N.hero.cta2, lang)} →</a>
        </div>
        <div className="hero-meta">
          <div><span className="v">22</span><span className="k">Years serving</span></div>
          <div><span className="v">4.7</span><span className="k">★ 487 reviews</span></div>
          <div><span className="v">11–23</span><span className="k">Daily hours</span></div>
        </div>
      </div>
      <div className="hero-image" style={{ backgroundImage: `url(${IMG.thali})` }} />
    </section>
  );
}

function HeroTypeled() {
  const { lang } = useLang();
  return (
    <section className="hero hero-typeled">
      <div className="wrap-narrow">
        <span className="eyebrow">{t(I18N.hero.eyebrow, lang)}</span>
        <h1 style={{ marginTop: 24 }}>
          <span className={lang !== "en" ? "deva" : ""}>{t(I18N.hero.titleType, lang)}</span>
        </h1>
        <p className="serif" style={{ fontStyle: "italic", color: "var(--terracotta)", fontSize: "clamp(22px, 2.4vw, 28px)", marginTop: -12 }}>
          — {t(I18N.hero.titleTypeSub, lang)}
        </p>
        <p className="hero-sub">{t(I18N.hero.sub, lang)}</p>
        <div className="hero-ctas">
          <a className="btn btn-primary" href="#/reservations">{t(I18N.hero.cta1, lang)}</a>
          <a className="btn btn-ghost" href="#/menu">{t(I18N.hero.cta2, lang)} →</a>
        </div>
      </div>
      <div className="hero-strip">
        <div className="tile" style={{ backgroundImage: `url(${IMG.thali})` }} />
        <div className="tile" style={{ backgroundImage: `url(${IMG.butterChicken})` }} />
        <div className="tile" style={{ backgroundImage: `url(${IMG.paneerTikka})` }} />
        <div className="tile" style={{ backgroundImage: `url(${IMG.biryani})` }} />
      </div>
    </section>
  );
}

function StatsBar() {
  const { lang } = useLang();
  return (
    <section className="stats-bar">
      <div className="stat"><div className="v">22+</div><div className="k">{t(I18N.stats.years, lang)}</div></div>
      <div className="stat"><div className="v">500+</div><div className="k">{t(I18N.stats.diners, lang)}</div></div>
      <div className="stat"><div className="v">50+</div><div className="k">{t(I18N.stats.dishes, lang)}</div></div>
      <div className="stat"><div className="v">4.7★</div><div className="k">{t(I18N.stats.rating, lang)}</div></div>
    </section>
  );
}

function FeaturedDishes() {
  const { lang } = useLang();
  return (
    <section className="section">
      <div className="wrap">
        <div className="section-head">
          <div className="left">
            <span className="rule"><span className="diamond" />{t(I18N.featured, lang)}<span className="diamond" /></span>
            <h2>{t({ en: "Plates the regulars know by heart.", hi: "वो थालियाँ जो हर ग्राहक की पसंद हैं।", mr: "नियमित पाहुण्यांच्या आवडत्या थाळ्या." }, lang)}</h2>
            <p className="sub">{t(I18N.featuredSub, lang)}</p>
          </div>
          <a className="btn btn-ghost" href="#/menu">{t(I18N.viewMenu, lang)} →</a>
        </div>
        <div className="dishes-row">
          {FEATURED.map((d) => <DishCard key={d.id} dish={d} />)}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const { lang } = useLang();
  return (
    <section className="section" style={{ background: "var(--cream)" }}>
      <div className="wrap">
        <div className="section-head">
          <div className="left">
            <span className="rule"><span className="diamond" />{t(I18N.whyChooseUs, lang)}<span className="diamond" /></span>
            <h2>{t({ en: "What we promise, every plate.", hi: "हर थाली पर हमारा वादा।", mr: "प्रत्येक ताटावर आमचे वचन." }, lang)}</h2>
            <p className="sub">{t(I18N.whyChooseUsSub, lang)}</p>
          </div>
        </div>
        <div className="why-grid">
          {I18N.whyItems.map((w, i) => (
            <div className="why-cell" key={i}>
              <div className="why-num">{String(i + 1).padStart(2, "0")} / {String(I18N.whyItems.length).padStart(2, "0")}</div>
              <h4>{t(w.t, lang)}</h4>
              <p>{t(w.p, lang)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewsHighlight() {
  const { lang } = useLang();
  const top = REVIEWS.slice(0, 3);
  return (
    <section className="section">
      <div className="wrap">
        <div className="section-head">
          <div className="left">
            <span className="rule"><span className="diamond" />{t({ en: "Reviews", hi: "समीक्षाएँ", mr: "अभिप्राय" }, lang)}<span className="diamond" /></span>
            <h2>{t(I18N.reviewsTitle, lang)}</h2>
          </div>
          <a className="btn btn-ghost" href="#/reviews">{t({ en: "Read all 487 →", hi: "सभी 487 पढ़ें →", mr: "सर्व ४८७ वाचा →" }, lang)}</a>
        </div>
        <div className="reviews-row">
          {top.map((r, i) => (
            <article className="review-card" key={i}>
              <span className="stars">{"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}</span>
              <p className="review-text">"{r.text}"</p>
              <div className="review-meta">
                <span className="avatar">{r.name.split(" ").map(p => p[0]).join("")}</span>
                <div><div className="name">{r.name}</div><div className="when">{r.when}</div></div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function OffersBanner() {
  const { lang } = useLang();
  return (
    <section className="section-sm">
      <div className="wrap">
        <div className="offer-banner">
          <div style={{ position: "relative", zIndex: 1 }}>
            <span className="offer-pill">{t({ en: "Lunch Special", hi: "लंच स्पेशल", mr: "लंच स्पेशल" }, lang)}</span>
            <h2 style={{ marginTop: 18 }}>{t({ en: "20% off every weekday lunch.", hi: "हर वीकडे लंच पर 20% की छूट।", mr: "प्रत्येक आठवड्याच्या लंचवर २०% सूट." }, lang)}</h2>
            <p className="sub">{t({ en: "Mon–Fri, 12pm to 4pm. All thalis, all combos. Dine-in only.", hi: "सोम–शुक्र, दोपहर 12-4 बजे। सभी थाली, सभी कॉम्बो। केवल डाइन-इन।", mr: "सोम–शुक्र, दुपारी १२-४. सर्व थाळ्या, कॉम्बो. फक्त डाइन-इन." }, lang)}</p>
            <div className="offer-code">CODE · LUNCH20</div>
          </div>
          <div className="offer-side">
            <div className="offer-big">20%</div>
            <div style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--saffron)" }}>off the bill</div>
            <a className="btn btn-gold" href="#/offers" style={{ marginTop: 20 }}>See all offers →</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function OrderOnline() {
  const { lang } = useLang();
  return (
    <section className="section">
      <div className="wrap">
        <div className="section-head">
          <div className="left">
            <span className="rule"><span className="diamond" />{t(I18N.orderOnline, lang)}<span className="diamond" /></span>
            <h2>{t({ en: "Eating in tonight?", hi: "आज घर पर खाना है?", mr: "आज घरीच जेवायचंय?" }, lang)}</h2>
            <p className="sub">{t(I18N.orderOnlineSub, lang)}</p>
          </div>
        </div>
        <div className="order-row">
          <a className="order-card swiggy" href="https://swiggy.com" target="_blank" rel="noreferrer">
            <span className="order-badge">S</span>
            <div className="meta">
              <div className="top">Order via</div>
              <div className="name">Swiggy</div>
              <div className="sub">30 min delivery · Live tracking</div>
            </div>
            <span className="order-arrow">→</span>
          </a>
          <a className="order-card zomato" href="https://zomato.com" target="_blank" rel="noreferrer">
            <span className="order-badge">Z</span>
            <div className="meta">
              <div className="top">Order via</div>
              <div className="name">Zomato</div>
              <div className="sub">Gold members get extra 10% off</div>
            </div>
            <span className="order-arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Home({ heroVariant }) {
  return (
    <div className="page" data-screen-label="01 Home">
      {heroVariant === "fullbleed" && <HeroFullbleed />}
      {heroVariant === "split" && <HeroSplit />}
      {heroVariant === "typeled" && <HeroTypeled />}
      <StatsBar />
      <FeaturedDishes />
      <WhyUs />
      <ReviewsHighlight />
      <OffersBanner />
      <OrderOnline />
    </div>
  );
}

Object.assign(window, { Home, DishCard, VegBadge });
