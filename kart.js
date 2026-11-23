// Kartvizit boyutunda (85 x 55 mm) "Mutlu yıllar" kartı tasarımları.
// KART.a(), KART.b(), KART.c() birer SVG metni döndürür. Metinleri buradan değiştirebilirsiniz.
var KART = (function () {
  var HEAD = 'Bahnschrift, "DIN Alternate", "Arial Narrow", "Segoe UI", sans-serif';
  var BODY = '"Segoe UI", system-ui, Arial, sans-serif';
  var BOLUM = "HKTTM";

  function open(label) {
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 850 550" role="img" aria-label="' + label + '">';
  }

  // İkinci dereceden sistemin basamak yanıtı: 2026 seviyesinden 2027 referansına
  function stepPath() {
    var z = 0.28, w = 1.7, wd = w * Math.sqrt(1 - z * z);
    var x0 = 70, x1 = 790, y0 = 300, y1 = 150, t0 = 1.2, T = 13, d = "";
    for (var i = 0; i <= 240; i++) {
      var t = (i / 240) * T, y = 0;
      if (t > t0) {
        var s = t - t0;
        y = 1 - Math.exp(-z * w * s) * (Math.cos(wd * s) + (z / Math.sqrt(1 - z * z)) * Math.sin(wd * s));
      }
      d += (i ? "L" : "M") + (x0 + ((x1 - x0) * t) / T).toFixed(1) + " " + (y0 + (y1 - y0) * y).toFixed(1);
    }
    return d;
  }

  function a() {
    var grid = "";
    for (var x = 70; x <= 790; x += 60) grid += '<line x1="' + x + '" y1="90" x2="' + x + '" y2="330" stroke="#1b4494" stroke-width="1"/>';
    for (var y = 90; y <= 330; y += 60) grid += '<line x1="70" y1="' + y + '" x2="790" y2="' + y + '" stroke="#1b4494" stroke-width="1"/>';
    return (
      open("Basamak yanıtı kartı: 2026'dan 2027 referansına oturan eğri ve Mutlu yıllar yazısı") +
      '<rect width="850" height="550" fill="#002d7a"/>' +
      grid +
      '<line x1="70" y1="150" x2="790" y2="150" stroke="#eef3fb" stroke-width="2" stroke-dasharray="10 8"/>' +
      '<text x="790" y="136" text-anchor="end" font-family=\'' + HEAD + '\' font-size="30" fill="#eef3fb">r = 2027</text>' +
      '<text x="70" y="286" font-family=\'' + HEAD + '\' font-size="26" fill="#9db3db">2026</text>' +
      '<path d="' + stepPath() + '" fill="none" stroke="#dde8f7" stroke-width="7" stroke-linejoin="round" stroke-linecap="round"/>' +
      '<text x="70" y="430" font-family=\'' + HEAD + '\' font-weight="700" font-size="86" fill="#ffffff">Mutlu yıllar</text>' +
      '<text x="72" y="482" font-family=\'' + BODY + '\' font-size="27" fill="#c7d6eb">Aşımınız az, kazancınız bol, sisteminiz kararlı olsun.</text>' +
      '<image href="HKTTM_final.png" x="70" y="18" width="170" height="62"/>' +
      "</svg>"
    );
  }

  function b() {
    var s = 'stroke="#002d7a" stroke-width="4" fill="none"';
    return (
      open("Blok diyagram kartı: mutluluk, sağlık ve başarı kazançlı kapalı çevrim ve Mutlu yıllar yazısı") +
      '<rect width="850" height="550" fill="#ffffff"/>' +
      '<rect x="12" y="12" width="826" height="526" fill="none" stroke="#002d7a" stroke-width="4"/>' +
      '<defs><marker id="ok" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5L0 10z" fill="#002d7a"/></marker></defs>' +
      '<text x="60" y="118" font-family=\'' + HEAD + '\' font-weight="700" font-size="88" fill="#002d7a">Mutlu yıllar</text>' +
      // referans
      '<text x="60" y="232" font-family=\'' + HEAD + '\' font-size="26" fill="#4667a0">2027</text>' +
      '<line x1="60" y1="250" x2="148" y2="250" ' + s + ' marker-end="url(#ok)"/>' +
      '<circle cx="172" cy="250" r="22" ' + s + "/>" +
      '<text x="172" y="261" text-anchor="middle" font-family=\'' + HEAD + '\' font-size="30" fill="#002d7a">Σ</text>' +
      '<line x1="194" y1="250" x2="246" y2="250" ' + s + ' marker-end="url(#ok)"/>' +
      // kontrolcü
      '<rect x="250" y="190" width="300" height="120" fill="#dde8f7" stroke="#002d7a" stroke-width="4"/>' +
      '<text x="400" y="228" text-anchor="middle" font-family=\'' + HEAD + '\' font-size="25" fill="#002d7a">Kp mutluluk</text>' +
      '<text x="400" y="260" text-anchor="middle" font-family=\'' + HEAD + '\' font-size="25" fill="#002d7a">Ki sağlık</text>' +
      '<text x="400" y="292" text-anchor="middle" font-family=\'' + HEAD + '\' font-size="25" fill="#002d7a">Kd başarı</text>' +
      '<line x1="550" y1="250" x2="606" y2="250" ' + s + ' marker-end="url(#ok)"/>' +
      // tesis
      '<rect x="610" y="205" width="110" height="90" fill="#c8102e" stroke="#002d7a" stroke-width="4"/>' +
      '<text x="665" y="261" text-anchor="middle" font-family=\'' + HEAD + '\' font-weight="700" font-size="32" fill="#ffffff">Siz</text>' +
      '<line x1="720" y1="250" x2="796" y2="250" ' + s + ' marker-end="url(#ok)"/>' +
      // geri besleme
      '<path d="M758 250V372H172V276" ' + s + ' marker-end="url(#ok)"/>' +
      '<text x="150" y="300" text-anchor="end" font-family=\'' + HEAD + '\' font-size="28" fill="#002d7a">−</text>' +
      '<text x="60" y="450" font-family=\'' + BODY + '\' font-size="27" fill="#002d7a">Yeni yılda hatanız sıfıra yakınsasın.</text>' +
      '<image href="HKTTM_final.png" x="620" y="418" width="190" height="70"/>' +
      '<text x="60" y="496" font-family=\'' + HEAD + '\' font-weight="700" font-size="26" fill="#c8102e">' + BOLUM + " 2027</text>" +
      "</svg>"
    );
  }

  function c() {
    var stripes = "";
    for (var i = -6; i < 30; i++) stripes += '<rect x="' + i * 44 + '" y="-40" width="22" height="700" fill="#c8102e" transform="skewX(-28)"/>';
    return (
      open("Baston şeker şeritli kart: Mutlu yıllar yazısı") +
      '<defs><clipPath id="cl"><rect width="850" height="550"/></clipPath></defs>' +
      '<rect width="850" height="550" fill="#ffffff"/>' +
      '<g clip-path="url(#cl)">' + stripes + "</g>" +
      '<rect x="34" y="34" width="782" height="482" fill="#ffffff"/>' +
      '<text x="425" y="250" text-anchor="middle" font-family=\'' + HEAD + '\' font-weight="700" font-size="118" fill="#002d7a">Mutlu yıllar</text>' +
      '<line x1="325" y1="292" x2="525" y2="292" stroke="#2f63c4" stroke-width="5"/>' +
      '<text x="425" y="356" text-anchor="middle" font-family=\'' + BODY + '\' font-size="30" fill="#002d7a">2027 hepimize sağlık, huzur ve</text>' +
      '<text x="425" y="396" text-anchor="middle" font-family=\'' + BODY + '\' font-size="30" fill="#002d7a">ilk denemede çalışan sistemler getirsin.</text>' +
      '<image href="HKTTM_final.png" x="340" y="424" width="170" height="62"/>' +
      "</svg>"
    );
  }

  return { a: a, b: b, c: c };
})();
