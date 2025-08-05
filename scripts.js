document.addEventListener('DOMContentLoaded', () => {
  const orderBtn = document.querySelector('.button');         // "Order Service" butonu
  const modalOverlay = document.querySelector('.modal-overlay'); // Modal arka plan
  const closeBtn = document.querySelector('.close-btn');         // Kapatma butonu

  // Butona tıklanınca modalı göster
  orderBtn.addEventListener('click', () => {
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Sayfa kaydırmayı kapat (isteğe bağlı)
  });

  // Kapat butonuna tıklayınca modalı gizle
  closeBtn.addEventListener('click', () => {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  });

  // Modal arka planına tıklayınca da kapat (sadece modal dışına tıklayınca)
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      modalOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
});