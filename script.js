/* =====================================================================
   SHOP CONTENT: edit ONLY this object to change what the page says (both languages).
   hours: index 0 = Sunday … 6 = Saturday, ["HH:MM", "HH:MM"] Dubai time, a list of ranges for split
   hours, or null if closed. A closing time after midnight is written past 24:00 ("24:30" = 12:30 AM).
   reviews: real Google quotes. If empty, text.<lang>.mentions (a summary) is shown instead.
   ===================================================================== */
const SHOP = {
  "name": "Al Ramz Optic Karama",
  "siteUrl": "https://tanish0212.github.io/al-ramz-optic-demo/",
  "schemaType": "Optician",
  "phoneDisplay": "+971 56 458 0888",
  "phoneHref": "tel:+971564580888",
  "phoneIntl": "+971564580888",
  "whatsappNumber": "971564580888",
  "directionsUrl": "https://www.google.com/maps/search/?api=1&query=Al+Ramz+Optic+Al+Shraifi+3+Building+Al+Karama+Dubai",
  "reviewsUrl": "https://www.google.com/maps/search/?api=1&query=Al+Ramz+Optic+Al+Shraifi+3+Building+Al+Karama+Dubai",
  "mapEmbedUrl": "https://maps.google.com/maps?q=Al%20Ramz%20Optic%2C%20Al%20Shraifi%203%20Building%2C%20Al%20Karama%2C%20Dubai&output=embed",
  "address": {
    "street": "Shop No. 6, Al Shraifi 3 Building, Al Karama",
    "city": "Dubai",
    "country": "AE"
  },
  "timeZone": "Asia/Dubai",
  "hours": [
    [
      "09:00",
      "23:30"
    ],
    [
      "09:00",
      "23:30"
    ],
    [
      "09:00",
      "23:30"
    ],
    [
      "09:00",
      "24:00"
    ],
    [
      "09:00",
      "23:30"
    ],
    [
      "09:00",
      "23:30"
    ],
    [
      "09:00",
      "23:30"
    ]
  ],
  "hoursGroups": [
    {
      "days": [
        4,
        5,
        6,
        0,
        1,
        2
      ],
      "key": "g0"
    },
    {
      "days": [
        3
      ],
      "key": "g1"
    }
  ],
  "rating": {
    "value": "4.9",
    "count": 404
  },
  "showDemoBanner": true,
  "credit": "Tanish",
  "photos": {
    "hero": {
      "src": "images/hero.webp",
      "en": "Inside an optical shop with walls of frames",
      "ar": "داخل محل نظارات بجدران من الإطارات"
    },
    "intro": {
      "src": "images/photo-1.webp",
      "en": "Looking at an eye chart through a pair of glasses",
      "ar": "النظر إلى لوحة فحص النظر من خلال نظارة"
    },
    "photo-2": {
      "src": "images/photo-2.webp",
      "en": "A pair of fine metal frames on white",
      "ar": "إطار نظارة معدني رفيع على خلفية بيضاء"
    }
  },
  "services": [
    {
      "en": {
        "name": "Eye tests",
        "desc": "Eye examinations at the shop, with everything explained clearly.",
        "ask": "an eye test"
      },
      "ar": {
        "name": "فحص النظر",
        "desc": "فحص النظر في المحل، مع شرح واضح لكل شيء.",
        "ask": "فحص النظر"
      }
    },
    {
      "en": {
        "name": "RTA-approved eye tests",
        "desc": "Listed on Google as an RTA-approved eye test centre. Ask us for the details.",
        "ask": "an RTA-approved eye test"
      },
      "ar": {
        "name": "فحص نظر معتمد من هيئة الطرق",
        "desc": "مركز فحص نظر معتمد من هيئة الطرق والمواصلات. اسألنا عن التفاصيل.",
        "ask": "فحص النظر المعتمد من هيئة الطرق"
      }
    },
    {
      "en": {
        "name": "Frames",
        "desc": "Help choosing frames that suit you.",
        "ask": "frames"
      },
      "ar": {
        "name": "الإطارات",
        "desc": "نساعدك في اختيار الإطار المناسب لك.",
        "ask": "الإطارات"
      }
    },
    {
      "en": {
        "name": "Lenses",
        "desc": "Lenses for your prescription. Ask us about the options.",
        "ask": "lenses"
      },
      "ar": {
        "name": "العدسات",
        "desc": "عدسات حسب وصفتك الطبية. اسألنا عن الخيارات.",
        "ask": "العدسات"
      }
    },
    {
      "en": {
        "name": "Urgent prescription glasses",
        "desc": "Need glasses urgently? Message us and ask.",
        "ask": "urgent prescription glasses"
      },
      "ar": {
        "name": "نظارات طبية مستعجلة",
        "desc": "تحتاج نظارة بشكل عاجل؟ راسلنا واسأل.",
        "ask": "النظارات الطبية المستعجلة"
      }
    },
    {
      "en": {
        "name": "Insurance claims",
        "desc": "Help with your insurance claim for glasses. Ask us how it works.",
        "ask": "help with an insurance claim"
      },
      "ar": {
        "name": "مطالبات التأمين",
        "desc": "نساعدك في مطالبة التأمين للنظارات. اسألنا عن الطريقة.",
        "ask": "المساعدة في مطالبة التأمين"
      }
    }
  ],
  "reviews": [
    "The eye examination was thorough, and they explained everything clearly.",
    "The staff were professional, friendly, and very helpful in selecting the right frames and lenses.",
    "The staff were very accommodating, the service was fast, and they made sure we were taken care of."
  ],
  "text": {
    "en": {
      "skip": "Skip to content",
      "navLabel": "Main",
      "navServices": "Services",
      "navReviews": "Reviews",
      "navVisit": "Visit",
      "langLabel": "Language",
      "waCta": "Message on WhatsApp",
      "waShort": "WhatsApp",
      "callCta": "Call the shop",
      "directions": "Get directions",
      "newTab": "(opens in a new tab)",
      "ratingShort": "Google rating",
      "ratingCount": "{count} reviews",
      "outOf": "out of 5 on Google",
      "statusOpen": "Open now · until {time}",
      "statusOpensToday": "Closed now · opens today at {time}",
      "statusReopens": "Closed now · reopens today at {time}",
      "statusOpensTomorrow": "Closed now · opens tomorrow at {time}",
      "statusOpensLater": "Closed now · opens {day} at {time}",
      "closed": "Closed",
      "am": "AM",
      "pm": "PM",
      "days": [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "today": "Today",
      "introLabel": "About",
      "servicesTitle": "Services",
      "quoteCta": "Ask on WhatsApp",
      "quoteNote": "Prices aren't listed online. Message us on WhatsApp for prices.",
      "reviewsTitle": "What customers say",
      "reviewLabel": "Google review",
      "mentionsNote": "What customers mention most in their Google reviews.",
      "readMore": "Read the reviews on Google",
      "visitTitle": "Visit",
      "addressLabel": "Address",
      "hoursLabel": "Opening hours",
      "phoneLabel": "Phone & WhatsApp",
      "closingTitle": "Book an eye test on WhatsApp",
      "footerContact": "Contact",
      "credit": "Website by {credit}",
      "pageTitle": "Al Ramz Optic Karama · Optical shop & eye tests · Al Karama",
      "metaDescription": "Eye tests (including RTA-approved eye tests), frames, lenses, urgent prescription glasses and help with insurance claims, at Al Shraifi 3 Building in Al Karama. Rated 4.9 on Google.",
      "demoBanner": "Demo preview – made for Al Ramz Optic Karama. Not the official website yet.",
      "heroName": "Al Ramz Optic",
      "waMessage": "Hello Al Ramz Optic, I found you on your website and I'd like to ask about your services.",
      "waMessageAbout": "Hello Al Ramz Optic, I found you on your website and I'd like to ask about {service}.",
      "waAria": "Message Al Ramz Optic Karama on WhatsApp",
      "mapTitle": "Map showing Al Ramz Optic Karama",
      "footerName": "Al Ramz Optic Karama",
      "groups": {
        "g0": "Every day except Wednesday",
        "g1": "Wednesday"
      },
      "mentions": [],
      "brandName": "Al Ramz Optic",
      "heroPlace": "Shop No. 6, Al Shraifi 3 Building, Al Karama",
      "addressLines": [
        "Shop No. 6, Al Shraifi 3 Building",
        "Al Karama, Dubai"
      ],
      "servicesIntro": "Tap any service to ask us about it on WhatsApp.",
      "footerTag": "Optical shop and RTA-approved eye test centre in Al Karama, Dubai.",
      "intro": "Eye tests (including RTA-approved eye tests), frames, lenses, urgent prescription glasses and help with insurance claims, at Al Shraifi 3 Building in Al Karama.",
      "kicker": "Optical shop & eye tests · Al Karama"
    },
    "ar": {
      "skip": "انتقل إلى المحتوى",
      "navLabel": "القائمة الرئيسية",
      "navServices": "الخدمات",
      "navReviews": "التقييمات",
      "navVisit": "الموقع",
      "langLabel": "اللغة",
      "waCta": "راسلنا عبر واتساب",
      "waShort": "واتساب",
      "callCta": "اتصل بالمحل",
      "directions": "احصل على الاتجاهات",
      "newTab": "(يفتح في نافذة جديدة)",
      "ratingShort": "تقييم جوجل",
      "ratingCount": "{count} تقييمات",
      "outOf": "من 5 على جوجل",
      "statusOpen": "مفتوح الآن · حتى {time}",
      "statusOpensToday": "مغلق الآن · يفتح اليوم الساعة {time}",
      "statusReopens": "مغلق الآن · يعيد الفتح اليوم الساعة {time}",
      "statusOpensTomorrow": "مغلق الآن · يفتح غدًا الساعة {time}",
      "statusOpensLater": "مغلق الآن · يفتح يوم {day} الساعة {time}",
      "closed": "مغلق",
      "midnight": "منتصف الليل",
      "am": "صباحًا",
      "pm": "مساءً",
      "days": [
        "الأحد",
        "الاثنين",
        "الثلاثاء",
        "الأربعاء",
        "الخميس",
        "الجمعة",
        "السبت"
      ],
      "today": "اليوم",
      "introLabel": "نبذة",
      "servicesTitle": "الخدمات",
      "quoteCta": "اسأل عبر واتساب",
      "quoteNote": "الأسعار غير معروضة على الموقع. راسلنا عبر واتساب لمعرفة الأسعار.",
      "reviewsTitle": "ماذا يقول العملاء",
      "reviewLabel": "تقييم من جوجل",
      "mentionsNote": "أكثر ما يذكره العملاء في تقييماتهم على جوجل.",
      "readMore": "اقرأ التقييمات على جوجل",
      "visitTitle": "زورونا",
      "addressLabel": "العنوان",
      "hoursLabel": "ساعات العمل",
      "phoneLabel": "الهاتف وواتساب",
      "closingTitle": "احجز فحص النظر عبر واتساب",
      "footerContact": "تواصل معنا",
      "credit": "تصميم الموقع: {credit}",
      "pageTitle": "الرمز للبصريات الكرامة · نظارات وفحص نظر · الكرامة",
      "metaDescription": "فحص النظر (ومنه الفحص المعتمد من هيئة الطرق والمواصلات)، الإطارات، العدسات، النظارات الطبية المستعجلة والمساعدة في مطالبات التأمين، في مبنى الشريفي 3 بالكرامة. تقييم 4.9 على جوجل.",
      "demoBanner": "نسخة تجريبية – صُممت خصيصًا لـالرمز للبصريات الكرامة. ليست الموقع الرسمي بعد.",
      "heroName": "الرمز للبصريات",
      "waMessage": "مرحبًا الرمز للبصريات، وجدتكم عبر موقعكم الإلكتروني وأودّ الاستفسار عن خدماتكم.",
      "waMessageAbout": "مرحبًا الرمز للبصريات، وجدتكم عبر موقعكم الإلكتروني وأودّ الاستفسار عن {service}.",
      "waAria": "راسل الرمز للبصريات الكرامة عبر واتساب",
      "mapTitle": "خريطة توضح موقع الرمز للبصريات الكرامة",
      "footerName": "الرمز للبصريات الكرامة",
      "groups": {
        "g0": "كل الأيام عدا الأربعاء",
        "g1": "الأربعاء"
      },
      "mentions": [],
      "brandName": "الرمز للبصريات",
      "heroPlace": "محل رقم 6، مبنى الشريفي 3، الكرامة",
      "addressLines": [
        "محل رقم 6، مبنى الشريفي 3",
        "الكرامة، دبي"
      ],
      "servicesIntro": "اضغط على أي خدمة لتسألنا عنها عبر واتساب.",
      "footerTag": "محل نظارات ومركز فحص نظر معتمد من هيئة الطرق والمواصلات في الكرامة، دبي.",
      "intro": "فحص النظر (ومنه الفحص المعتمد من هيئة الطرق والمواصلات)، الإطارات، العدسات، النظارات الطبية المستعجلة والمساعدة في مطالبات التأمين، في مبنى الشريفي 3 بالكرامة.",
      "kicker": "نظارات وفحص نظر · الكرامة"
    }
  }
};

/* =====================================================================
   SITE LOGIC — no need to edit below this line.
   ===================================================================== */
(function () {
  "use strict";

  const LANG_KEY = "site-lang";
  const root = document.documentElement;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let lang = "en";
  try {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved === "en" || saved === "ar") lang = saved;
  } catch (e) { /* storage unavailable: English */ }

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const t = () => SHOP.text[lang];

  function fmt(str, extra) {
    let out = String(str)
      .replace(/\{rating\}/g, SHOP.rating.value)
      .replace(/\{count\}/g, SHOP.rating.count)
      .replace(/\{credit\}/g, SHOP.credit)
      .replace(/\{name\}/g, SHOP.name);
    if (extra) for (const [k, v] of Object.entries(extra)) out = out.split("{" + k + "}").join(v);
    return out;
  }

  function el(tag, attrs, children) {
    const node = document.createElement(tag);
    if (attrs) for (const [k, v] of Object.entries(attrs)) {
      if (v === null || v === undefined || v === false) continue;
      if (k === "class") node.className = v;
      else if (k === "text") node.textContent = v;
      else node.setAttribute(k, v === true ? "" : v);
    }
    (children || []).forEach((c) => node.append(c));
    return node;
  }
  const ltr = (text) => el("span", { dir: "ltr", class: "ltr num", text });
  const ltrIfEn = (text) => (lang === "ar" ? document.createTextNode(text) : ltr(text));

  function waUrl(service) {
    const tx = t();
    const msg = service ? fmt(tx.waMessageAbout, { service }) : tx.waMessage;
    return "https://wa.me/" + SHOP.whatsappNumber + "?text=" + encodeURIComponent(msg);
  }

  /* ---------- hours + open / closed badge, in the shop's time zone ---------- */
  const toMin = (hhmm) => { const [h, m] = hhmm.split(":").map(Number); return h * 60 + m; };
  // A day is null (closed), one range ["HH:MM","HH:MM"], or several [["09:30","14:00"],["17:00","22:30"]].
  // A closing time after midnight is written past 24:00, e.g. "24:30" = 12:30 AM the next day.
  const rangesOf = (day) => { const h = SHOP.hours[day]; if (!h) return []; return typeof h[0] === "string" ? [h] : h; };

  function timeLabel(hhmm) {
    const tx = t();
    const [h, m] = hhmm.split(":").map(Number);
    const hh = h % 24;
    if (hh === 0 && m === 0 && tx.midnight) return tx.midnight;
    const h12 = hh % 12 === 0 ? 12 : hh % 12;
    return h12 + (m ? ":" + String(m).padStart(2, "0") : "") + " " + (hh < 12 ? tx.am : tx.pm);
  }

  function nowInShopTZ() {
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone: SHOP.timeZone, weekday: "short", hour: "2-digit", minute: "2-digit", hourCycle: "h23",
    }).formatToParts(new Date());
    const get = (type) => parts.find((p) => p.type === type).value;
    const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday"));
    return { day, min: Number(get("hour")) * 60 + Number(get("minute")) };
  }

  function shopStatus() {
    const now = nowInShopTZ();
    // still open from yesterday's late shift (closing time past 24:00)?
    const yday = (now.day + 6) % 7;
    const late = rangesOf(yday).find((r) => toMin(r[1]) > 1440 && now.min < toMin(r[1]) - 1440);
    if (late) return { open: true, key: "statusOpen", time: late[1] };
    const today = rangesOf(now.day);
    const cur = today.find((r) => now.min >= toMin(r[0]) && now.min < toMin(r[1]));
    if (cur) return { open: true, key: "statusOpen", time: cur[1] };
    const next = today.find((r) => now.min < toMin(r[0]));
    if (next) {
      const onBreak = today.some((r) => now.min >= toMin(r[1]));
      return { open: false, key: onBreak ? "statusReopens" : "statusOpensToday", time: next[0] };
    }
    for (let i = 1; i <= 7; i++) {
      const d = (now.day + i) % 7;
      const r = rangesOf(d);
      if (r.length) return { open: false, key: i === 1 ? "statusOpensTomorrow" : "statusOpensLater", time: r[0][0], day: d };
    }
    return { open: false, key: "statusOpensToday", time: "00:00" };
  }

  function rangeLabels(day) {
    const r = rangesOf(day);
    return r.length ? r.map((h) => timeLabel(h[0]) + " – " + timeLabel(h[1])) : [t().closed];
  }

  function renderStatus() {
    const tx = t();
    const s = shopStatus();
    const text = fmt(tx[s.key], { time: timeLabel(s.time), day: s.day !== undefined ? tx.days[s.day] : "" });
    $$(".js-status").forEach((node) => {
      node.dataset.state = s.open ? "open" : "closed";
      $(".status-text", node).textContent = text;
    });
    const today = nowInShopTZ().day;
    $$(".js-hours tr").forEach((row) => {
      const isToday = row.dataset.days.split(",").map(Number).includes(today);
      row.classList.toggle("is-today", isToday);
      const flag = $(".today-flag", row);
      if (flag) flag.hidden = !isToday;
    });
  }

  function renderHours() {
    const tx = t();
    $(".js-hours").replaceChildren(el("tbody", null, SHOP.hoursGroups.map((g) => el("tr", { "data-days": g.days.join(",") }, [
      el("th", { scope: "row" }, [document.createTextNode(tx.groups[g.key] + " "), el("span", { class: "today-flag", text: tx.today, hidden: true })]),
      el("td", null, rangeLabels(g.days[0]).map((l) => el("span", { class: "range" }, [ltrIfEn(l)]))),
    ]))));
  }

  /* ---------- render everything for the current language ---------- */
  function renderText() {
    const tx = t();
    $$("[data-t]").forEach((node) => { if (tx[node.dataset.t] !== undefined) node.textContent = fmt(tx[node.dataset.t]); });
    $$("[data-shop]").forEach((node) => { node.textContent = SHOP[node.dataset.shop]; });
    $$("[data-t-aria]").forEach((node) => { node.setAttribute("aria-label", fmt(tx[node.dataset.tAria])); });

    $$(".js-tel").forEach((a) => { a.href = SHOP.phoneHref; });
    $$(".js-wa").forEach((a) => { a.href = waUrl(); a.target = "_blank"; a.rel = "noopener"; });
    $$(".js-dir").forEach((a) => { a.href = SHOP.directionsUrl; a.target = "_blank"; a.rel = "noopener"; });
    $$(".js-reviews").forEach((a) => { a.href = SHOP.reviewsUrl; a.target = "_blank"; a.rel = "noopener"; });
    $$(".js-newtab").forEach((n) => { n.textContent = " " + tx.newTab; });
    $$(".js-phone").forEach((n) => { n.replaceChildren(ltr(SHOP.phoneDisplay)); });

    document.title = tx.pageTitle;
    const md = $('meta[name="description"]');
    if (md) md.setAttribute("content", tx.metaDescription);
    const banner = $(".demo-banner");
    if (banner) banner.hidden = !SHOP.showDemoBanner;

    // photo alt text follows the language
    $$(".js-img").forEach((img) => { const p = SHOP.photos[img.dataset.img]; if (p) img.alt = p[lang]; });

    // optional story paragraphs + facts (intro section)
    $(".js-story").replaceChildren(...(tx.story || []).map((p) => el("p", { text: p })));
    $(".js-facts").replaceChildren(...(tx.facts || []).map((f) => el("div", null, [el("dt", { text: f.label }), el("dd", { text: f.value })])));

    // services
    $(".js-services").replaceChildren(...SHOP.services.map((s, i) => el("li", { class: "service reveal" }, [
      el("span", { class: "service-num", "aria-hidden": "true", text: String(i + 1).padStart(2, "0") }),
      el("h3", { class: "service-name", text: s[lang].name }),
      el("p", { class: "service-desc", text: s[lang].desc }),
      el("a", { class: "service-link", href: waUrl(s[lang].ask), target: "_blank", rel: "noopener" }, [
        el("span", { text: tx.quoteCta }),
        el("span", { class: "visually-hidden", text: " – " + s[lang].name + " " + tx.newTab }),
      ]),
    ])));

    // reviews: real Google quotes (kept in English), or a plain summary of what reviewers mention
    const list = $(".js-reviews-list");
    if (SHOP.reviews.length) {
      $(".js-reviews-sub").textContent = "";
      list.replaceChildren(...SHOP.reviews.map((r) => el("li", { class: "review reveal" }, [
        el("figure", null, [
          el("blockquote", { lang: "en", dir: "ltr" }, [el("p", { text: "“" + r + "”" })]),
          el("figcaption", { text: tx.reviewLabel }),
        ]),
      ])));
    } else {
      $(".js-reviews-sub").textContent = tx.mentionsNote;
      list.replaceChildren(...tx.mentions.map((m) => el("li", { class: "review reveal" }, [el("p", { class: "mention", text: m })])));
    }

    $$(".js-address").forEach((n) => n.replaceChildren(...tx.addressLines.map((l) => el("span", { text: l }))));
    renderHours();

    const map = $(".js-map");
    if (!map.getAttribute("src")) map.setAttribute("src", SHOP.mapEmbedUrl);
    map.title = tx.mapTitle;

    $(".js-year").textContent = new Date().getFullYear();
    $$("[data-lang]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
    renderStatus();
    observeReveals();
  }

  function applyLang(next, persist) {
    lang = next;
    root.lang = next;
    root.dir = next === "ar" ? "rtl" : "ltr";
    renderText();
    if (persist) { try { localStorage.setItem(LANG_KEY, next); } catch (e) { /* ignore */ } }
  }

  /* ---------- structured data (built from SHOP) ---------- */
  function addJsonLd() {
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const hhmm = (x) => { const m = toMin(x) % 1440; return String(Math.floor(m / 60)).padStart(2, "0") + ":" + String(m % 60).padStart(2, "0"); };
    const data = {
      "@context": "https://schema.org",
      "@type": SHOP.schemaType,
      name: SHOP.name,
      url: SHOP.siteUrl,
      image: SHOP.siteUrl + "images/og-image.jpg",
      telephone: SHOP.phoneIntl,
      address: { "@type": "PostalAddress", streetAddress: SHOP.address.street, addressLocality: SHOP.address.city, addressCountry: SHOP.address.country },
      hasMap: SHOP.directionsUrl,
      openingHoursSpecification: SHOP.hoursGroups.flatMap((g) => rangesOf(g.days[0]).map((r) => ({
        "@type": "OpeningHoursSpecification", dayOfWeek: g.days.map((d) => dayNames[d]),
        opens: hhmm(r[0]), closes: r[1] === "24:00" ? "23:59" : hhmm(r[1]),
      }))),
      aggregateRating: { "@type": "AggregateRating", ratingValue: SHOP.rating.value, bestRating: "5", reviewCount: String(SHOP.rating.count) },
      makesOffer: SHOP.services.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.en.name } })),
    };
    document.head.append(el("script", { type: "application/ld+json", text: JSON.stringify(data) }));
  }

  /* ---------- fade-in on scroll ---------- */
  let io = null;
  function observeReveals() {
    if (reduceMotion || !("IntersectionObserver" in window)) { $$(".reveal").forEach((n) => n.classList.add("is-in")); return; }
    if (!io) io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } });
    }, { rootMargin: "0px 0px -6% 0px", threshold: 0.06 });
    $$(".reveal:not(.is-in)").forEach((n) => io.observe(n));
  }

  /* ---------- floating WhatsApp button appears after the hero ---------- */
  const fab = $(".fab");
  const hero = $(".hero");
  let ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => { fab.classList.toggle("is-on", window.scrollY > hero.offsetHeight * 0.7); ticking = false; });
  }

  if (!reduceMotion) root.classList.add("motion");
  applyLang(lang, false);
  addJsonLd();
  $$("[data-lang]").forEach((b) => b.addEventListener("click", () => { if (b.dataset.lang !== lang) applyLang(b.dataset.lang, true); }));
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  setInterval(renderStatus, 60 * 1000);
})();
