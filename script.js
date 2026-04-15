const works = [
  {
    id: "01",
    title: "A Double Face in Geometric Slices",
    caption:
      "Within a wide pink field, face and body are cut apart and stitched back together, as if the figure were being examined from several viewpoints at once.",
    motif: "Displacement / Slicing / Split View",
    focus:
      "The figure is broken apart and made to stand again at the center. Crosses and geometric partitions become metaphors for a fractured mental structure.",
    image: "assets/works/work-01.jpg",
    alt: "Lindong work 01: a distorted figure and segmented faces against a pink field",
  },
  {
    id: "02",
    title: "Mutant Narrative in a Black Field",
    caption:
      "The black background acts like an impenetrable stage curtain, while figures, objects, and animal-like forms generate a heterotopic narrative in front of it.",
    motif: "Pressure / Theater / Animalization",
    focus:
      "Bright blues, pinks, and yellows collide with dense black, making the figure appear to seize an unstable new order.",
    image: "assets/works/work-02.jpg",
    alt: "Lindong work 02: mutant figures and objects in a black theatrical space",
  },
  {
    id: "03",
    title: "Fragmented Torso and Subconscious Space",
    caption:
      "Torso, limbs, and partial faces interweave, turning the painting into an interior room driven by the subconscious.",
    motif: "Torso / Subconscious / Rupture",
    focus:
      "The brushwork loosens, the figure's boundaries dissolve, and emotion seeps outward from inside the structure.",
    image: "assets/works/work-03.jpg",
    alt: "Lindong work 03: fragmented torso with multiple distorted limbs",
  },
  {
    id: "04",
    title: "The Body Cut Open",
    caption:
      "The figure stands at the boundary between a vast black void and an intense green field, as if emerging through a cut surface.",
    motif: "Occupation / Section / Void",
    focus:
      "The compressed composition heightens the sense of being watched and turns the body into a color structure claiming territory.",
    image: "assets/works/work-04.jpg",
    alt: "Lindong work 04: distorted figure against black and green fields",
  },
  {
    id: "05",
    title: "Standing Figure with Foreground Fragments",
    caption:
      "An isolated standing figure is placed before an orange field of light, while scattered fragments in the foreground resemble organs that have lost their home.",
    motif: "Standing / Light Field / Fragments",
    focus:
      "The figure's solitude and the floating debris in front create a charged distance, like a pause on the threshold of a new world.",
    image: "assets/works/work-05.jpg",
    alt: "Lindong work 05: a black-clad standing figure before an orange light field",
  },
  {
    id: "06",
    title: "Walker in a Blocked Terrain",
    caption:
      "The green zone becomes a new plane of growth, and the figure moves within it alongside crosses and geometric signs.",
    motif: "Block Freedom / Cross / Movement",
    focus:
      "The figure no longer closes into a stable form, but remains in continuous mutation with the environment, symbols, and weeds around it.",
    image: "assets/works/work-06.jpg",
    alt: "Lindong work 06: figure and cross motifs in a green landscape",
  },
  {
    id: "07",
    title: "Painting Within the Exhibition Space",
    caption:
      "The installation record moves the work beyond flat pictorial narration and brings canvas, space, and spectatorship back into the work itself.",
    motif: "Exhibition / Site / Spectatorship",
    focus:
      "A fluorescent green atmosphere makes the work feel as though it grows out of the site rather than simply hanging on a wall.",
    image: "assets/works/work-07.jpg",
    alt: "Lindong work 07: installation view within the exhibition space",
  },
  {
    id: "08",
    title: "Inverted Figure in a Color-Field Theater",
    caption:
      "An inverted green face is held in tension by broad red, pink, yellow, and blue fields, as if the figure were rebuilding order in weightlessness.",
    motif: "Inversion / Color Field / Weightlessness",
    focus:
      "The inversion intensifies the sense of decentralization and frees the body from ordinary gravity and conventional viewing habits.",
    image: "assets/works/work-08.jpg",
    alt: "Lindong work 08: inverted figure within a broad color-field composition",
  },
];

const worksList = document.querySelector("#works-list");
const activeImage = document.querySelector("#active-work-image");
const activeIndex = document.querySelector("#active-work-index");
const activeTitle = document.querySelector("#active-work-title");
const activeCaption = document.querySelector("#active-work-caption");
const activeMotif = document.querySelector("#active-work-motif");
const activeFocus = document.querySelector("#active-work-focus");
const openModalButton = document.querySelector("#open-modal");
const modal = document.querySelector("#work-modal");
const modalImage = document.querySelector("#modal-image");
const modalIndex = document.querySelector("#modal-index");
const modalTitle = document.querySelector("#modal-title");
const modalCaption = document.querySelector("#modal-caption");
const modalFocus = document.querySelector("#modal-focus");

let currentWork = works[0];

function renderWorks() {
  worksList.innerHTML = works
    .map(
      (work) => `
        <button class="work-item${work.id === currentWork.id ? " is-active" : ""}" type="button" data-work-id="${work.id}">
          <div class="work-thumb">
            <img src="${work.image}" alt="${work.alt}" loading="lazy" />
          </div>
          <div class="work-copy">
            <p class="stage-index">Work ${work.id}</p>
            <h3>${work.title}</h3>
            <p>${work.caption}</p>
          </div>
        </button>
      `
    )
    .join("");

  const buttons = worksList.querySelectorAll(".work-item");
  buttons.forEach((button) => {
    button.addEventListener("click", () => setActiveWork(button.dataset.workId));
  });

  const observer = new IntersectionObserver(
    (entries) => {
      const visibleEntry = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visibleEntry) {
        setActiveWork(visibleEntry.target.dataset.workId, false);
      }
    },
    {
      rootMargin: "-20% 0px -35% 0px",
      threshold: [0.3, 0.55, 0.8],
    }
  );

  buttons.forEach((button) => observer.observe(button));
}

function setActiveWork(workId, shouldScroll = true) {
  const selectedWork = works.find((work) => work.id === workId);
  if (!selectedWork) return;

  currentWork = selectedWork;
  activeImage.src = selectedWork.image;
  activeImage.alt = selectedWork.alt;
  activeIndex.textContent = `Work ${selectedWork.id}`;
  activeTitle.textContent = selectedWork.title;
  activeCaption.textContent = selectedWork.caption;
  activeMotif.textContent = selectedWork.motif;
  activeFocus.textContent = selectedWork.focus;

  modalImage.src = selectedWork.image;
  modalImage.alt = `${selectedWork.alt} full-size view`;
  modalIndex.textContent = `Work ${selectedWork.id}`;
  modalTitle.textContent = selectedWork.title;
  modalCaption.textContent = selectedWork.caption;
  modalFocus.textContent = selectedWork.focus;

  document.querySelectorAll(".work-item").forEach((item) => {
    item.classList.toggle("is-active", item.dataset.workId === workId);
  });

  if (shouldScroll) {
    document
      .querySelector(`.work-item[data-work-id="${workId}"]`)
      ?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
}

function openModal() {
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function setupModal() {
  openModalButton.addEventListener("click", openModal);

  document.querySelectorAll("[data-close-modal]").forEach((target) => {
    target.addEventListener("click", closeModal);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeModal();
  });
}

function setupReveal() {
  const revealNodes = document.querySelectorAll("[data-reveal]");
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  revealNodes.forEach((node) => revealObserver.observe(node));
}

function setupFooterYear() {
  document.querySelector("#year").textContent = new Date().getFullYear();
}

renderWorks();
setActiveWork(currentWork.id, false);
setupModal();
setupReveal();
setupFooterYear();
