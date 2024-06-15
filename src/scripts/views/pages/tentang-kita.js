const tentangKita = {
  async render() {
    return `
          <h2> Ini Adalah halaman Tentang Kita</h2>
    <br>
      <section class="about-us__container">
    <h1 class="about-us__title">Tentang Kami</h1>
    <p>Para Pendiri Trigunar Travel</p>
    <div class="about-us__list">
      <div class="about-us__card">
        <img src="./Lombok/desa-sade.jpeg" alt="" class="about-us__img">
        <div class="about-us__desc">
          <h2 class="about-us__name">Gunawan Rohadi</h2>
          <p>Universitas Hamzanwadi</p>
          <div class="social-media">
            <a href="https://github.com/massguunn"><i class="fa-brands fa-github"></i></a>
            <a href="https://www.linkedin.com/in/gunawan-rohadi/"><i class="fa-brands fa-linkedin"></i></a>
          </div>
        </div>
      </div>
      <div class="about-us__card">
        <img src="./Lombok/triantoro-rizky-anggara.jpg" alt="" class="about-us__img">
        <div class="about-us__desc">
          <h2 class="about-us__name">Triantoro Rizky Anggara</h2>
          <p>Universitas Dinamika Bangsa</p>
          <div class="social-media">
            <a href="https://github.com/BotSlayer21"><i class="fa-brands fa-github"></i></a>
            <a href="https://www.linkedin.com/in/triantoro-rizky-anggara/"><i class="fa-brands fa-linkedin"></i></a>
          </div>
        </div>
      </div>
      <div class="about-us__card">
        <img src="./Lombok/fajar-rahmana-akbar.jpg" alt="" class="about-us__img">
        <div class="about-us__desc">
          <h2 class="about-us__name">Fajar Rahmana Akbar</h2>
          <p>Universitas Muhammadiyah Purwokerto</p>
          <div class="social-media">
            <a href="https://github.com/fjrRA"><i class="fa-brands fa-github"></i></a>
            <a href="https://www.linkedin.com/in/fajar-rahmana-akbar/"><i class="fa-brands fa-linkedin"></i></a>
          </div>
        </div>
      </div>
    </div>
  </section>
          `;
  },

  async afterRender() { },
};

export default tentangKita;
