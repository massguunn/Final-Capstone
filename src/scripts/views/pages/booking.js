const tentangKita = {
  async render() {
    return ` 
    <!-- <h2> Ini Adalah halaman Sign Up</h2> -->
    <br />

    <section class="signup-image">
      <div class="signup-container">
        <h1>BOOKING</h1>
         <p class="des"> Di atas input name itu nanti ada field id_booking-nya langsung muncul</p>

        <form action="" class="signup-container__signup-field">
        <input type="text" placeholder="Ini nanti muncul id_booking-nya" required disabled>
          <input type="text" placeholder="Input your name" required>
          <input type="text" placeholder="Input ypur username" required>
          <input type="email" placeholder="Input your email" required>
          <input type="date" placeholder="Input your date" required>
          <div class="buttons">
            <button type="submit" class="login-btn">Booking</button>
            <button type="button" class="signup-btn">Cancel</button>
          </div>
        </form>
      </div>
  </section>
    `;
  },

  async afterRender() {
    const header = document.querySelector(".app-bar");
    if (header) {
      header.style.display = "none";
    }
  },
};

export default tentangKita;
