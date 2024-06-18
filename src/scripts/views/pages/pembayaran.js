const pembayaran = {
  async render() {
    return `
     <section class="checkout-section">
    <div class="checkout-section__container">
      <h1 class="checkout-section__title">PEMBAYARAN</h1>

      <form id="checkout-form" class="checkout-section__form">
        <input id="booking_id" name="booking_id" type="text" placeholder="Masukan kode booking" required>
        <input id="user_name" name="user_name" type="text" placeholder="Masukan nama" required>
        <input id="user_email" name="user_email" type="email" placeholder="Masukan email" required>
        <input id="No_hp" name="No_hp" type="number" placeholder="Masukan Nomer HP" required>
        <input id="image" name="image" type="file" placeholder="Masukan bukti pembayaran." required>
        <div class="buttons">
          <button type="submit" class="submit-btn">Bayar</button>
          <a href="/#/home" class="cancel-btn">Cancel</a>
        </div>
      </form>
      <div id="form-response" style="color:#f1f1f1;"></div>
    </div>
  </section>
          `;
  },

  async afterRender() {
    const form = document.getElementById("checkout-form");
    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      const formData = {
        id: formElements.id.value,
        user_name: formElements.user_name.value,
        user_email: formElements.user_email.value,
        No_hp: formElements.No_hp.value,
        image: formElements.image.value,
      };

      try {
        const response = await fetch("http://localhost:3000/bookings", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const result = await response.json();

        if (response.ok) {
          // Hapus teks pada form
          form.reset();

          // Tampilkan pesan respons
          document.getElementById("form-response").innerText = result.message;
        } else {
          // Tampilkan pesan error jika terjadi kesalahan
          document.getElementById("form-response").innerText =
            result.error || "An error occurred. Please try again.";
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        document.getElementById("form-response").innerText =
          "An error occurred. Please try again.";
      }
    });
  },
};

export default pembayaran;
