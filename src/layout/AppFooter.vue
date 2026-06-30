<template>
  <footer class="app-footer">

    <div class="container">

      <div class="footer-grid">

        <div>
          <h3>جیمبو</h3>

          <p>
            بهترین همراه سفر شما
          </p>
        </div>

        <div>
          <h4>خدمات</h4>

          <ul>
            <li>تور داخلی</li>
            <li>تور خارجی</li>
            <li>هتل</li>
          </ul>
        </div>

        <div>
          <h4>پشتیبانی</h4>

          <ul>
            <li>تماس با ما</li>
            <li>سوالات متداول</li>
          </ul>
        </div>

      </div>

    </div>

  </footer>
</template>

<style scoped>
.app-footer {
  background: white;
  border-top: 1px solid var(--border);
  padding: 60px 0;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 40px;
}

@media (max-width:768px) {
  .footer-grid {
    grid-template-columns: 1fr;
  }
}
</style>