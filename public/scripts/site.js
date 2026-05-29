(function () {
  const header = document.querySelector(".site-header");
  const menuButton = document.querySelector(".site-header__menu-button");
  const mobileMenu = document.querySelector(".mobile-menu");
  const lightSections = document.querySelectorAll(".spotlight-section, .final-cta-section, .site-footer");
  const productVisual = document.querySelector(".product-showcase__visual");
  const productPreview = document.querySelector("[data-product-preview]");
  const productFlowItems = document.querySelectorAll("[data-product-step]");
  const productTemplates = Array.from(document.querySelectorAll("[data-product-template]")).map(createTemplateFromElement);
  const insightVisual = document.querySelector(".insights-showcase__visual");
  const insightPreview = document.querySelector("[data-insight-preview]");
  const insightFlowItems = document.querySelectorAll("[data-insight-step]");
  const insightTemplates = Array.from(document.querySelectorAll("[data-insight-template]")).map(createTemplateFromElement);
  const desktopQuery = window.matchMedia("(min-width: 901px)");
  const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  const productFlowDuration = 12000;
  const insightFlowDuration = 12000;
  const productPanelThemes = [
    "product-dashboard--booking",
    "product-dashboard--services",
    "product-dashboard--team",
    "product-dashboard--finance",
  ];
  const productVisualThemes = [
    "product-showcase__visual--booking",
    "product-showcase__visual--services",
    "product-showcase__visual--team",
    "product-showcase__visual--finance",
  ];
  const productVisualImages = [
    "/assets/showcase-agenda.jpg",
    "/assets/showcase-confirm.jpg",
    "/assets/showcase-report.jpg",
    "/assets/showcase-finance.jpg",
  ];
  const insightPanelThemes = [
    "insight-preview--slots",
    "insight-preview--confirm",
    "insight-preview--margin",
    "insight-preview--clarity",
  ];
  const insightVisualThemes = [
    "insights-showcase__visual--slots",
    "insights-showcase__visual--confirm",
    "insights-showcase__visual--margin",
    "insights-showcase__visual--clarity",
  ];
  const insightVisualImages = [
    "/assets/showcase-agenda.jpg",
    "/assets/showcase-confirm.jpg",
    "/assets/showcase-finance.jpg",
    "/assets/showcase-report.jpg",
  ];
  const sharedVisualImages = Array.from(new Set([...productVisualImages, ...insightVisualImages]));

  const initialProductPanel = createTemplateFromElement(productPreview);
  const initialInsightPanel = createTemplateFromElement(insightPreview);
  let activeProductStep = 0;
  let activeInsightStep = 0;
  let productFlowTimer;
  let productPanelTimer;
  let insightFlowTimer;
  let insightPanelTimer;

  function createTemplateFromElement(element) {
    if (!element) {
      return "";
    }

    if (!element.content) {
      return element.innerHTML;
    }

    const wrapper = document.createElement("div");
    wrapper.append(element.content.cloneNode(true));

    return wrapper.innerHTML;
  }

  function renderTemplate(container, templateHtml) {
    if (!container || !templateHtml) {
      return;
    }

    container.innerHTML = templateHtml;
  }

  function formatCountValue(value, item) {
    const prefix = item.dataset.countPrefix || "";
    const suffix = item.dataset.countSuffix || "";
    const roundedValue = Math.round(value);
    const formattedValue =
      item.dataset.countFormat === "pt-BR" ? roundedValue.toLocaleString("pt-BR") : String(roundedValue);

    return `${prefix}${formattedValue}${suffix}`;
  }

  function animateCountUp(item) {
    const target = Number(item.dataset.countTo || 0);

    if (!Number.isFinite(target)) {
      return;
    }

    if (reducedMotionQuery.matches) {
      item.textContent = formatCountValue(target, item);
      return;
    }

    const duration = 1200;
    const startTime = performance.now();

    function updateValue(now) {
      const elapsed = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - elapsed, 3);

      item.textContent = formatCountValue(target * eased, item);

      if (elapsed < 1) {
        requestAnimationFrame(updateValue);
      }
    }

    requestAnimationFrame(updateValue);
  }

  function initCountUps(scope = document) {
    scope.querySelectorAll(".count-up").forEach(animateCountUp);
  }

  function formatVisualImage(src) {
    return `url("${src}")`;
  }

  function setVisualBackground(element, src, propertyName = "--showcase-image") {
    if (!element || !src) {
      return;
    }

    if (element.dataset.visualImage === src) {
      return;
    }

    element.dataset.visualImage = src;
    element.classList.remove("has-animated-visual");
    element.querySelectorAll(".showcase-visual-layer").forEach((layer) => layer.remove());
    element.style.setProperty(propertyName, formatVisualImage(src));
  }

  function preloadVisualImages(images) {
    images.forEach((src) => {
      const image = new Image();
      image.decoding = "async";
      image.src = src;
      image.decode?.().catch(() => {});
    });
  }

  function getProductPanel(index) {
    if (index === 0) {
      return initialProductPanel;
    }

    return productTemplates[index - 1] || initialProductPanel;
  }

  function restartProductTimer() {
    if (!productFlowItems.length || reducedMotionQuery.matches) {
      return;
    }

    window.clearTimeout(productFlowTimer);
    productFlowTimer = window.setTimeout(() => {
      const nextStep = (activeProductStep + 1) % productFlowItems.length;
      setProductStep(nextStep);
    }, productFlowDuration);
  }

  function renderProductPanel(index) {
    if (!productPreview) {
      return;
    }

    window.clearTimeout(productPanelTimer);
    productPreview.classList.add("is-changing");
    setVisualBackground(productVisual, productVisualImages[index], "--showcase-image");

    productPanelTimer = window.setTimeout(() => {
      productPreview.classList.remove(...productPanelThemes);
      productPreview.classList.add(productPanelThemes[index]);
      productVisual?.classList.remove(...productVisualThemes);
      productVisual?.classList.add(productVisualThemes[index]);
      renderTemplate(productPreview, getProductPanel(index));
      initCountUps(productPreview);
      requestAnimationFrame(() => {
        productPreview.classList.remove("is-changing");
      });
    }, 220);
  }

  function setProductStep(index) {
    if (!productFlowItems[index]) {
      return;
    }

    activeProductStep = index;

    productFlowItems.forEach((item) => {
      item.classList.remove("is-active");
      item.removeAttribute("aria-current");
      item.style.setProperty("--flow-duration", `${productFlowDuration}ms`);
    });

    productFlowItems[index].offsetWidth;
    productFlowItems[index].classList.add("is-active");
    productFlowItems[index].setAttribute("aria-current", "step");
    renderProductPanel(index);
    restartProductTimer();
  }

  function getInsightPanel(index) {
    if (index === 0) {
      return initialInsightPanel;
    }

    return insightTemplates[index - 1] || initialInsightPanel;
  }

  function restartInsightTimer() {
    if (!insightFlowItems.length || reducedMotionQuery.matches) {
      return;
    }

    window.clearTimeout(insightFlowTimer);
    insightFlowTimer = window.setTimeout(() => {
      const nextStep = (activeInsightStep + 1) % insightFlowItems.length;
      setInsightStep(nextStep);
    }, insightFlowDuration);
  }

  function renderInsightPanel(index) {
    if (!insightPreview) {
      return;
    }

    window.clearTimeout(insightPanelTimer);
    insightPreview.classList.add("is-changing");
    setVisualBackground(insightVisual, insightVisualImages[index], "--insights-image");

    insightPanelTimer = window.setTimeout(() => {
      insightPreview.classList.remove(...insightPanelThemes);
      insightPreview.classList.add(insightPanelThemes[index]);
      insightVisual?.classList.remove(...insightVisualThemes);
      insightVisual?.classList.add(insightVisualThemes[index]);
      renderTemplate(insightPreview, getInsightPanel(index));
      initCountUps(insightPreview);
      requestAnimationFrame(() => {
        insightPreview.classList.remove("is-changing");
      });
    }, 220);
  }

  function setInsightStep(index) {
    if (!insightFlowItems[index]) {
      return;
    }

    activeInsightStep = index;

    insightFlowItems.forEach((item) => {
      item.classList.remove("is-active");
      item.removeAttribute("aria-current");
      item.style.setProperty("--flow-duration", `${insightFlowDuration}ms`);
    });

    insightFlowItems[index].offsetWidth;
    insightFlowItems[index].classList.add("is-active");
    insightFlowItems[index].setAttribute("aria-current", "step");
    renderInsightPanel(index);
    restartInsightTimer();
  }

  function updateHeaderState() {
    if (!header) {
      return;
    }

    const headerRect = header.getBoundingClientRect();
    const probeY = headerRect.top + headerRect.height / 2;
    const isOnLight = Array.from(lightSections).some((section) => {
      const sectionRect = section.getBoundingClientRect();

      return sectionRect.top <= probeY && sectionRect.bottom >= probeY;
    });

    header.classList.toggle("is-scrolled", window.scrollY > 16);
    header.classList.toggle("is-on-light", isOnLight);
  }

  function updateMenuState(isOpen) {
    if (!header || !menuButton) {
      return;
    }

    header.classList.toggle("is-menu-open", isOpen);
    document.body.classList.toggle("is-menu-open", isOpen);
    menuButton.setAttribute("aria-expanded", String(isOpen));
  }

  function closeMobileMenu() {
    updateMenuState(false);
  }

  updateHeaderState();
  initCountUps();

  productFlowItems.forEach((item, index) => {
    item.style.setProperty("--flow-duration", `${productFlowDuration}ms`);
    item.addEventListener("click", () => setProductStep(index));
  });
  preloadVisualImages(sharedVisualImages);
  setVisualBackground(productVisual, productVisualImages[activeProductStep], "--showcase-image");
  restartProductTimer();

  insightFlowItems.forEach((item, index) => {
    item.style.setProperty("--flow-duration", `${insightFlowDuration}ms`);
    item.addEventListener("click", () => setInsightStep(index));
  });
  setVisualBackground(insightVisual, insightVisualImages[activeInsightStep], "--insights-image");
  restartInsightTimer();

  window.addEventListener("scroll", updateHeaderState, { passive: true });
  window.addEventListener("resize", updateHeaderState);

  menuButton?.addEventListener("click", () => {
    updateMenuState(!header?.classList.contains("is-menu-open"));
  });

  mobileMenu?.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      closeMobileMenu();
    }
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMobileMenu();
    }
  });

  const handleDesktopChange = (event) => {
    if (event.matches) {
      closeMobileMenu();
    }
  };

  if (desktopQuery.addEventListener) {
    desktopQuery.addEventListener("change", handleDesktopChange);
  } else {
    desktopQuery.addListener(handleDesktopChange);
  }
})();
