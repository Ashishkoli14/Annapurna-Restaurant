// === About page ===

function About() {
  const { lang } = useLang();
  const [lightbox, setLightbox] = useState(null);

  const gallery = [
    { src: null, label: "INTERIOR · MAIN DINING", cls: "wide", placeholder: true },
    { src: IMG.thali, label: "Thali Spread" },
    { src: IMG.butterChicken, label: "Butter Chicken" },
    { src: null, label: "INTERIOR · COPPER BAR", placeholder: true },
    { src: null, label: "TEAM · KITCHEN", placeholder: true },
    { src: IMG.tikka, label: "Tikka" },
    { src: null, label: "INTERIOR · ENTRANCE", placeholder: true, cls: "wide" },
    { src: IMG.biryani, label: "Biryani" },
    { src: IMG.naan, label: "Naan" },
    { src: null, label: "TEAM · CHEF AT WORK", placeholder: true },
    { src: IMG.paneerTikka, label: "Paneer Tikka" },
    { src: null, label: "INTERIOR · PRIVATE CORNER", placeholder: true },
  ];

  return (
    <div className="page" data-screen-label="03 About">
      <section className="about-hero">
        <div className="wrap">
          <div className="about-hero-grid">
            <div>
              <span className="rule"><span className="diamond" />{t({ en: "Our Story", hi: "हमारी कहानी", mr: "आमची गोष्ट" }, lang)}<span className="diamond" /></span>
              <h1>{t({ en: "A kitchen, a family, twenty-two years.", hi: "एक रसोई, एक परिवार, बाईस साल।", mr: "एक स्वयंपाकघर, एक कुटुंब, बावीस वर्षे." }, lang)}</h1>
              <p className="lede">{t({
                en: "Annapurna opened on a quiet street in Sector 19, Kharghar in 2004. Mr. Suresh Patil rented a 12-seat space, his wife handled the kitchen, his brother ran the floor. The first month they served 14 customers in total.",
                hi: "अन्नपूर्णा 2004 में खारघर के सेक्टर 19 की एक शांत गली में खुला। श्री सुरेश पाटिल ने 12 सीटों की जगह किराए पर ली, उनकी पत्नी रसोई संभालती थीं, भाई फ़्लोर। पहले महीने में कुल 14 ग्राहक आए।",
                mr: "अन्नपूर्णा २००४ साली खारघर सेक्टर १९ मधील एक शांत गल्लीत सुरू झाले. श्री सुरेश पाटील यांनी १२ जागांची जागा भाड्याने घेतली, त्यांची पत्नी स्वयंपाकघर सांभाळायच्या, भाऊ टेबल्स. पहिल्या महिन्यात फक्त १४ ग्राहक आले."
              }, lang)}</p>
            </div>
            <div className="about-portrait placeholder" style={{ background: "" }}>
              <div className="placeholder" style={{ width: "100%", height: "100%", borderRadius: 8 }}>
                FAMILY PORTRAIT · 2004
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap-narrow">
          <div className="story-block">
            <div>
              <span className="rule"><span className="diamond" />{t({ en: "The journey", hi: "सफ़र", mr: "प्रवास" }, lang)}<span className="diamond" /></span>
              <h2 style={{ marginTop: 16 }}>{t({ en: "From a corner shop to a neighbourhood institution.", hi: "एक छोटी दुकान से मोहल्ले की पहचान तक।", mr: "एका कोपऱ्याच्या दुकानातून परिसराची ओळख." }, lang)}</h2>
            </div>
            <div>
              <p>{t({
                en: "By 2007 we had outgrown the 12-seater. We took the shop next door, broke down a wall, and added a tandoor. The day the tandoor went in, the family ate the first naan together — a tradition we keep on every anniversary.",
                hi: "2007 तक 12 सीटें कम पड़ गयीं। बगल की दुकान ली, दीवार तोड़ी, तंदूर लगा। उस दिन परिवार ने मिलकर पहली नान खायी — हर सालगिरह पर अब भी यही परंपरा है।",
                mr: "२००७ पर्यंत १२ जागा पुऱ्या पडत नव्हत्या. शेजारची जागा घेतली, भिंत मोडली, तंदूर बसवला. त्या दिवशी कुटुंबाने पहिली नान एकत्र खाल्ली — प्रत्येक वाढदिवसाला हीच परंपरा."
              }, lang)}</p>
              <p>{t({
                en: "Our son, Aakash, trained at IHM Mumbai and came back in 2014. He brought back ideas — open-flame Schezwan rice, charcoal-cooked dum biryani, a malai tikka that uses kasundi mustard. The recipes we open the day with are still my mother-in-law's.",
                hi: "हमारा बेटा आकाश 2014 में IHM मुंबई से प्रशिक्षित होकर लौटा। उसने नए विचार लाए — खुली आँच की शेज़वान चावल, कोयले की दम बिरयानी, कसूंदी से बना मलाई टिक्का। पर दिन की शुरुआत आज भी सासू माँ के नुस्ख़ों से होती है।",
                mr: "आमचा मुलगा आकाश २०१४ साली IHM मुंबई वरून शिकून परतला. त्याने नवे विचार आणले — खुल्या आगीवर शिजवलेला शेझवान भात, कोळशावर दम बिर्याणी, कसुंदीचा मलाई टिक्का. पण दिवसाची सुरुवात आजही सासूबाईंच्या पाककृतींनी होते."
              }, lang)}</p>
              <p>{t({
                en: "Today we plate around 500 meals a day across dine-in and delivery. The kitchen still runs on hand-ground masalas, paneer set the same morning, and breads off a hot tawa.",
                hi: "आज हम रोज़ करीब 500 लोगों को खिलाते हैं — डाइन-इन और डिलीवरी मिलाकर। रसोई में आज भी हाथ से पिसे मसाले हैं, ताज़ा पनीर है, और गरम तवे की रोटियाँ।",
                mr: "आज आम्ही रोज सुमारे ५०० लोकांना जेवण देतो — डाइन-इन व डिलिव्हरी मिळून. स्वयंपाकघरात आजही हाताने पिसलेले मसाले, ताजे पनीर, गरम तव्यावरच्या भाकऱ्या."
              }, lang)}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="milestones">
        {[
          { year: "2004", what: { en: "Opened with 12 seats", hi: "12 सीटों से शुरुआत", mr: "१२ जागांनी सुरुवात" } },
          { year: "2007", what: { en: "Expansion + first tandoor", hi: "विस्तार और पहला तंदूर", mr: "विस्तार व पहिला तंदूर" } },
          { year: "2014", what: { en: "Aakash joins the kitchen", hi: "आकाश रसोई में शामिल", mr: "आकाश स्वयंपाकघरात" } },
          { year: "2026", what: { en: "Times Food Award · Kharghar", hi: "Times Food अवार्ड · खारघर", mr: "Times Food पुरस्कार · खारघर" } },
        ].map((m, i) => (
          <div key={i} className="milestone">
            <div className="year">{m.year}</div>
            <div className="what">{t(m.what, lang)}</div>
          </div>
        ))}
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div className="left">
              <span className="rule"><span className="diamond" />{t({ en: "The Team", hi: "हमारी टीम", mr: "आमची टीम" }, lang)}<span className="diamond" /></span>
              <h2 style={{ marginTop: 16 }}>{t({ en: "Who's in the kitchen tonight.", hi: "आज रसोई में कौन है।", mr: "आज स्वयंपाकघरात कोण आहे." }, lang)}</h2>
            </div>
          </div>
          <div className="team-grid">
            {[
              { name: "Aakash Patil", role: { en: "Head Chef", hi: "हेड शेफ़", mr: "हेड शेफ" }, bio: { en: "IHM Mumbai, 2014. Has spent two summers in Lucknow learning from his great-aunt's clay-oven kitchen.", hi: "IHM मुंबई, 2014। लखनऊ में अपनी पुरानी आंटी की मिट्टी की रसोई में दो गर्मियाँ बिताईं।", mr: "IHM मुंबई, २०१४. लखनौला आत्याच्या मातीच्या स्वयंपाकघरात दोन उन्हाळे काढले." } },
              { name: "Suresh Patil", role: { en: "Founder & Host", hi: "संस्थापक", mr: "संस्थापक" }, bio: { en: "The reason your table is ready when you walk in. Knows 80% of his regulars by name and dish.", hi: "जब आप पहुँचते हैं तो टेबल तैयार होती है — उनकी वजह से। 80% ग्राहकों को नाम और पसंदीदा थाली से जानते हैं।", mr: "तुम्ही आल्यावर टेबल तयार असते — त्यांच्यामुळे. ८०% पाहुणे नाव व आवडत्या थाळीने ओळखतात." } },
              { name: "Lata Patil", role: { en: "Pastry & Sweets", hi: "मिठाई और बेकरी", mr: "गोड व बेकरी" }, bio: { en: "Heads the dessert section. Her gajar halwa was once smuggled into a wedding 60 km away.", hi: "मिठाई की प्रमुख। उनका गाजर हलवा एक बार 60 किमी दूर शादी में भी पहुँचा।", mr: "गोड पदार्थांची प्रमुख. त्यांचा गाजर हलवा एकदा ६० किमी दूरच्या लग्नातही पोहोचला." } },
            ].map((m, i) => (
              <div className="team-card" key={i}>
                <div className="team-photo placeholder" style={{ width: "100%" }}>
                  {m.name.split(" ").map(p => p[0]).join("")}
                </div>
                <div className="team-name">{m.name}</div>
                <div className="team-role">{t(m.role, lang)}</div>
                <div className="team-bio">{t(m.bio, lang)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--cream)" }}>
        <div className="wrap">
          <div className="section-head">
            <div className="left">
              <span className="rule"><span className="diamond" />{t({ en: "Gallery", hi: "गैलरी", mr: "गॅलरी" }, lang)}<span className="diamond" /></span>
              <h2 style={{ marginTop: 16 }}>{t({ en: "Inside the room.", hi: "अंदर का नज़ारा।", mr: "आतला नजारा." }, lang)}</h2>
              <p className="sub">{t({ en: "Click any image to view large.", hi: "बड़ा देखने के लिए तस्वीर पर क्लिक करें।", mr: "मोठे पाहण्यासाठी प्रतिमेवर क्लिक करा." }, lang)}</p>
            </div>
          </div>
          <div className="gallery">
            {gallery.map((g, i) => (
              <div
                key={i}
                className={`gallery-tile ${g.cls || ""} ${g.placeholder ? "placeholder" : ""}`}
                style={g.src ? { backgroundImage: `url(${g.src})` } : {}}
                onClick={() => g.src && setLightbox(g.src)}
              >
                {g.placeholder && <span>{g.label}</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button className="lightbox-close">×</button>
          <div className="lightbox-content" style={{ backgroundImage: `url(${lightbox})` }} />
        </div>
      )}

      <section className="section">
        <div className="wrap">
          <div className="offer-banner">
            <div style={{ position: "relative", zIndex: 1 }}>
              <h2>{t({ en: "Come share a meal.", hi: "हमारे साथ खाना खाइये।", mr: "एकत्र जेवण करूया." }, lang)}</h2>
              <p className="sub" style={{ marginTop: 16 }}>{t({ en: "Tables fill quickly on weekend evenings — a quick reservation never hurts.", hi: "वीकेंड शाम को टेबल जल्दी भर जाती हैं — रिज़र्वेशन काम आता है।", mr: "वीकेंडला टेबल पटकन भरतात — आगाऊ बुकिंग केल्यास सोयीचे." }, lang)}</p>
              <div style={{ display: "flex", gap: 12, marginTop: 28, flexWrap: "wrap" }}>
                <a className="btn btn-gold" href="#/reservations">{t(I18N.reserveTable, lang)}</a>
                <a className="btn btn-ghost" href="#/menu" style={{ color: "var(--cream-paper)", borderColor: "rgba(245,235,224,0.4)" }}>{t(I18N.viewMenu, lang)} →</a>
              </div>
            </div>
            <div className="offer-side">
              <div style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--saffron)" }}>Sec. 19 · Kharghar</div>
              <div className="offer-big" style={{ marginTop: 8 }}>22</div>
              <div style={{ color: "rgba(245,235,224,0.7)", fontSize: 14, marginTop: 8 }}>{t({ en: "years in the same kitchen", hi: "एक ही रसोई में साल", mr: "एकाच स्वयंपाकघरात वर्षे" }, lang)}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { About });
