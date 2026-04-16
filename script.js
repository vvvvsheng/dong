const { works } = window.siteData;

const worksList = document.querySelector("#works-list");
const activeImage = document.querySelector("#active-work-image");
const activeIndex = document.querySelector("#active-work-index");
const activeTitle = document.querySelector("#active-work-title");
const activeCaption = document.querySelector("#active-work-caption");
const activeMotif = document.querySelector("#active-work-motif");
const activeFocus = document.querySelector("#active-work-focus");
const openModalButton = document.querySelector("#open-modal");
const viewDetailLink = document.querySelector("#view-detail");
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
  if (viewDetailLink) {
    viewDetailLink.href = `work.html?id=${selectedWork.id}`;
  }

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
  const yearNode = document.querySelector("#year");
  if (yearNode) {
    yearNode.textContent = new Date().getFullYear();
  }
}

renderWorks();
setActiveWork(currentWork.id, false);
setupModal();
setupReveal();
setupFooterYear();
