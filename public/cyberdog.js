const LANGUAGES = {
  "en": "Warning: This site is protected by a virtual watchdog.",
  "nl": "Pas op: Deze site wordt bewaakt door een virtuele waakhond.",
  "es": "Atención: Este sitio está protegido por un perro guardián virtual.",
  "de": "Achtung: Diese Seite wird von einem virtuellen Wachhund geschützt.",
  "fr": "Attention : Ce site est protégé par un chien de garde virtuel."
};

function detectLanguage() {
  const lang = navigator.language.slice(0, 2);
  return LANGUAGES[lang] || LANGUAGES["en"];
}

function bark() {
  const audio = new Audio("dogs/bark.mp3");
  audio.play();
}

function suspiciousActivityDetected() {
  let detected = false;
  const threshold = 160;
  setInterval(() => {
    if (window.outerWidth - window.innerWidth > threshold || window.outerHeight - window.innerHeight > threshold) {
      if (!detected) {
        detected = true;
        document.getElementById("message").innerText = "Suspicious activity detected!";
        bark();
        document.getElementById("lottie-dog").innerHTML = "<img src='dogs/watchdog-angry.svg' width='100'>";
        sendSuspiciousEvent();
      }
    }
  }, 1000);
}

function loadLottieDog() {
  lottie.loadAnimation({
    container: document.getElementById('lottie-dog'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'dogs/tail-wag.json'
  });
}

function sendSuspiciousEvent() {
  if (navigator.sendBeacon) {
    const payload = new Blob([JSON.stringify({ event: 'devtools_opened', time: new Date().toISOString() })], { type: 'application/json' });
    navigator.sendBeacon('/cyberdog-logs', payload);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("message").innerText = detectLanguage();
  loadLottieDog();
  suspiciousActivityDetected();
});
