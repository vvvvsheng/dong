const { works, exhibitions, contact } = window.siteData;
const basePath = document.body.dataset.basePath || "";

function workHref(id) {
  return `${basePath}work.html?id=${id}`;
}

function assetSrc(path) {
  return `${basePath}${path}`;
}

function renderArchive() {
  const archiveGrid = document.querySelector("#archive-grid");
  if (!archiveGrid) return;

  archiveGrid.innerHTML = works
    .map(
      (work) => `
        <article class="archive-card">
          <a class="archive-card-image" href="${workHref(work.id)}">
            <img src="${assetSrc(work.image)}" alt="${work.alt}" loading="lazy" />
          </a>
          <div class="archive-card-copy">
            <p class="stage-index">Work ${work.id}</p>
            <h2>${work.title}</h2>
            <p>${work.caption}</p>
            <p class="archive-meta">${work.motif}</p>
            <a class="text-link" href="${workHref(work.id)}">Open work page</a>
          </div>
        </article>
      `
    )
    .join("");
}

function renderWorkDetail() {
  const detailRoot = document.querySelector("#work-detail");
  if (!detailRoot) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id") || works[0].id;
  const index = Math.max(
    0,
    works.findIndex((work) => work.id === id)
  );
  const work = works[index];
  const prevWork = works[(index - 1 + works.length) % works.length];
  const nextWork = works[(index + 1) % works.length];

  document.title = `${work.title} | Lindong`;
  document.querySelector("#detail-index").textContent = `Work ${work.id}`;
  document.querySelector("#detail-title").textContent = work.title;
  document.querySelector("#detail-image").src = assetSrc(work.image);
  document.querySelector("#detail-image").alt = work.alt;
  document.querySelector("#detail-caption").textContent = work.caption;
  document.querySelector("#detail-motif").textContent = work.motif;
  document.querySelector("#detail-focus").textContent = work.focus;
  document.querySelector("#detail-back-link").href = `${basePath}works/`;
  document.querySelector("#detail-contact-link").href = `${basePath}about/#contact`;
  document.querySelector("#detail-prev").href = workHref(prevWork.id);
  document.querySelector("#detail-prev").textContent = `Previous: ${prevWork.title}`;
  document.querySelector("#detail-next").href = workHref(nextWork.id);
  document.querySelector("#detail-next").textContent = `Next: ${nextWork.title}`;

  const moreWorks = document.querySelector("#detail-more-works");
  if (moreWorks) {
    moreWorks.innerHTML = works
      .map(
        (item) => `
          <a class="detail-mini${item.id === work.id ? " is-current" : ""}" href="${workHref(item.id)}">
            <span class="stage-index">Work ${item.id}</span>
            <strong>${item.title}</strong>
          </a>
        `
      )
      .join("");
  }
}

function renderExhibitions() {
  const exhibitionList = document.querySelector("#exhibition-list");
  if (!exhibitionList) return;

  exhibitionList.innerHTML = exhibitions
    .map(
      (item) => `
        <article class="timeline-item">
          <span class="timeline-year">${item.year}</span>
          <div class="timeline-content">
            <h3>${item.title}</h3>
          </div>
        </article>
      `
    )
    .join("");
}

function hydrateContact() {
  const emailNode = document.querySelector("#contact-email");
  const wechatNode = document.querySelector("#contact-wechat");
  if (emailNode) {
    emailNode.textContent = contact.email;
    emailNode.href = `mailto:${contact.email}`;
  }
  if (wechatNode) {
    wechatNode.textContent = contact.wechat;
  }
}

renderArchive();
renderWorkDetail();
renderExhibitions();
hydrateContact();
