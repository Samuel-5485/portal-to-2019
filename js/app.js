(() => {
  "use strict";

  const ETHIOPIC_EPOCH = 1723856;
  const NEW_YEAR_MS = Date.parse("2026-09-11T00:00:00+03:00");
  const MONTHS_EN = [
    "Meskerem", "Tikimt", "Hidar", "Tahsas", "Tir", "Yekatit", "Megabit",
    "Miazia", "Ginbot", "Sene", "Hamle", "Nehasse", "Pagume"
  ];
  const MONTHS_AM = [
    "መስከረም", "ጥቅምት", "ኅዳር", "ታኅሣሥ", "ጥር", "የካቲት", "መጋቢት",
    "ሚያዝያ", "ግንቦት", "ሰኔ", "ሐምሌ", "ነሐሴ", "ጳጉሜ"
  ];
  const POEMS_EN = [
    "Adey Abeba opened",
    "hills kept their gold",
    "coffee smoke before sunrise",
    "highlands held their breath",
    "dry wind learned your name",
    "first warmth returned",
    "fields prepared",
    "rain was only a rumor",
    "green came back loud",
    "rivers remembered banks",
    "rain wrote on the roof",
    "last storm learned to leave",
    "hidden month, quiet threshold"
  ];
  const POEMS_AM = [
    "አደይ አበባ ተከፈተ",
    "ተራሮች ወርቃቸውን ጠበቁ",
    "የቡና ጭስ ከፀሐይ መውጣት በፊት",
    "ደጋው እስትንፋሱን ያዘ",
    "ደረቅ ነፋስ ስምህን ተማረ",
    "የመጀመሪያው ሙቀት ተመለሰ",
    "እርሻዎች ተዘጋጁ",
    "ዝናብ ወሬ ብቻ ነበር",
    "አረንጓዴ በጩኸት ተመለሰ",
    "ወንዞች ዳርቻቸውን አሰቡ",
    "ዝናብ በጣሪያው ላይ ጻፈ",
    "የመጨረሻው ማዕበል መሄድ ተማረ",
    "የተሸሸገው ወር ጸጥ ያለ ደረጃ"
  ];

  const I18N = {
    en: {
      soundOff: "Sound off",
      soundOn: "Sound on",
      ethioOff: "Switch to Ethiopian Time",
      ethioOn: "Return to the night",
      eyebrow: "እንቁጣጣሽ · a door in the year",
      title: "Portal to 2019",
      lede: "The highlands are eight years younger until midnight. Then the gold opens.",
      ethYear: "Ethiopian year",
      days: "days",
      hours: "hours",
      minutes: "minutes",
      seconds: "seconds",
      eatNote: "to Meskerem 1 · Friday, Africa/Addis_Ababa midnight",
      preview: "Preview the crossing",
      bornTitle: "The other calendar, quietly",
      bornHint: "A small converter. It does not make the card.",
      nameLabel: "Name",
      namePh: "Name",
      bdayLabel: "Gregorian birthday",
      shareTitle: "Send Enkutatash",
      shareHint: "The gold is for someone. Choose who, then a blessing.",
      whoLabel: "For",
      fromLabel: "From",
      toLabel: "To",
      endingLabel: "Amharic ending",
      download: "Download card",
      telegram: "Telegram",
      twitter: "X",
      copy: "Copy",
      copied: "Copied",
      fromPh: "Your name",
      who: {
        family: "Family",
        mother: "Mother",
        father: "Father",
        sibling: "Sibling",
        friend: "Friend",
        girlfriend: "Girlfriend",
        boyfriend: "Boyfriend",
        couple: "Couple",
        everyone: "Everyone"
      },
      toPh: {
        family: "our family",
        mother: "Mom",
        father: "Dad",
        sibling: "their name",
        friend: "their name",
        girlfriend: "her name",
        boyfriend: "his name",
        couple: "us",
        everyone: "everyone"
      },
      rel: {
        family: "Family",
        mother: "Mother",
        father: "Father",
        sibling: "Sibling",
        friend: "Friend",
        girlfriend: "Girlfriend",
        boyfriend: "Boyfriend",
        couple: "Couple",
        everyone: "Everyone"
      },
      footer1: "The calendars differ because Ethiopia counts from the Annunciation, not from a later European reckoning of the Incarnation.",
      footer2: "Adey Abeba is the new-year flower — yellow as the first light on the hills."
    },
    am: {
      soundOff: "ድምፅ ጠፍቷል",
      soundOn: "ድምፅ በርቷል",
      ethioOff: "ወደ የኢትዮጵያ ሰዓት ቀይር",
      ethioOn: "ወደ ሌሊቱ ተመለስ",
      eyebrow: "Enkutatash · በዓመቱ ውስጥ በር",
      title: "መግቢያ ወደ ፳፻፲፱",
      lede: "ደጋው እስከ እኩለ ሌሊት ድረስ በስምንት ዓመት ይወጣል። ከዚያ ወርቁ ይከፈታል።",
      ethYear: "የኢትዮጵያ ዓመት",
      days: "ቀናት",
      hours: "ሰዓታት",
      minutes: "ደቂቃዎች",
      seconds: "ሰከንዶች",
      eatNote: "እስከ መስከረም 1 · አርብ፣ እኩለ ሌሊት አዲስ አበባ",
      preview: "የመሻገሪያውን ቅድመ እይታ",
      bornTitle: "ሌላው ቀን መቁጠሪያ፣ በጸጥታ",
      bornHint: "ትንሽ መቀየሪያ። ካርዱን አይሰራም።",
      nameLabel: "ስም",
      namePh: "ስም",
      bdayLabel: "የግሪጎሪያን ልደት",
      shareTitle: "እንቁጣጣሽ ላክ",
      shareHint: "ወርቁ ለአንድ ሰው ነው። ማንን እንደሆነ ምረጥ፣ ከዚያ በረከት።",
      whoLabel: "ለ",
      fromLabel: "ከ",
      toLabel: "ለ",
      endingLabel: "የአማርኛ መጨረሻ",
      download: "ካርድ አውርድ",
      telegram: "ቴሌግራም",
      twitter: "X",
      copy: "ቅዳ",
      copied: "ተቀድቷል",
      fromPh: "ስምህ",
      who: {
        family: "ቤተሰብ",
        mother: "እናት",
        father: "አባት",
        sibling: "ወንድም/እህት",
        friend: "ጓደኛ",
        girlfriend: "ፍቅረኛዬ",
        boyfriend: "ወዳጄ",
        couple: "እኛ",
        everyone: "ሁሉም"
      },
      toPh: {
        family: "እኛ",
        mother: "እናቴ",
        father: "አባቴ",
        sibling: "ስማቸው",
        friend: "ስማቸው",
        girlfriend: "ስሟ",
        boyfriend: "ስሙ",
        couple: "እኛ",
        everyone: "ሁላችሁ"
      },
      rel: {
        family: "ቤተሰብ",
        mother: "እናት",
        father: "አባት",
        sibling: "ወንድም/እህት",
        friend: "ጓደኛ",
        girlfriend: "ፍቅረኛ",
        boyfriend: "ወዳጅ",
        couple: "ጥንድ",
        everyone: "ሁሉም"
      },
      footer1: "ቀን መቁጠሪያዎቹ የሚለያዩት ኢትዮጵያ ከብስራተ ገብርኤል ስትቆጥር፣ በኋላ የመጣው አውሮፓዊ የትስብእት ሒሳብ ሳይሆን ነው።",
      footer2: "አደይ አበባ የአዲስ ዓመት አበባ ነው — በተራሮች ላይ እንደ መጀመሪያ ብርሃን ቢጫ።"
    }
  };

  const LS = {
    ethio: "portal2019-ethio",
    lang: "portal2019-lang",
    name: "portal2019-name",
    to: "portal2019-to",
    who: "portal2019-who",
    end: "portal2019-end",
    bless: "portal2019-bless"
  };

  const WHO = [
    { id: "family", end: "pl" },
    { id: "mother", end: "sh" },
    { id: "father", end: "hu" },
    { id: "sibling", end: "hu" },
    { id: "friend", end: "hu" },
    { id: "girlfriend", end: "sh" },
    { id: "boyfriend", end: "hu" },
    { id: "couple", end: "pl" },
    { id: "everyone", end: "pl" }
  ];
  const LOVE_WHO = new Set(["girlfriend", "boyfriend", "couple"]);
  const BLESSINGS = [
    {
      am: { hu: "እንኳን አደረሰህ", sh: "እንኳን አደረሰሽ", pl: "እንኳን አደረሳችሁ" },
      en: { hu: "You lived to see this day", sh: "You lived to see this day", pl: "You lived to see this day" }
    },
    {
      am: {
        hu: "አዲሱ ዓመት የሰላም፣ የፍቅርና የብልጽግና ዓመት ይሁንልህ",
        sh: "አዲሱ ዓመት የሰላም፣ የፍቅርና የብልጽግና ዓመት ይሁንልሽ",
        pl: "አዲሱ ዓመት የሰላም፣ የፍቅርና የብልጽግና ዓመት ይሁንላችሁ"
      },
      en: {
        hu: "May the new year be peace, love, and prosperity",
        sh: "May the new year be peace, love, and prosperity",
        pl: "May the new year be peace, love, and prosperity"
      }
    },
    {
      am: {
        hu: "እግዚአብሔር ዓመቱን የሰላምና የጤና ዓመት ያድርግልህ",
        sh: "እግዚአብሔር ዓመቱን የሰላምና የጤና ዓመት ያድርግልሽ",
        pl: "እግዚአብሔር ዓመቱን የሰላምና የጤና ዓመት ያድርግላችሁ"
      },
      en: {
        hu: "May God make the year one of peace and health",
        sh: "May God make the year one of peace and health",
        pl: "May God make the year one of peace and health"
      }
    },
    {
      am: {
        hu: "በዚህ አዲስ ዓመት ክፉ ነገር አይንካህ",
        sh: "በዚህ አዲስ ዓመት ክፉ ነገር አይንካሽ",
        pl: "በዚህ አዲስ ዓመት ክፉ ነገር አይንካችሁ"
      },
      en: {
        hu: "May no evil touch you",
        sh: "May no evil touch you",
        pl: "May no evil touch you"
      }
    },
    {
      am: {
        hu: "የመግባትና የመውጣት ዓመት ይሁንልህ",
        sh: "የመግባትና የመውጣት ዓመት ይሁንልሽ",
        pl: "የመግባትና የመውጣት ዓመት ይሁንላችሁ"
      },
      en: {
        hu: "A year of safely coming in and going out",
        sh: "A year of safely coming in and going out",
        pl: "A year of safely coming in and going out"
      }
    },
    {
      am: {
        hu: "እንቁጣጣሽ መልካም አዲስ ዓመት ይሁንልህ",
        sh: "እንቁጣጣሽ መልካም አዲስ ዓመት ይሁንልሽ",
        pl: "እንቁጣጣሽ መልካም አዲስ ዓመት ይሁንላችሁ"
      },
      en: {
        hu: "Happy Enkutatash, a blessed new year",
        sh: "Happy Enkutatash, a blessed new year",
        pl: "Happy Enkutatash, a blessed new year"
      }
    }
  ];

  const $ = (id) => document.getElementById(id);
  const yearEl = $("yearEl");
  const dateLine = $("dateLine");
  const shareLine = $("shareLine");
  const bornPoem = $("bornPoem");
  const fromInput = $("fromInput");
  const toInput = $("toInput");
  const bdayName = $("bdayName");
  const bdayInput = $("bdayInput");
  const langBtn = $("langBtn");
  const soundBtn = $("soundBtn");
  const ethioBtn = $("ethioBtn");
  const previewBtn = $("previewBtn");
  const whoRow = $("whoRow");
  const blessGrid = $("blessGrid");
  const togetherLine = $("togetherLine");

  let lang = localStorage.getItem(LS.lang) === "am" ? "am" : "en";
  let ethio = localStorage.getItem(LS.ethio) === "1";
  let previewed = false;
  let crossed = false;
  let soundOn = false;
  let audio = null;
  let who = WHO.some((w) => w.id === localStorage.getItem(LS.who)) ? localStorage.getItem(LS.who) : "family";
  let ending = ["hu", "sh", "pl"].includes(localStorage.getItem(LS.end)) ? localStorage.getItem(LS.end) : "pl";
  let blessIndex = Math.min(5, Math.max(0, Number(localStorage.getItem(LS.bless) || 5)));

  // Counts site visits, button taps, and return traffic from UTM.
  // Screenshots forwarded on Instagram or Telegram are invisible to us.
  function track(name) {
    try {
      if (typeof window.va === "function") window.va("event", { name });
    } catch (e) { /* ignore */ }
  }

  function canonicalUrl() {
    if (location.protocol === "file:") return "";
    const u = new URL(location.href);
    u.hash = "";
    ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"].forEach((k) => u.searchParams.delete(k));
    return u.toString();
  }

  function shareUrl(source) {
    const base = canonicalUrl();
    if (!base) return "";
    const u = new URL(base);
    u.searchParams.set("utm_source", source);
    u.searchParams.set("utm_medium", "share");
    u.searchParams.set("utm_campaign", "enkutatash2019");
    return u.toString();
  }

  function setSocialTags() {
    const abs = canonicalUrl();
    if (!abs) return;
    const ogUrl = document.querySelector('meta[property="og:url"]');
    const ogImg = document.querySelector('meta[property="og:image"]');
    const twImg = document.querySelector('meta[name="twitter:image"]');
    if (ogUrl) ogUrl.setAttribute("content", abs);
    const img = new URL("images/adey-abeba.png", abs).toString();
    if (ogImg && !/^https?:/i.test(ogImg.getAttribute("content") || "")) ogImg.setAttribute("content", img);
    if (twImg && !/^https?:/i.test(twImg.getAttribute("content") || "")) twImg.setAttribute("content", img);
  }
  let adeyImg = $("flowerAsset") || new Image();
  if (adeyImg && adeyImg.src) {
    const applyFlower = () => {
      document.documentElement.style.setProperty("--flower", `url("${adeyImg.src}")`);
    };
    if (adeyImg.complete) applyFlower();
    else adeyImg.addEventListener("load", applyFlower);
  }

  function isEthLeap(year) {
    return ((year % 4) + 4) % 4 === 3;
  }

  function gregorianToJDN(y, m, d) {
    const a = Math.floor((14 - m) / 12);
    const y2 = y + 4800 - a;
    const m2 = m + 12 * a - 3;
    return d + Math.floor((153 * m2 + 2) / 5) + 365 * y2 + Math.floor(y2 / 4) - Math.floor(y2 / 100) + Math.floor(y2 / 400) - 32045;
  }

  function jdnToEthiopic(jdn) {
    const era = jdn - ETHIOPIC_EPOCH;
    const cycle = Math.floor(era / 1461);
    const r = era - 1461 * cycle;
    const n = (r % 365) + 365 * Math.floor(r / 1460);
    const year = 4 * cycle + Math.floor(r / 365) - Math.floor(r / 1460);
    const month = Math.floor(n / 30) + 1;
    const day = (n % 30) + 1;
    return { year, month, day };
  }

  function gregorianToEthiopic(y, m, d) {
    return jdnToEthiopic(gregorianToJDN(y, m, d));
  }

  function nowInAddis() {
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone: "Africa/Addis_Ababa",
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hourCycle: "h23"
    }).formatToParts(new Date());
    const get = (type) => Number(parts.find((p) => p.type === type).value);
    return { y: get("year"), m: get("month"), d: get("day"), h: get("hour"), min: get("minute"), s: get("second") };
  }

  function remainingMs() {
    return NEW_YEAR_MS - Date.now();
  }

  function isCrossed() {
    return previewed || remainingMs() <= 0;
  }

  function displayYear(eth) {
    return isCrossed() ? Math.max(eth.year, 2019) : eth.year;
  }

  function monthName(month, language) {
    return (language === "am" ? MONTHS_AM : MONTHS_EN)[month - 1];
  }

  function formatEth(eth, language) {
    return `${monthName(eth.month, language)} ${eth.day}, ${eth.year}`;
  }

  function ethiopianAge(birth, today) {
    let age = today.year - birth.year;
    if (today.month < birth.month || (today.month === birth.month && today.day < birth.day)) age -= 1;
    return Math.max(0, age);
  }

  function t(key) {
    return I18N[lang][key];
  }

  function applyI18n() {
    document.documentElement.lang = lang === "am" ? "am" : "en";
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (I18N[lang][key]) el.textContent = I18N[lang][key];
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      el.placeholder = t(el.getAttribute("data-i18n-placeholder"));
    });
    langBtn.textContent = lang === "am" ? "EN" : "አማ";
    langBtn.setAttribute("aria-pressed", lang === "am" ? "true" : "false");
    soundBtn.textContent = soundOn ? t("soundOn") : t("soundOff");
    ethioBtn.textContent = ethio ? t("ethioOn") : t("ethioOff");
    ethioBtn.setAttribute("aria-pressed", ethio ? "true" : "false");
    fromInput.placeholder = t("fromPh");
    renderWho();
    renderBlessings();
    updateSharePreview();
  }

  function applyEthio() {
    document.body.classList.toggle("ethio", ethio);
  }

  function currentBlessing() {
    const b = BLESSINGS[blessIndex] || BLESSINGS[5];
    return { am: b.am[ending], en: b.en[ending] };
  }

  function isLoveWho() {
    return LOVE_WHO.has(who);
  }

  function composeShare(source) {
    const from = (fromInput.value || "").trim();
    const to = (toInput.value || "").trim();
    let line = "እንቁጣጣሽ መልካም አዲስ ዓመት 🌼";
    if (from && to) line = `ከ${from} ለ${to} — እንቁጣጣሽ መልካም አዲስ ዓመት 🌼`;
    else if (from) line = `ከ${from} — እንቁጣጣሽ መልካም አዲስ ዓመት 🌼`;
    else if (to) line = `ለ${to} — እንቁጣጣሽ መልካም አዲስ ዓመት 🌼`;
    const url = source ? shareUrl(source) : canonicalUrl();
    return { line, url, full: url ? `${line}\n${url}` : line };
  }

  function updateSharePreview() {
    const { line } = composeShare();
    shareLine.textContent = line;
    toInput.placeholder = I18N[lang].toPh[who] || "";
    togetherLine.hidden = !isLoveWho();
    document.querySelectorAll("#endingRow [data-end]").forEach((btn) => {
      btn.setAttribute("aria-pressed", btn.getAttribute("data-end") === ending ? "true" : "false");
    });
  }

  function renderWho() {
    whoRow.innerHTML = "";
    WHO.forEach((item) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "chip";
      btn.setAttribute("data-who", item.id);
      btn.setAttribute("aria-pressed", item.id === who ? "true" : "false");
      btn.textContent = I18N[lang].who[item.id];
      btn.addEventListener("click", () => {
        who = item.id;
        ending = item.end;
        localStorage.setItem(LS.who, who);
        localStorage.setItem(LS.end, ending);
        renderWho();
        renderBlessings();
        updateSharePreview();
      });
      whoRow.appendChild(btn);
    });
  }

  function renderBlessings() {
    blessGrid.innerHTML = "";
    BLESSINGS.forEach((b, i) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "bless-card";
      btn.setAttribute("role", "option");
      btn.setAttribute("aria-pressed", i === blessIndex ? "true" : "false");
      btn.innerHTML = `<strong>${b.am[ending]}</strong><span>${b.en[ending]}</span>`;
      btn.addEventListener("click", () => {
        blessIndex = i;
        localStorage.setItem(LS.bless, String(i));
        renderBlessings();
        track("blessing_selected");
      });
      blessGrid.appendChild(btn);
    });
  }

  function updateClock() {
    const addis = nowInAddis();
    const eth = gregorianToEthiopic(addis.y, addis.m, addis.d);
    crossed = isCrossed();
    document.body.classList.toggle("crossed", crossed);

    const year = displayYear(eth);
    yearEl.textContent = String(year);

    const en = formatEth(eth, "en");
    const am = formatEth(eth, "am");
    const gDate = new Intl.DateTimeFormat(lang === "am" ? "am-ET" : "en-GB", {
      timeZone: "Africa/Addis_Ababa",
      weekday: "long",
      day: "numeric",
      month: "short",
      year: "numeric"
    }).format(new Date());

    if (ethio) {
      dateLine.innerHTML = lang === "am"
        ? `${am}<br>${en}`
        : `${en} · ${am}`;
    } else {
      dateLine.textContent = lang === "am"
        ? `${gDate} · ገና ${eth.year}`
        : `${gDate} · still ${eth.year} in the highlands`;
    }

    let ms = remainingMs();
    if (ms <= 0) {
      $("cdD").textContent = "0";
      $("cdH").textContent = "0";
      $("cdM").textContent = "0";
      $("cdS").textContent = "0";
      if (!document.body.classList.contains("crossed")) startCrossing(false);
    } else {
      const s = Math.floor(ms / 1000);
      $("cdD").textContent = String(Math.floor(s / 86400));
      $("cdH").textContent = String(Math.floor((s % 86400) / 3600));
      $("cdM").textContent = String(Math.floor((s % 3600) / 60));
      $("cdS").textContent = String(s % 60);
    }

    renderBorn();
  }

  function renderBorn() {
    const raw = bdayInput.value;
    if (!raw) {
      bornPoem.hidden = true;
      bornPoem.textContent = "";
      return;
    }
    const [y, m, d] = raw.split("-").map(Number);
    if (!y || !m || !d) return;
    const birth = gregorianToEthiopic(y, m, d);
    const addis = nowInAddis();
    const todayEth = gregorianToEthiopic(addis.y, addis.m, addis.d);
    const age = ethiopianAge(birth, isCrossed() ? { ...todayEth, year: Math.max(todayEth.year, 2019) } : todayEth);
    const leap = isEthLeap(birth.year);
    const rareSixth = birth.month === 13 && birth.day === 6;
    const poem = lang === "am" ? POEMS_AM[birth.month - 1] : POEMS_EN[birth.month - 1];
    const name = (bdayName.value || "").trim();
    const who = name || (lang === "am" ? "አንተ" : "You");
    const enDate = formatEth(birth, "en");
    const amDate = formatEth(birth, "am");

    let extra = "";
    if (rareSixth) {
      extra = lang === "am"
        ? " በጳጉሜ ስድስተኛው ብርቅ ቀን — የሊፕ ዓመት ደረጃ።"
        : " Born on Pagume’s rare 6th day — the leap threshold.";
    } else if (leap) {
      extra = lang === "am"
        ? ` ${birth.year} የሊፕ ዓመት ነበር፤ ጳጉሜ ስድስት ቀናት ነበሩት።`
        : ` ${birth.year} was a leap year: Pagume held a 6th day.`;
    }

    bornPoem.hidden = false;
    bornPoem.innerHTML = lang === "am"
      ? `${who} በ ${amDate} ተወለደ — ${enDate}.<br>የኢትዮጵያ ዕድሜ፦ ${age}.<em>በ${poem} ዓመት ተወለድህ።${extra}</em>`
      : `${who} arrived on ${enDate} · ${amDate}.<br>Ethiopian age: ${age}.<em>You were born in the year of ${poem}.${extra}</em>`;
  }

  function spawnBlooms() {
    const root = $("blooms");
    root.innerHTML = "";
    const n = 16;
    for (let i = 0; i < n; i++) {
      const el = document.createElement("i");
      el.className = "bloom";
      const angle = (Math.PI * 2 * i) / n + Math.random() * 0.3;
      const dist = 90 + Math.random() * 160;
      el.style.setProperty("--dx", `${Math.cos(angle) * dist}px`);
      el.style.setProperty("--dy", `${Math.sin(angle) * dist - 40}px`);
      el.style.setProperty("--s", (0.7 + Math.random() * 1.1).toFixed(2));
      el.style.setProperty("--r", `${Math.floor(Math.random() * 80 - 40)}deg`);
      el.style.backgroundPosition = `${20 + Math.random() * 60}% ${20 + Math.random() * 60}%`;
      el.style.animationDelay = `${(i * 0.04).toFixed(2)}s`;
      root.appendChild(el);
    }
  }

  function startCrossing(isPreview) {
    if (document.body.classList.contains("crossed")) return;
    if (isPreview) previewed = true;
    crossed = true;
    document.body.classList.add("crossed");
    spawnBlooms();
    burstFireworks();
    if (soundOn) playCrossingTones();
  }

  /* ---- Web Audio (original, no files) ---- */
  function ensureAudio() {
    if (audio) return audio;
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const master = ctx.createGain();
    master.gain.value = 0.18;
    master.connect(ctx.destination);
    audio = { ctx, master, rain: null };
    return audio;
  }

  function makeNoiseBuffer(ctx) {
    const len = ctx.sampleRate * 2;
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;
    return buf;
  }

  function startRain() {
    const a = ensureAudio();
    if (a.rain || !soundOn || ethio) return;
    const src = a.ctx.createBufferSource();
    src.buffer = makeNoiseBuffer(a.ctx);
    src.loop = true;
    const filter = a.ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.value = 1400;
    filter.Q.value = 0.55;
    const g = a.ctx.createGain();
    g.gain.value = 0.22;
    src.connect(filter);
    filter.connect(g);
    g.connect(a.master);
    src.start();
    a.rain = { src, g };
  }

  function stopRain() {
    if (!audio || !audio.rain) return;
    try { audio.rain.src.stop(); } catch (e) { /* ignore */ }
    audio.rain = null;
  }

  function playCrossingTones() {
    const a = ensureAudio();
    const notes = [392, 494, 587, 784, 659];
    notes.forEach((freq, i) => {
      const osc = a.ctx.createOscillator();
      const g = a.ctx.createGain();
      osc.type = i % 2 ? "triangle" : "sine";
      osc.frequency.value = freq;
      const t0 = a.ctx.currentTime + i * 0.22;
      g.gain.setValueAtTime(0, t0);
      g.gain.linearRampToValueAtTime(0.12, t0 + 0.05);
      g.gain.exponentialRampToValueAtTime(0.001, t0 + 1.4);
      osc.connect(g);
      g.connect(a.master);
      osc.start(t0);
      osc.stop(t0 + 1.5);
    });
  }

  function syncSound() {
    if (!soundOn) {
      stopRain();
      return;
    }
    ensureAudio().ctx.resume();
    if (ethio) stopRain();
    else startRain();
  }

  /* ---- Rain + fireworks canvases ---- */
  const rainCanvas = $("rain");
  const fireCanvas = $("fireworks");
  const rainCtx = rainCanvas.getContext("2d");
  const fireCtx = fireCanvas.getContext("2d");
  const drops = [];
  const sparks = [];

  function resizeFx() {
    [rainCanvas, fireCanvas].forEach((c) => {
      c.width = window.innerWidth;
      c.height = window.innerHeight;
    });
  }

  function seedRain() {
    drops.length = 0;
    const n = Math.min(140, Math.floor(window.innerWidth / 4));
    for (let i = 0; i < n; i++) {
      drops.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        l: 8 + Math.random() * 14,
        v: 6 + Math.random() * 8
      });
    }
  }

  function burstFireworks() {
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight * 0.38;
    const colors = ["#ffe08a", "#ffd700", "#f4ead4", "#7cffb2", "#ff6b5b", "#ffffff"];
    for (let b = 0; b < 5; b++) {
      const ox = cx + (Math.random() - 0.5) * 160;
      const oy = cy + (Math.random() - 0.5) * 80;
      for (let i = 0; i < 48; i++) {
        const ang = (Math.PI * 2 * i) / 48;
        const sp = 1.4 + Math.random() * 3.2;
        sparks.push({
          x: ox, y: oy,
          vx: Math.cos(ang) * sp,
          vy: Math.sin(ang) * sp - 0.6,
          life: 1,
          color: colors[(i + b) % colors.length]
        });
      }
    }
  }

  function tickFx() {
    rainCtx.clearRect(0, 0, rainCanvas.width, rainCanvas.height);
    fireCtx.clearRect(0, 0, fireCanvas.width, fireCanvas.height);

    if (!ethio) {
      rainCtx.strokeStyle = "rgba(210, 220, 255, 0.28)";
      rainCtx.lineWidth = 1;
      rainCtx.beginPath();
      drops.forEach((d) => {
        rainCtx.moveTo(d.x, d.y);
        rainCtx.lineTo(d.x + 0.6, d.y + d.l);
        d.y += d.v;
        d.x += 0.35;
        if (d.y > rainCanvas.height) {
          d.y = -12;
          d.x = Math.random() * rainCanvas.width;
        }
      });
      rainCtx.stroke();
    }

    for (let i = sparks.length - 1; i >= 0; i--) {
      const p = sparks[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.03;
      p.life -= 0.012;
      fireCtx.globalAlpha = Math.max(0, p.life);
      fireCtx.fillStyle = p.color;
      fireCtx.beginPath();
      fireCtx.arc(p.x, p.y, 2.2, 0, Math.PI * 2);
      fireCtx.fill();
      if (p.life <= 0) sparks.splice(i, 1);
    }
    fireCtx.globalAlpha = 1;
    requestAnimationFrame(tickFx);
  }

  /* ---- Share card 1080x1350 ---- */
  function drawDaisy(ctx, x, y, r) {
    ctx.save();
    ctx.translate(x, y);
    ctx.fillStyle = "#f4c430";
    for (let i = 0; i < 10; i++) {
      ctx.rotate(Math.PI / 5);
      ctx.beginPath();
      ctx.ellipse(0, r * 0.55, r * 0.18, r * 0.55, 0, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.fillStyle = "#3d2b1f";
    ctx.beginPath();
    ctx.arc(0, 0, r * 0.22, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  function wrapText(ctx, text, x, y, maxW, lineH) {
    const words = String(text || "").split(/\s+/).filter(Boolean);
    const lines = [];
    let line = "";
    const pushChars = (token) => {
      let chunk = "";
      for (const ch of token) {
        const test = chunk + ch;
        if (ctx.measureText(test).width > maxW && chunk) {
          lines.push(chunk);
          chunk = ch;
        } else chunk = test;
      }
      return chunk;
    };
    words.forEach((w) => {
      const test = line ? `${line} ${w}` : w;
      if (ctx.measureText(test).width > maxW) {
        if (line) lines.push(line);
        line = ctx.measureText(w).width > maxW ? pushChars(w) : w;
      } else line = test;
    });
    if (line) lines.push(line);
    lines.forEach((ln, i) => ctx.fillText(ln, x, y + i * lineH));
    return lines.length;
  }

  function coverImage(ctx, img, x, y, w, h) {
    const ir = img.naturalWidth / img.naturalHeight;
    const r = w / h;
    let dw = w;
    let dh = h;
    let dx = x;
    let dy = y;
    if (ir > r) {
      dw = h * ir;
      dx = x - (dw - w) / 2;
    } else {
      dh = w / ir;
      dy = y - (dh - h) / 2;
    }
    ctx.drawImage(img, dx, dy, dw, dh);
  }

  function paintShareCard() {
    const canvas = $("shareCard");
    const ctx = canvas.getContext("2d");
    const W = 1080;
    const H = 1350;
    ctx.clearRect(0, 0, W, H);

    if (adeyImg.complete && adeyImg.naturalWidth) {
      coverImage(ctx, adeyImg, 0, 0, W, H);
    } else {
      ctx.fillStyle = "#1b4a28";
      ctx.fillRect(0, 0, W, H);
    }

    const veil = ctx.createLinearGradient(0, 0, 0, H);
    veil.addColorStop(0, "rgba(7, 18, 12, 0.55)");
    veil.addColorStop(0.38, "rgba(22, 53, 31, 0.42)");
    veil.addColorStop(0.72, "rgba(18, 40, 22, 0.55)");
    veil.addColorStop(1, "rgba(10, 24, 14, 0.72)");
    ctx.fillStyle = veil;
    ctx.fillRect(0, 0, W, H);

    ctx.strokeStyle = "rgba(255, 213, 106, 0.9)";
    ctx.lineWidth = 7;
    ctx.beginPath();
    ctx.arc(W / 2, 268, 168, 0, Math.PI * 2);
    ctx.stroke();
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(W / 2, 268, 132, 0, Math.PI * 2);
    ctx.stroke();
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(W / 2, 268, 104, 0, Math.PI * 2);
    ctx.stroke();

    ctx.textAlign = "center";
    ctx.fillStyle = "#ffe9a8";
    ctx.font = "600 28px 'Noto Sans Ethiopic', sans-serif";
    ctx.fillText("እንቁጣጣሽ", W / 2, 118);
    ctx.font = "700 148px 'Cormorant Garamond', serif";
    ctx.fillText("2019", W / 2, 328);

    const from = (fromInput.value || "").trim();
    const to = (toInput.value || "").trim();
    ctx.fillStyle = "#fff8e7";
    ctx.font = "600 36px 'Cormorant Garamond', 'Noto Sans Ethiopic', serif";
    if (from) ctx.fillText(`ከ ${from}`, W / 2, 470);
    if (to) ctx.fillText(`ለ ${to}`, W / 2, from ? 518 : 470);

    ctx.fillStyle = "rgba(255, 213, 106, 0.95)";
    ctx.font = "500 22px Outfit, 'Noto Sans Ethiopic', sans-serif";
    const relY = from && to ? 562 : from || to ? 518 : 470;
    ctx.fillText(I18N[lang].rel[who], W / 2, relY);

    ctx.strokeStyle = "rgba(255, 213, 106, 0.45)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(180, relY + 28);
    ctx.lineTo(900, relY + 28);
    ctx.stroke();

    const bless = currentBlessing();
    ctx.fillStyle = "#fff8e7";
    ctx.font = "700 48px 'Noto Sans Ethiopic', sans-serif";
    const amLines = wrapText(ctx, bless.am, W / 2, relY + 100, 900, 62);
    ctx.fillStyle = "rgba(255, 233, 168, 0.92)";
    ctx.font = "italic 600 32px 'Cormorant Garamond', serif";
    const enStart = relY + 100 + amLines * 62 + 18;
    wrapText(ctx, bless.en, W / 2, enStart, 900, 42);

    if (isLoveWho()) {
      ctx.fillStyle = "#ffe38a";
      ctx.font = "600 34px 'Noto Sans Ethiopic', sans-serif";
      ctx.fillText("2019ን አብረን እንግባ", W / 2, 1188);
      ctx.fillStyle = "#efe2c2";
      ctx.font = "italic 500 26px 'Cormorant Garamond', serif";
      ctx.fillText("This year we walk in together", W / 2, 1230);
    }

    [[140, 1240, 36], [940, 1260, 42], [200, 1300, 28], [880, 1310, 32]].forEach(([x, y, r]) => {
      drawDaisy(ctx, x, y, r);
    });

    return canvas;
  }

  async function downloadCard() {
    track("card_download");
    const canvas = paintShareCard();
    const a = document.createElement("a");
    a.download = "enkutatash-2019.png";
    a.href = canvas.toDataURL("image/png");
    a.click();
  }

  function openShare(url) {
    window.open(url, "_blank", "noopener,noreferrer");
  }

  function shareTelegram() {
    track("share_telegram");
    const { line, url } = composeShare("telegram");
    const u = new URL("https://t.me/share/url");
    u.searchParams.set("url", url || line);
    u.searchParams.set("text", line);
    openShare(u.toString());
  }

  function shareX() {
    track("share_x");
    const { line, url } = composeShare("x");
    const u = new URL("https://twitter.com/intent/tweet");
    u.searchParams.set("text", url ? `${line}\n${url}` : line);
    openShare(u.toString());
  }

  async function copyLine() {
    track("share_copy");
    const { full } = composeShare("copy");
    try {
      await navigator.clipboard.writeText(full);
    } catch (e) {
      /* ignore */
    }
    const prev = t("copy");
    $("copyBtn").textContent = t("copied");
    setTimeout(() => { $("copyBtn").textContent = prev; }, 1400);
  }

  /* ---- events ---- */
  langBtn.addEventListener("click", () => {
    lang = lang === "en" ? "am" : "en";
    localStorage.setItem(LS.lang, lang);
    applyI18n();
    updateClock();
  });

  ethioBtn.addEventListener("click", () => {
    ethio = !ethio;
    localStorage.setItem(LS.ethio, ethio ? "1" : "0");
    applyEthio();
    applyI18n();
    updateClock();
    syncSound();
    track("ethio_toggle");
  });

  soundBtn.addEventListener("click", () => {
    soundOn = !soundOn;
    applyI18n();
    syncSound();
  });

  previewBtn.addEventListener("click", () => {
    startCrossing(true);
    updateClock();
    track("preview_crossing");
  });

  fromInput.value = localStorage.getItem(LS.name) || "";
  toInput.value = localStorage.getItem(LS.to) || "";
  fromInput.addEventListener("input", () => {
    localStorage.setItem(LS.name, fromInput.value);
    updateSharePreview();
  });
  toInput.addEventListener("input", () => {
    localStorage.setItem(LS.to, toInput.value);
    updateSharePreview();
  });
  bdayName.addEventListener("input", renderBorn);
  bdayInput.addEventListener("input", renderBorn);

  $("endingRow").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-end]");
    if (!btn) return;
    ending = btn.getAttribute("data-end");
    localStorage.setItem(LS.end, ending);
    renderBlessings();
    updateSharePreview();
  });

  $("downloadBtn").addEventListener("click", downloadCard);
  $("telegramBtn").addEventListener("click", shareTelegram);
  $("xBtn").addEventListener("click", shareX);
  $("copyBtn").addEventListener("click", copyLine);

  window.addEventListener("resize", () => {
    resizeFx();
    seedRain();
  });

  applyEthio();
  applyI18n();
  setSocialTags();
  resizeFx();
  seedRain();
  tickFx();
  updateClock();
  setInterval(updateClock, 250);
  track("page_view");

  /* Self-check in console for the required dates */
  const c1 = gregorianToEthiopic(2026, 9, 11);
  const c2 = gregorianToEthiopic(2026, 1, 1);
  const c3 = gregorianToEthiopic(2026, 9, 8);
  console.info("calendar", c1, c2, c3, isEthLeap(2019));
})();
