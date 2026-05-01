let current = 0;
const slides = document.getElementById('slides');
const dotsEl = document.getElementById('dots');
const total = 4;

for (let i = 0; i < total; i++) {
    const d = document.createElement('button');
    d.className = 'dot' + (i === 0 ? ' on' : '');
    d.onclick = () => goTo(i);
    dotsEl.appendChild(d);
}

function goTo(n) {
    current = n;
    slides.style.transform = `translateX(-${current * 100}%)`;
    document.querySelectorAll('.dot').forEach((d, i) =>
        d.classList.toggle('on', i === current)
    );
}

function prev() {
    goTo(current > 0 ? current - 1 : total - 1);
}

function next() {
    goTo(current < total - 1 ? current + 1 : 0);
}