// Ortak gezinme ve kişi sayısı kaydı (tüm sayfalarda aynı değer kullanılır)
(function () {
  var pages = [
    ["index.html", "Genel bakış"],
    ["1-hediye.html", "1 Hediyeler"],
    ["2-altin-pid.html", "2 Altın PID"],
    ["3-etkinlikler.html", "3 Etkinlikler"],
    ["4-kubik-susleme.html", "4 Kübik süsleme"],
    ["5-ek-detaylar.html", "5 Plan"]
  ];
  var here = location.pathname.split("/").pop() || "index.html";
  var nav = document.createElement("nav");
  nav.className = "loop";
  nav.setAttribute("aria-label", "Sayfalar");
  nav.innerHTML =
    '<div class="wrap"><ol><li class="lg"><a href="index.html" style="border:0;padding:0"><img class="logo" src="HKTTM_final.png" alt="HKTTM"></a></li>' +
    pages
      .map(function (p) {
        return (
          '<li><a href="' + p[0] + '"' +
          (p[0] === here ? ' aria-current="page"' : "") +
          ">" + p[1] + "</a></li>"
        );
      })
      .join("") +
    "</ol></div>";
  document.body.insertBefore(nav, document.body.firstChild);
})();

var HK = {
  get: function (key, fallback) {
    try {
      var v = localStorage.getItem("hk_" + key);
      return v === null ? fallback : v;
    } catch (e) {
      return fallback;
    }
  },
  set: function (key, value) {
    try {
      localStorage.setItem("hk_" + key, value);
    } catch (e) {}
  },
  tl: function (n) {
    return n.toLocaleString("tr-TR", { maximumFractionDigits: 0 }) + " TL";
  },
  tl2: function (n) {
    return n.toLocaleString("tr-TR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " TL";
  }
};
