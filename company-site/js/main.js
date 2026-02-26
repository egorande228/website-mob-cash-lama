const menuBtn = document.getElementById('menuBtn');
const siteNav = document.getElementById('siteNav');

if (menuBtn && siteNav) {
  menuBtn.addEventListener('click', () => {
    siteNav.classList.toggle('open');
  });
}

const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  },
  { threshold: 0.12 }
);

reveals.forEach((item) => observer.observe(item));

const heroMotion = document.querySelector('.hero-motion');
const floatInnerItems = heroMotion ? heroMotion.querySelectorAll('.float-inner') : [];

if (heroMotion && floatInnerItems.length && window.matchMedia('(pointer: fine)').matches) {
  const maxOffset = 16;

  const depthByType = (item) => {
    if (item.closest('.coin')) return 0.45;
    if (item.closest('.ball')) return 1;
    if (item.closest('.mma-glove')) return 0.85;
    if (item.closest('.football')) return 0.75;
    return 0.7;
  };

  heroMotion.addEventListener('mousemove', (event) => {
    const rect = heroMotion.getBoundingClientRect();
    const nx = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    const ny = ((event.clientY - rect.top) / rect.height - 0.5) * 2;

    floatInnerItems.forEach((item) => {
      const depth = depthByType(item);
      item.style.transform = `translate(${(nx * maxOffset * depth).toFixed(2)}px, ${(ny * maxOffset * depth).toFixed(2)}px)`;
    });
  });

  heroMotion.addEventListener('mouseleave', () => {
    floatInnerItems.forEach((item) => {
      item.style.transform = 'translate(0px, 0px)';
    });
  });
}

let selectedMethod = 'telegram';
const methodButtons = document.querySelectorAll('.tc-method');
const contactLabel = document.getElementById('contact-input-label');
const contactInput = document.getElementById('input-contact');

const methodMap = {
  telegram: {
    label: 'Telegram Username',
    placeholder: '@username',
  },
  whatsapp: {
    label: 'WhatsApp Number',
    placeholder: '+ CountryCode Number',
  },
  phone: {
    label: 'Phone Number',
    placeholder: '+ CountryCode Number',
  },
};

if (methodButtons.length && contactLabel && contactInput) {
  methodButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      methodButtons.forEach((item) => item.classList.remove('active'));
      btn.classList.add('active');
      selectedMethod = btn.dataset.method || 'telegram';

      const config = methodMap[selectedMethod] || methodMap.telegram;
      contactLabel.textContent = config.label;
      contactInput.placeholder = config.placeholder;
    });
  });
}

const submitButton = document.getElementById('submitApplication');
if (submitButton) {
  submitButton.addEventListener('click', () => {
    const name = document.getElementById('input-name');
    const contact = document.getElementById('input-contact');
    const lang = document.getElementById('input-lang');

    if (!name || !contact || !lang || !name.value.trim() || !contact.value.trim()) {
      window.alert('Please fill in all required fields.');
      return;
    }

    const message = [
      '*NEW AGENT APPLICATION*',
      '',
      `Name: ${name.value.trim()}`,
      `Method: ${selectedMethod.toUpperCase()}`,
      `Contact: ${contact.value.trim()}`,
      `Language: ${lang.value}`,
    ].join('\n');

    window.open(`https://wa.me/79154237269?text=${encodeURIComponent(message)}`, '_blank');
  });
}


// Remove light checkerboard-like background from selected images.
const keyImages = document.querySelectorAll('img.keyed-image');

const cleanupImageBackground = (img) => {
  const source = new Image();
  source.crossOrigin = 'anonymous';
  source.src = img.currentSrc || img.src;

  source.onload = () => {
    const canvas = document.createElement('canvas');
    canvas.width = source.width;
    canvas.height = source.height;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    ctx.drawImage(source, 0, 0);
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];

      const max = Math.max(r, g, b);
      const min = Math.min(r, g, b);
      const sat = max - min;

      const isLightNeutral = max > 178 && sat < 22;
      if (isLightNeutral) {
        const softness = Math.min(1, Math.max(0, (max - 178) / 45));
        data[i + 3] = Math.round((1 - softness) * 18);
      }
    }

    ctx.putImageData(imageData, 0, 0);
    img.src = canvas.toDataURL('image/png');
  };
};

keyImages.forEach((img) => {
  if (img.complete) cleanupImageBackground(img);
  else img.addEventListener('load', () => cleanupImageBackground(img), { once: true });
});
