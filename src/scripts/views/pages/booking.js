const tentangKita = {
  async render() {
    // Fetch data from other table, e.g., 'places'
    const destination = await fetch("http://localhost:3000/destinations")
      .then(response => response.json());

    // Create options for place selection
    const destiOptions = destination.map(destination =>
      `<option value="${destination.id}">${destination.name}</option>`
    ).join('');

    return ` 
    <br />
    <section class="signup-image">
      <div class="signup-container">
        <h1>BOOKING</h1>
        <p> Di atas input name itu nanti ada field id_booking-nya langsung muncul</p>

        <form action="" id="form-booking" class="signup-container__signup-field">
          <select id="id" name="id" required>
            ${destiOptions}
          </select>
          <input type="text" id="user_name" name="user_name" placeholder="Input your name" required>
          <input type="email" id="user_email" name="user_email" placeholder="Input your email" required>
          <input type="text" id="No_hp" name="No_hp" placeholder="Input your phone number" required>
          <input type="date" id="booking_date" name="booking_date" required>
          <div class="buttons">
            <button type="submit" class="login-btn">Booking</button>
            <button type="button" class="signup-btn">Cancel</button>
          </div>
        </form>
        <div id="form-response"></div>
      </div>
    </section>
    `;
  },

  async afterRender() {
    const header = document.querySelector(".app-bar");
    if (header) {
      header.style.display = "none";
    }

    const form = document.getElementById("form-booking");
    form.addEventListener("submit", async (form) => {
      form.preventDefault();

      const formData = {
        id: form.id.value,
        user_name: form.user_name.value,
        user_email: form.user_email.value,
        No_hp: form.No_hp.value,
        booking_date: form.booking_date.value,
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
          form.reset();
          document.getElementById("form-response").innerText = result.message;
        } else {
          document.getElementById("form-response").innerText = result.error || "An error occurred. Please try again.";
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        document.getElementById("form-response").innerText = "An error occurred. Please try again.";
      }
    });
  },
};

export default tentangKita;
