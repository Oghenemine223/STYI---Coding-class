document.addEventListener("DOMContentLoaded", function () {
    const galleryContainer = document.querySelector(".gameimg");
    const scrollStep = galleryContainer.clientWidth;

    let scrollPosition = 0;

    document.getElementById("nextBtn").addEventListener("click", function () {
        scrollPosition += scrollStep;
        galleryContainer.scrollTo({
            left: scrollPosition,
            behavior: "smooth",
        });
    });

    document.getElementById("prevBtn").addEventListener("click", function () {
        scrollPosition -= scrollStep;
        galleryContainer.scrollTo({
            left: scrollPosition,
            behavior: "smooth",
        });
    });
});
