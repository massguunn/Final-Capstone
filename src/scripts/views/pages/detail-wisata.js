const detail = {
    async render() {
        const id = window.location.hash.split("/")[2];
        const response = await fetch(`http://localhost:3000/destinations/${id}`);
        const destination = await response.json();

        return `
         <div class="content" id="content">
    <div class="section main-image-section">
        <img src="${destination.image}" alt="Main Image" class="main-image">
    </div>

    <div class="section">
        <h2>Laut-lautan</h2>
        <div class="thumbnail-gallery">
            <img src="https://via.placeholder.com/100" alt="Thumbnail 1">
            <img src="https://via.placeholder.com/100" alt="Thumbnail 2">
            <img src="https://via.placeholder.com/100" alt="Thumbnail 3">
            <img src="https://via.placeholder.com/100" alt="Thumbnail 3">
            <img src="https://via.placeholder.com/100" alt="Thumbnail 3">
        </div>
        <div class="price-button">
            <span class="price">Rp.${destination.price},-</span>
            <a href="#" class="button">Buy Ticket</a>
        </div>
    </div>

    <div class="section description">
        <h2>Deskripsi</h2>
        <p>${destination.description}</p>
    </div>

    <div class="location">
        <h2>Lokasi</h2>
        <img src="https://via.placeholder.com/600x300" alt="Location Map">
        <br>
        <br>
        <iframe src="${destination.location}" width="600" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>

    <div class="section other-destinations">
        <h2>Temukan Destinasi Lain</h2>
        <div class="cards">
            <div class="card">
                <img src="https://via.placeholder.com/300x200" alt="Destination 1">
                <h3 class="card-title">Mojo Savanna</h3>
                <span class="card-price">Rp. 30.000,-</span>
            </div>
            <div class="card">
                <img src="https://via.placeholder.com/300x200" alt="Destination 2">
                <h3 class="card-title">Rinaldi Beef Noodle</h3>
                <span class="card-price">Rp. 30.000,-</span>
            </div>
        </div>
    </div>
</div>
      `;
    },

    async afterRender() { },
};

export default detail;
