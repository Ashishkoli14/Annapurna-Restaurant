// === Reservations page ===

function Reservations() {
  const { lang } = useLang();
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState({
    name: "", phone: "", email: "",
    date: "", time: "19:30",
    party: 4,
    occasion: "",
    requests: "",
  });

  const set = (k) => (e) => setData({ ...data, [k]: e.target.value });

  const today = new Date().toISOString().slice(0, 10);
  const occasions = [
    { v: "birthday", l: { en: "Birthday", hi: "जन्मदिन", mr: "वाढदिवस" } },
    { v: "anniversary", l: { en: "Anniversary", hi: "सालगिरह", mr: "वर्धापन" } },
    { v: "family", l: { en: "Family", hi: "पारिवारिक", mr: "कौटुंबिक" } },
    { v: "corporate", l: { en: "Corporate", hi: "कॉर्पोरेट", mr: "कॉर्पोरेट" } },
    { v: "date", l: { en: "Date night", hi: "डेट नाइट", mr: "डेट" } },
    { v: "other", l: { en: "Other", hi: "अन्य", mr: "इतर" } },
  ];

  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 200, behavior: "smooth" });
  };

  return (
    <div className="page" data-screen-label="04 Reservations">
      <section className="res-hero">
        <div className="wrap-narrow">
          <span className="eyebrow">{t({ en: "Reserve a Table", hi: "टेबल बुक करें", mr: "टेबल बुक करा" }, lang)}</span>
          <h1>{t({ en: "We'll keep a seat for you.", hi: "हम आपके लिए जगह रखेंगे।", mr: "आम्ही तुमच्यासाठी जागा राखू." }, lang)}</h1>
          <p className="sub">{t({
            en: "Fill the form below — we'll confirm by WhatsApp or phone within 30 minutes. Walk-ins always welcome, but Friday and Saturday nights book up quickly.",
            hi: "नीचे फ़ॉर्म भरें — हम 30 मिनट में WhatsApp या फ़ोन से पुष्टि करेंगे। वॉक-इन हमेशा स्वागत है।",
            mr: "खालील फॉर्म भरा — आम्ही ३० मिनिटांत WhatsApp किंवा फोनवर पुष्टी करू. कधीही या, स्वागत आहे."
          }, lang)}</p>
        </div>
      </section>

      <div className="wrap">
        <div className="res-grid">
          <div>
            {submitted ? (
              <div className="form-card">
                <div className="res-success">
                  <div className="check">✓</div>
                  <h3>{t({ en: "Thank you, " + (data.name || "friend") + "!", hi: "धन्यवाद, " + (data.name || "दोस्त") + "!", mr: "धन्यवाद, " + (data.name || "मित्र") + "!" }, lang)}</h3>
                  <p>{t({
                    en: "We've received your request for a table of " + data.party + " on " + (data.date || "your selected date") + " at " + data.time + ". We'll confirm via WhatsApp on " + (data.phone || "your number") + " within 30 minutes.",
                    hi: "आपकी " + data.party + " लोगों की टेबल बुकिंग प्राप्त हुई — " + (data.date || "तय तारीख") + ", " + data.time + " बजे। हम 30 मिनट में पुष्टि करेंगे।",
                    mr: "तुमची " + data.party + " जणांची बुकिंग मिळाली — " + (data.date || "ठरलेली तारीख") + ", " + data.time + " वाजता. ३० मिनिटांत पुष्टी देऊ."
                  }, lang)}</p>
                  <div style={{ display: "flex", gap: 10, marginTop: 24, flexWrap: "wrap", justifyContent: "center" }}>
                    <button className="btn btn-ghost" onClick={() => { setSubmitted(false); setData({ name: "", phone: "", email: "", date: "", time: "19:30", party: 4, occasion: "", requests: "" }); }}>
                      {t({ en: "Book another", hi: "एक और बुक करें", mr: "आणखी एक बुक करा" }, lang)}
                    </button>
                    <a className="btn btn-primary" href="#/menu">{t(I18N.viewMenu, lang)} →</a>
                  </div>
                  <p style={{ marginTop: 32, fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.18em", color: "var(--brown)" }}>
                    {t({ en: "RESERVATIONS ARE CONFIRMED AFTER PHONE VERIFICATION", hi: "फ़ोन सत्यापन के बाद बुकिंग पक्की होती है", mr: "फोन सत्यापनानंतरच बुकिंग निश्चित" }, lang)}
                  </p>
                </div>
              </div>
            ) : (
              <form className="form-card" onSubmit={submit}>
                <div className="form-row">
                  <div className="field">
                    <label>{t({ en: "Full Name *", hi: "पूरा नाम *", mr: "पूर्ण नाव *" }, lang)}</label>
                    <input required value={data.name} onChange={set("name")} placeholder="Priya Sharma" />
                  </div>
                  <div className="field">
                    <label>{t({ en: "Phone Number *", hi: "फ़ोन नंबर *", mr: "फोन नंबर *" }, lang)}</label>
                    <input required type="tel" value={data.phone} onChange={set("phone")} placeholder="+91 98XXX XXXXX" />
                  </div>
                </div>

                <div className="form-row">
                  <div className="field">
                    <label>{t({ en: "Email (optional)", hi: "ईमेल (वैकल्पिक)", mr: "ईमेल (ऐच्छिक)" }, lang)}</label>
                    <input type="email" value={data.email} onChange={set("email")} placeholder="you@example.com" />
                  </div>
                  <div className="field">
                    <label>{t({ en: "Language Preference", hi: "भाषा पसंद", mr: "भाषा निवड" }, lang)}</label>
                    <select defaultValue={lang}>
                      <option value="en">English</option>
                      <option value="hi">हिन्दी (Hindi)</option>
                      <option value="mr">मराठी (Marathi)</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="field">
                    <label>{t({ en: "Date *", hi: "तारीख *", mr: "तारीख *" }, lang)}</label>
                    <input required type="date" min={today} value={data.date} onChange={set("date")} />
                  </div>
                  <div className="field">
                    <label>{t({ en: "Time *", hi: "समय *", mr: "वेळ *" }, lang)}</label>
                    <select required value={data.time} onChange={set("time")}>
                      {["11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00"].map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="field" style={{ marginBottom: 24 }}>
                  <label>{t({ en: "Number of Guests *", hi: "मेहमानों की संख्या *", mr: "पाहुण्यांची संख्या *" }, lang)}</label>
                  <div className="party-pills">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                      <button key={n} type="button" className={`party-pill ${data.party === n ? "active" : ""}`} onClick={() => setData({ ...data, party: n })}>{n}</button>
                    ))}
                    <button type="button" className={`party-pill ${data.party >= 9 ? "active" : ""}`} onClick={() => setData({ ...data, party: 10 })} style={{ width: "auto", padding: "0 14px", borderRadius: 20 }}>9+</button>
                  </div>
                </div>

                <div className="field" style={{ marginBottom: 20 }}>
                  <label>{t({ en: "Occasion (optional)", hi: "अवसर (वैकल्पिक)", mr: "प्रसंग (ऐच्छिक)" }, lang)}</label>
                  <div className="occasion-chips">
                    {occasions.map((o) => (
                      <button key={o.v} type="button" className={`occasion-chip ${data.occasion === o.v ? "active" : ""}`} onClick={() => setData({ ...data, occasion: data.occasion === o.v ? "" : o.v })}>
                        {t(o.l, lang)}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="field" style={{ marginBottom: 28 }}>
                  <label>{t({ en: "Special Requests (allergies, seating, jain-friendly, etc.)", hi: "विशेष अनुरोध (एलर्जी, सीटिंग, जैन, आदि)", mr: "विशेष विनंती (अॅलर्जी, बसण्याची व्यवस्था, जैन इ.)" }, lang)}</label>
                  <textarea value={data.requests} onChange={set("requests")} placeholder={t({ en: "Any preferences we should know about?", hi: "कुछ ख़ास बताना चाहेंगे?", mr: "काही खास सांगायचे आहे का?" }, lang)} />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center", padding: "16px 28px", fontSize: 15 }}>
                  {t({ en: "Request reservation", hi: "बुकिंग का अनुरोध करें", mr: "बुकिंगसाठी विनंती करा" }, lang)} →
                </button>

                <p style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.16em", color: "var(--brown)", textAlign: "center", marginTop: 20, lineHeight: 1.6 }}>
                  {t({ en: "RESERVATIONS ARE CONFIRMED AFTER PHONE VERIFICATION · WALK-INS ALWAYS WELCOME", hi: "फ़ोन सत्यापन के बाद बुकिंग पक्की · वॉक-इन हमेशा स्वागत", mr: "फोन सत्यापनानंतर बुकिंग निश्चित · वॉक-इन्स नेहमी स्वागत" }, lang)}
                </p>
              </form>
            )}
          </div>

          <aside className="res-aside">
            <div className="card">
              <h4 className="serif">{t({ en: "Prefer to call?", hi: "कॉल करना है?", mr: "फोनवर बोलायचंय?" }, lang)}</h4>
              <p style={{ marginBottom: 12 }}>{t({ en: "Reach the host directly — quickest way during peak hours.", hi: "सीधे होस्ट से बात करें — पीक घंटों में सबसे तेज़।", mr: "थेट यजमानांशी बोला — गर्दीच्या वेळी सर्वात जलद." }, lang)}</p>
              <a className="btn btn-primary" href="tel:+919920068483" style={{ width: "100%", justifyContent: "center" }}>
                <span>☎</span> +91 99200 68483
              </a>
              <a className="btn btn-ghost" href="https://wa.me/919920068483" style={{ width: "100%", justifyContent: "center", marginTop: 10 }}>
                WhatsApp us →
              </a>
            </div>

            <div className="card">
              <h4 className="serif">{t({ en: "Opening hours", hi: "खुलने के समय", mr: "उघडण्याच्या वेळा" }, lang)}</h4>
              {[
                { d: { en: "Monday", hi: "सोमवार", mr: "सोमवार" }, t: "11:00 — 23:00" },
                { d: { en: "Tuesday", hi: "मंगलवार", mr: "मंगळवार" }, t: "11:00 — 23:00" },
                { d: { en: "Wednesday", hi: "बुधवार", mr: "बुधवार" }, t: "11:00 — 23:00" },
                { d: { en: "Thursday", hi: "गुरुवार", mr: "गुरुवार" }, t: "11:00 — 23:00" },
                { d: { en: "Friday", hi: "शुक्रवार", mr: "शुक्रवार" }, t: "11:00 — 23:30" },
                { d: { en: "Saturday", hi: "शनिवार", mr: "शनिवार" }, t: "11:00 — 23:30" },
                { d: { en: "Sunday", hi: "रविवार", mr: "रविवार" }, t: "11:00 — 23:30" },
              ].map((h, i) => (
                <div className="hours-row" key={i}>
                  <span className="day">{t(h.d, lang)}</span>
                  <span className="time">{h.t}</span>
                </div>
              ))}
              <p style={{ fontSize: 12, color: "var(--brown)", marginTop: 14, fontStyle: "italic" }}>
                {t({ en: "Kitchen closes 15 mins before listed time.", hi: "रसोई बंद होने से 15 मिनट पहले।", mr: "स्वयंपाकघर बंद होण्याच्या १५ मि. आधी." }, lang)}
              </p>
            </div>

            <div className="card">
              <h4 className="serif">{t({ en: "Hosting a party?", hi: "पार्टी की मेज़बानी?", mr: "मोठा कार्यक्रम?" }, lang)}</h4>
              <p style={{ marginBottom: 14 }}>{t({ en: "Groups of 12 or more — we can offer a fixed menu, the back room, and complimentary parking. Call 24 hours ahead.", hi: "12+ लोगों के लिए — फिक्स्ड मेनू, बैक रूम और फ्री पार्किंग। 24 घंटे पहले कॉल करें।", mr: "१२+ जणांसाठी — फिक्स्ड मेनू, बॅक रूम व मोफत पार्किंग. २४ तास आधी कॉल करा." }, lang)}</p>
              <a className="btn-link" href="tel:+918591168483">+91 85911 68483 →</a>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { Reservations });
