document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.querySelector(".button"); // Order Service butonu
  const modal = document.querySelector(".modal-overlay");
  const closeBtn = document.querySelector(".close-btn");

  openBtn.addEventListener("click", () => {
    modal.classList.add("active"); // modal görünür olsun
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.remove("active"); // modal gizlensin
  });

  // İstersen, modal dışına tıklayınca kapansın:
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
    }
  });
});