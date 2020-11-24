// Pssst, I've created a github package - https://github.com/brookesb91/dismissible

const showBanner = (selector) => {
    hideBanners();
    // Ensure animation plays even if the same alert type is triggered.
    requestAnimationFrame(() => {
        const banner = document.querySelector(selector);
        banner.classList.add("visible");
    });
};

const hideBanners = (e) => {
    document
        .querySelectorAll(".banner.visible")
        .forEach((b) => b.classList.remove("visible"));
};
