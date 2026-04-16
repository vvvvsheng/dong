const selectedWorks = [
  {
    title: "Brain Displaced",
    year: "2024",
    image: "assets/works/work-01.jpg",
    alt: "Brain Displaced painting by Lindong",
    medium: "Oil on canvas",
    dimensions: "120 × 100 cm",
    description:
      "Part of an ongoing inquiry into psychic pressure and bodily instability. The figure appears reorganized rather than whole, suggesting estrangement between inner consciousness and external systems of control.",
  },
  {
    title: "Limbs Reassigned",
    year: "2024",
    image: "assets/works/work-02.jpg",
    alt: "Limbs Reassigned painting by Lindong",
    medium: "Oil on canvas",
    dimensions: "120 × 100 cm",
    description:
      "This work approaches the body as a contested site. Fragmentation and reassignment of form suggest pressure, interruption, and the collapse of bodily coherence.",
  },
  {
    title: "Ears Removed",
    year: "2024",
    image: "assets/works/work-03.jpg",
    alt: "Ears Removed painting by Lindong",
    medium: "Oil on canvas",
    dimensions: "120 × 100 cm",
    description:
      "A painting about blocked reception, psychological tension, and the violence of internal and external silencing.",
  },
  {
    title: "Block Freedom",
    year: "2024",
    image: "assets/works/work-04.jpg",
    alt: "Block Freedom painting by Lindong",
    medium: "Oil on canvas",
    dimensions: "120 × 100 cm",
    description:
      "An image of restraint and compression, where saturated color and unstable figuration coexist in a tense visual structure.",
  },
];

const exhibitions = [
  {
    title: "Self-Conscious Expression: Contemporary Art Exhibition",
    subtitle: "Group exhibition",
    year: "2020",
  },
  {
    title: "Fantasy Kingdom Emerging Artist Nomination Exhibition",
    subtitle: "Group exhibition",
    year: "2020",
  },
  {
    title: "WILD VOICES Modern Sky Exhibition",
    subtitle: "Group exhibition",
    year: "2020",
  },
  {
    title: "798 Expression Contemporary Art Invitational Exhibition",
    subtitle: "Invitational exhibition",
    year: "2019",
  },
  {
    title: "1897 Factory Art Invitational Exhibition",
    subtitle: "Invitational exhibition",
    year: "2019",
  },
];

const worksContainer = document.querySelector("#selected-works");
const exhibitionsContainer = document.querySelector("#exhibition-list");
const yearNode = document.querySelector("#year");

function renderSelectedWorks() {
  worksContainer.innerHTML = selectedWorks
    .map(
      (work) => `
        <article class="work-card">
          <div class="work-image-wrap">
            <img src="${work.image}" alt="${work.alt}" loading="lazy" />
          </div>
          <div class="work-meta">
            <h3>${work.title}</h3>
            <p class="work-year">${work.year}</p>
            <p class="work-medium">${work.medium} · ${work.dimensions}</p>
            <p class="work-description">${work.description}</p>
          </div>
        </article>
      `
    )
    .join("");
}

function renderExhibitions() {
  exhibitionsContainer.innerHTML = exhibitions
    .map(
      (item) => `
        <div class="exhibition-item">
          <div class="exhibition-copy">
            <span class="exhibition-title">${item.title}</span>
            <span>${item.subtitle ? ` — ${item.subtitle}` : ""}</span>
          </div>
          <div class="exhibition-year">${item.year}</div>
        </div>
      `
    )
    .join("");
}

function renderYear() {
  yearNode.textContent = new Date().getFullYear();
}

renderSelectedWorks();
renderExhibitions();
renderYear();
