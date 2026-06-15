const cases = [
  {
    id: "pds",
    title: "НПФ ПДС",
    type: "Интерактивный лендинг",
    metric: "235% плана",
    image: "assets/pds.webp",
    link: "https://futurepds.lenta.ru/",
    preview: "iframe",
    summary: "Лендинг на поддомене Lenta.ru с 3D-иллюстрациями и интерактивным объяснением продукта.",
    goal: "Упаковать тему долгосрочных сбережений так, чтобы пользователь быстро понял ценность ПДС и не потерял интерес на финансовой терминологии.",
    solution: "Построили визуальный сторителлинг вокруг будущего пользователя: 3D-образы, интерактивные блоки, мягкий переход от эмоции к продуктовым преимуществам.",
    role: "пресейл, команда, запуск, отчетность",
  },
  {
    id: "fun-sun",
    title: "Fun&Sun x Rixos",
    type: "Контентный лонгрид",
    metric: "150% плана",
    image: "assets/fun-sun.webp",
    link: "https://fun-and-sun-rixos.spec.afisha.ru/",
    preview: "iframe",
    summary: "Нативный проект на Афише с тревел-сценарием и вовлекающей идеей идеального отдыха.",
    goal: "Показать турпродукт не как стандартное размещение, а как выбор отдыха под разные сценарии и аудитории.",
    solution: "Собрали лендинг с кинематографичным первым экраном, редакционным тоном Афиши и маршрутом, который приводит к бронированию.",
    role: "тайминг, клиент, подрядчики",
  },
  {
    id: "tea",
    title: "Московское чаепитие",
    type: "Лендинг + конкурс",
    metric: "offline + chatbot",
    image: "assets/tea.webp",
    link: "https://www.thevoicemag.ru/lifestyle/stil-zhizni/vremya-pit-chai/",
    media: "videos/московское_чаепитие.mp4",
    preview: "video",
    summary: "Проект для The Voice Mag с чат-ботом, конкурсной механикой, интерактивом, оффлайн-ивентом и фотопродакшеном.",
    goal: "Расширить контакт с брендом за пределы статьи и собрать участие аудитории в понятной конкурсной механике.",
    solution: "Соединили редакционный спецпроект, чат-бот, оффлайн-активацию и визуальный продакшн в одну цепочку вовлечения.",
    role: "механика, съемка, координация",
  },
  {
    id: "ozon",
    title: "Ozon",
    type: "Интерактивная витрина",
    metric: "fashion commerce",
    image: "assets/ozon.webp",
    link: "https://www.thevoicemag.ru/fashion/shopping/lenta-trendov-ozon/",
    media: "videos/ozon.mp4",
    preview: "video",
    summary: "Лендинг на The Voice Mag с интерактивной витриной и раскрывающимися поп-апами.",
    goal: "Нативно показать подборки товаров Ozon в формате, который сохраняет editorial feeling и ведет к изучению ассортимента.",
    solution: "Сделали модную витрину с быстрыми поп-апами, визуальными якорями и понятным переходом от тренда к товару.",
    role: "интерактив, редакция, клиент",
  },
  {
    id: "forma",
    title: "FORMA",
    type: "Аудиогид + 3D",
    metric: "city storytelling",
    image: "assets/forma.webp",
    link: "https://www.thesymbol.ru/lifestyle/travel/govorit-moskva-kak-menyalis-formy-goroda/",
    media: "videos/forma.mov",
    preview: "video",
    summary: "Лонгрид на The Symbol с аудиогидом, 3D-иллюстрациями и историей городской среды.",
    goal: "Перевести девелоперскую повестку в культурный разговор о Москве и формах города.",
    solution: "Собрали маршрут в формате аудиогида: пользователь не просто читает текст, а двигается по истории с визуальными и звуковыми акцентами.",
    role: "концепт, production, площадка",
  },
  {
    id: "avon",
    title: "AVON",
    type: "Тестовая механика",
    metric: "beauty interactive",
    image: "assets/avon.webp",
    link: "https://www.thevoicemag.ru/beauty/parfum/detektor-podarkov-kak-vybrat-prezent-kotoryi-obyazatelno-ponravitsya/",
    media: "videos/avon.mov",
    preview: "video",
    summary: "Лендинг с тестом и интерактивным барометром для выбора подарка.",
    goal: "Помочь аудитории быстро выбрать релевантный продукт и сделать бренд полезным в момент покупки подарка.",
    solution: "Упаковали подбор в легкую тестовую механику, где результат становится персональной рекомендацией, а не рекламным списком.",
    role: "механика, тексты, запуск",
  },
  {
    id: "hals",
    title: "Галс Девелопмент",
    type: "Анимированные иллюстрации",
    metric: "branded story",
    image: "assets/hals.webp",
    link: "https://www.thesymbol.ru/lifestyle/design/5-tradicii-nikolinoi-gory-kotorye-sohranilis-do-sih-por/",
    media: "videos/галс_девелопмент.mov",
    preview: "video",
    summary: "Спецпроект на The Symbol с анимированными иллюстрациями и премиальной подачей.",
    goal: "Показать ценность локации через культурный и исторический контекст, а не через прямую продажу недвижимости.",
    solution: "Выстроили материал как lifestyle-историю с визуальными иллюстрациями, плавным темпом чтения и брендированными акцентами.",
    role: "редакция, дизайн, контроль",
  },
  {
    id: "lenta-business",
    title: "ФСК Амбер Сити",
    type: "Нестандартный формат",
    metric: "ПМЭФ",
    image: "assets/lenta-business.webp",
    preview: "image",
    summary: "Лента Бизнеса на Lenta.ru с брендированным тумблером и отбором новостей по категориям.",
    goal: "Встроить бренд в деловой инфоповод ПМЭФ и удержать внимание аудитории внутри новостного контекста.",
    solution: "Запустили формат с брендированным переключателем и тематической фильтрацией, чтобы размещение работало как сервисный слой.",
    role: "формат, партнеры, запуск",
  },
  {
    id: "devices",
    title: "VK Video / OKKO / VK",
    type: "СберДевайсы",
    metric: "service integration",
    image: "assets/vk-video.webp",
    preview: "image",
    summary: "Интеграции в Детскую комнату, динамические и статичные форматы на СберДевайсах.",
    goal: "Найти для видеосервисов заметное, но органичное место внутри пользовательского опыта устройства.",
    solution: "Подобрали форматы с учетом сценариев потребления: детская зона, домашний экран, динамические баннеры и статичные промо.",
    role: "экосистема, продукт, клиент",
  },
  {
    id: "essa",
    title: "ESSA 0.0",
    type: "Звук + PR",
    metric: "Silver Mercury",
    image: "assets/essa.webp",
    preview: "image",
    summary: "Брендированный профиль и плейлист на Звуке с анонсированием, подачей на Silver Mercury и публикациями в СМИ.",
    goal: "Перенести продукт в музыкальный контекст и добавить проекту PR-повод после запуска.",
    solution: "Собрали брендированный музыкальный опыт, усилили его анонсированием и оформили как кейс для индустриальной премии.",
    role: "площадка, PR, упаковка кейса",
  },
  {
    id: "netology",
    title: "Нетология",
    type: "Интерактивный виджет",
    metric: "12 апреля",
    image: "assets/netology.webp",
    preview: "image",
    summary: "Виджет ко Дню космонавтики по сети Rambler&Co с вовлекающей механикой вокруг образовательных курсов.",
    goal: "Связать образовательный продукт с инфоповодом и сделать коммуникацию заметной в потоке редакционного контента.",
    solution: "Запустили интерактивный виджет с космической метафорой, быстрым действием и переходом к релевантному курсу.",
    role: "идея, сеть, производство",
  },
  {
    id: "samokat",
    title: "ГигаЧат и Самокат",
    type: "Stories integration",
    metric: "ecosystem content",
    image: "assets/samokat.webp",
    preview: "mobile-image",
    summary: "Интеграции в раздел сторис Самоката для ГигаЧата и других экосистемных коммуникаций.",
    goal: "Попасть в привычный мобильный сценарий пользователя и сделать продуктовую коммуникацию быстрой, заметной и нативной.",
    solution: "Адаптировали сообщение под stories-формат: короткий визуальный сценарий, моментальный контакт и логика, понятная внутри e-com сервиса.",
    role: "экосистема, mobile, контент",
  },
  {
    id: "rider",
    title: "Rider",
    type: "DOOH + банкоматы + TG Ads",
    metric: "video ads",
    image: "assets/rider.webp",
    media: "videos/rider.mp4",
    preview: "video",
    summary: "Видеореклама для DOOH, банкоматов Сбера и Telegram Ads для бренда батареек и напитков.",
    goal: "Адаптировать яркую продуктовую коммуникацию под несколько экранов и точек контакта без потери узнаваемости.",
    solution: "Собрали единый motion-пакет под разные носители: наружные digital-экраны, банкоматные форматы и performance-размещения.",
    role: "video production, адаптации, запуск",
  },
  {
    id: "illustrations",
    title: "Иллюстрации и анимация",
    type: "Animated stories",
    metric: "editorial special",
    image: "assets/illustration-arive.webp",
    link: "https://www.thesymbol.ru/fashion/vybor/4-obraza-na-vesnu-i-leto-po-principu-kapsuly-ot-brenda-arive-sovety-stilista/",
    preview: "image",
    collection: true,
    summary: "Серия редакционных спецпроектов с иллюстрациями, анимацией и аккуратной бренд-интеграцией.",
    goal: "Сделать коммерческий материал визуально самостоятельным и сохранить ощущение премиального editorial-проекта.",
    solution: "Выстроили легкую интерактивную подачу с авторскими визуалами, где бренд появляется как часть истории, а не отдельный рекламный блок.",
    role: "дизайн, редакция, продакшн",
  },
  {
    id: "production",
    title: "Проекты с продакшеном",
    type: "Фото и видео",
    metric: "fashion / lifestyle",
    image: "assets/production-ostin.webp",
    link: "https://www.thevoicemag.ru/stars/interview/lena-tronina-stala-litsom-novoy-reklamnoy-kampanii-ostin-obsudili-s-aktrisoy-modu-muzyku-i-unikalnost/",
    preview: "links",
    collection: true,
    links: [
      {
        label: "OSTIN x The Voice",
        url: "https://www.thevoicemag.ru/stars/interview/lena-tronina-stala-litsom-novoy-reklamnoy-kampanii-ostin-obsudili-s-aktrisoy-modu-muzyku-i-unikalnost/",
      },
      {
        label: "Grazia fashion",
        url: "https://www.grazia.ru/fashion/kak-polnostyu-obnovit-garderob-k-vesne-i-ne-potratit-na-eto-million/",
      },
      {
        label: "The Symbol heroes",
        url: "https://www.thesymbol.ru/heroes/the-symbol/ya-ne-presleduyu-celi-sootvetstvovat-trendam-asmat-chkotua-o-budnyah-inflyuensera-idealnom-obraze-i-ohote-na-vintaj/",
      },
      {
        label: "Grazia people",
        url: "https://www.grazia.ru/people/priznayus-ya-chuvstvuyu-sebya-neidealnoi-no-eto-je-prekrasno-eto-ved-chast-puti-net-tochnoi-formuly/",
      },
      {
        label: "YouTube video",
        url: "https://m.youtube.com/watch?v=1qyaMzc2wDU&feature=youtu.be",
      },
    ],
    summary: "Съемочные проекты для медиа: интервью, fashion-истории, герои, партнерские материалы и видеоконтент.",
    goal: "Организовать визуальный продукт так, чтобы съемка решала коммерческую задачу и сохраняла стиль площадки.",
    solution: "Координация команды, тайминга, подрядчиков, визуальных материалов и согласований до финальной публикации.",
    role: "съемка, команда, публикация",
  },
];

const collections = [
  {
    title: "Проекты с продакшеном",
    tag: "Фото, видео, герои и fashion-истории",
    summary: "Съемочные спецпроекты и редакционные интеграции: подбор команды, тайминг, площадка, визуальные материалы и публикация.",
    images: [
      "assets/prod-ostin-orange.webp",
      "assets/prod-seated.webp",
      "assets/prod-blonde.webp",
      "assets/prod-portrait.webp",
      "assets/prod-red.webp",
    ],
    links: [
      {
        label: "OSTIN x The Voice",
        url: "https://www.thevoicemag.ru/stars/interview/lena-tronina-stala-litsom-novoy-reklamnoy-kampanii-ostin-obsudili-s-aktrisoy-modu-muzyku-i-unikalnost/",
      },
      {
        label: "Grazia fashion",
        url: "https://www.grazia.ru/fashion/kak-polnostyu-obnovit-garderob-k-vesne-i-ne-potratit-na-eto-million/",
      },
      {
        label: "The Symbol heroes",
        url: "https://www.thesymbol.ru/heroes/the-symbol/ya-ne-presleduyu-celi-sootvetstvovat-trendam-asmat-chkotua-o-budnyah-inflyuensera-idealnom-obraze-i-ohote-na-vintaj/",
      },
      {
        label: "Grazia people",
        url: "https://www.grazia.ru/people/priznayus-ya-chuvstvuyu-sebya-neidealnoi-no-eto-je-prekrasno-eto-ved-chast-puti-net-tochnoi-formuly/",
      },
      {
        label: "YouTube",
        url: "https://m.youtube.com/watch?v=1qyaMzc2wDU&feature=youtu.be",
      },
    ],
  },
  {
    title: "Проекты с иллюстрациями и анимацией",
    tag: "Animated editorial specials",
    summary: "Визуальные лонгриды и брендированные материалы, где иллюстрация и motion помогают удержать внимание без тяжелой рекламной подачи.",
    images: [
      "assets/illus-green-dress.webp",
      "assets/illus-module.webp",
      "assets/illus-look.webp",
      "assets/illus-polaroid.webp",
      "assets/illus-beauty.webp",
    ],
    links: [
      {
        label: "Arive capsule",
        url: "https://www.thesymbol.ru/fashion/vybor/4-obraza-na-vesnu-i-leto-po-principu-kapsuly-ot-brenda-arive-sovety-stilista/",
      },
      {
        label: "Classic capsule",
        url: "https://www.thesymbol.ru/fashion/vybor/sekret-klassicheskoi-kapsuly-5-obrazov-na-vse-sluchai-jizni/",
      },
      {
        label: "Robb Report",
        url: "https://robb.report/impression/95855-bez-kompromissov-v-chem-preimushchestva-paketnogo-lyuksovogo-otdyha/",
      },
      {
        label: "Gagarinsky district",
        url: "https://www.thesymbol.ru/lifestyle/design/novaya-jizn-centra-nauki-kak-gagarinskii-raion-stal-primerom-obrazcovoi-djentrifikacii/",
      },
      {
        label: "Beauty choice",
        url: "https://www.thesymbol.ru/beauty/choice/roskosh-kotoraya-vsegda-s-toboi-3-sekreta-krasoty-s-ostrova-millionerov/",
      },
    ],
  },
];

const sectionButtons = document.querySelectorAll("[data-section-link]");
const panels = document.querySelectorAll("[data-section]");
const caseGallery = document.querySelector(".case-gallery");
const collectionsGrid = document.querySelector(".collections-grid");
const caseModal = document.querySelector("#caseModal");
const modalIndex = document.querySelector("#modalIndex");
const modalType = document.querySelector("#modalType");
const modalMetric = document.querySelector("#modalMetric");
const modalTitle = document.querySelector("#modalTitle");
const modalSummary = document.querySelector("#modalSummary");
const modalGoal = document.querySelector("#modalGoal");
const modalSolution = document.querySelector("#modalSolution");
const modalRole = document.querySelector("#modalRole");
const modalProjectLink = document.querySelector("#modalProjectLink");
const modalPreview = document.querySelector("#modalPreview");
const caseFrame = document.querySelector("#caseFrame");
const mediaImage = document.querySelector("#mediaImage");
const mediaVideo = document.querySelector("#mediaVideo");
const projectList = document.querySelector("#projectList");
const fallbackText = document.querySelector("#fallbackText");
const fallbackLink = document.querySelector("#fallbackLink");
const browserFrame = document.querySelector("#browserFrame");
const viewportButtons = document.querySelectorAll("[data-viewport]");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

let activeCase = 0;
let pointerFrame = null;

function setSection(sectionId) {
  const sectionExists = Array.from(panels).some((panel) => panel.dataset.section === sectionId);
  const nextSection = sectionExists ? sectionId : "about";

  panels.forEach((panel) => {
    panel.classList.toggle("is-active", panel.dataset.section === nextSection);
  });

  sectionButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.sectionLink === nextSection);
  });

  if (window.location.hash.replace("#", "") !== nextSection) {
    history.replaceState(null, "", `#${nextSection}`);
  }
}

function renderCaseGallery() {
  caseGallery.innerHTML = cases
    .map(
      (item, index) =>
        item.collection
          ? ""
          : `
        <button class="case-card" type="button" data-case-index="${index}" aria-label="Открыть кейс ${item.title}">
          <img src="${item.image}" alt="" loading="lazy" />
          <span class="case-card__top">
            <span class="case-card__brand">${item.logo || item.title}</span>
            <span class="case-card__meta">${String(index + 1).padStart(2, "0")} / ${item.metric}</span>
          </span>
          <span class="case-card__copy">
            <span class="case-card__title">${item.title}</span>
            <span class="case-card__summary">${item.summary}</span>
          </span>
        </button>
      `,
    )
    .join("");
}

function renderCollections() {
  collectionsGrid.innerHTML = collections
    .map(
      (collection, index) => `
        <article class="collection-card">
          <div class="collection-copy">
            <span class="collection-number">${String(index + 1).padStart(2, "0")}</span>
            <span>${collection.tag}</span>
            <h3>${collection.title}</h3>
            <p>${collection.summary}</p>
            <div class="collection-links">
              ${collection.links
                .map((link) => `<a href="${link.url}" target="_blank" rel="noreferrer">${link.label}</a>`)
                .join("")}
            </div>
          </div>
          <div class="collection-images">
            ${collection.images
              .map((src, index) => {
                const link = collection.links[index] || collection.links[0];
                return `
                  <a class="collection-image-link${index === 2 ? " is-featured" : ""}" href="${link.url}" target="_blank" rel="noreferrer" aria-label="Открыть проект ${link.label}">
                    <img src="${src}" alt="" loading="lazy" />
                    <span>${link.label}</span>
                  </a>
                `;
              })
              .join("")}
          </div>
        </article>
      `,
    )
    .join("");
}

function hydrateModal(index) {
  activeCase = index;
  const item = cases[index];
  const previewMode = item.preview || (item.link ? "iframe" : "image");
  const previewTarget = item.link || item.media || item.image;

  modalIndex.textContent = String(index + 1).padStart(2, "0");
  modalType.textContent = item.type;
  modalMetric.textContent = item.metric;
  modalTitle.textContent = item.title;
  modalSummary.textContent = item.summary;
  modalGoal.textContent = item.goal;
  modalSolution.textContent = item.solution;
  modalRole.textContent = item.role;

  modalProjectLink.hidden = !item.link;
  modalProjectLink.href = item.link || "#";
  modalProjectLink.textContent = previewMode === "links" ? "Открыть основной проект" : "Открыть проект";

  modalPreview.className = "modal-preview";
  caseFrame.removeAttribute("src");
  mediaImage.hidden = true;
  mediaVideo.hidden = true;
  mediaVideo.controls = false;
  mediaVideo.pause();
  mediaVideo.removeAttribute("src");
  mediaVideo.load();
  projectList.innerHTML = "";

  if (previewMode === "iframe") {
    modalPreview.classList.add("is-frame");
    caseFrame.src = item.link;
  }

  if (previewMode === "image" || previewMode === "mobile-image") {
    modalPreview.classList.add("is-media");
    modalPreview.classList.toggle("is-mobile-shot", previewMode === "mobile-image");
    mediaImage.hidden = false;
    mediaImage.src = item.image;
    mediaImage.alt = item.title;
  }

  if (previewMode === "video") {
    modalPreview.classList.add("is-media", "is-video");
    mediaVideo.hidden = false;
    mediaVideo.controls = true;
    mediaVideo.src = item.media;
    mediaVideo.poster = item.image;
    mediaVideo.load();
  }

  if (previewMode === "links") {
    modalPreview.classList.add("is-links");
    mediaImage.hidden = false;
    mediaImage.src = item.image;
    mediaImage.alt = item.title;
    projectList.innerHTML = (item.links || [])
      .map((link) => `<a href="${link.url}" target="_blank" rel="noreferrer">${link.label}</a>`)
      .join("");
  }

  fallbackLink.href = previewTarget;
  fallbackText.textContent = item.link
    ? "Если площадка запрещает iframe, откройте проект в новой вкладке."
    : "В исходнике нет публичной ссылки, показано медиа-превью.";
}

function setViewport(mode) {
  const nextMode = window.matchMedia("(max-width: 760px)").matches ? "mobile" : mode;
  browserFrame.classList.toggle("mobile", nextMode === "mobile");
  browserFrame.classList.toggle("desktop", nextMode === "desktop");
  viewportButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.viewport === nextMode);
  });
}

function openCase(index) {
  hydrateModal(index);
  setViewport(window.matchMedia("(max-width: 760px)").matches ? "mobile" : "desktop");
  caseModal.scrollTop = 0;
  document.body.classList.add("modal-open");
  caseModal.classList.add("is-open");
  caseModal.setAttribute("aria-hidden", "false");
  document.querySelector("[data-close-case]").focus({ preventScroll: true });
}

function closeCase() {
  caseModal.classList.remove("is-open");
  caseModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  window.setTimeout(() => {
    if (!caseModal.classList.contains("is-open")) {
      caseFrame.removeAttribute("src");
      mediaVideo.pause();
      mediaVideo.removeAttribute("src");
      mediaVideo.controls = false;
      mediaVideo.hidden = true;
      mediaVideo.load();
    }
  }, reduceMotion ? 1 : 320);
}

function bindTiltCards() {
  if (reduceMotion || window.matchMedia("(pointer: coarse)").matches) return;

  document.querySelectorAll(".tilt-card").forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      card.style.setProperty("--card-x", `${((x + 0.5) * 100).toFixed(1)}%`);
      card.style.setProperty("--card-y", `${((y + 0.5) * 100).toFixed(1)}%`);
      card.style.transform = `rotateX(${(-y * 3).toFixed(2)}deg) rotateY(${(x * 4).toFixed(2)}deg) translate3d(0, -2px, 0)`;
    });

    card.addEventListener("pointerleave", () => {
      card.style.transform = "";
    });
  });
}

function bindParallax() {
  if (reduceMotion || window.matchMedia("(pointer: coarse)").matches) return;

  document.addEventListener("pointermove", (event) => {
    const mx = `${event.clientX}px`;
    const my = `${event.clientY}px`;
    document.documentElement.style.setProperty("--mx", mx);
    document.documentElement.style.setProperty("--my", my);

    if (pointerFrame) return;
    pointerFrame = requestAnimationFrame(() => {
      const relX = event.clientX / window.innerWidth - 0.5;
      const relY = event.clientY / window.innerHeight - 0.5;

      document.querySelectorAll(".depth-layer").forEach((layer) => {
        const depth = Number(layer.dataset.depth || 0);
        layer.style.setProperty("--px", `${(relX * depth * 90).toFixed(2)}px`);
        layer.style.setProperty("--py", `${(relY * depth * 90).toFixed(2)}px`);
      });

      pointerFrame = null;
    });
  });
}

sectionButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    setSection(button.dataset.sectionLink);
  });
});

caseGallery.addEventListener("click", (event) => {
  const card = event.target.closest("[data-case-index]");
  if (!card) return;
  openCase(Number(card.dataset.caseIndex));
});

viewportButtons.forEach((button) => {
  button.addEventListener("click", () => setViewport(button.dataset.viewport));
});

caseModal.addEventListener("click", (event) => {
  if (event.target === caseModal || event.target.closest("[data-close-case]")) {
    closeCase();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && caseModal.classList.contains("is-open")) {
    closeCase();
  }
});

renderCaseGallery();
renderCollections();
setViewport("desktop");
setSection(window.location.hash.replace("#", "") || "about");
bindTiltCards();
bindParallax();
