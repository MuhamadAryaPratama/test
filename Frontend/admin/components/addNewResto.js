class AddNewResto extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="container">
        <div class="dashboard-content">
          <div class="addnew-resto">
            <h2 class="addnew-title">Tambah Restoran Baru</h2>
            <form id="addnew-form" enctype="multipart/form-data">
              <label for="nama-resto">Nama Resto:</label>
              <input type="text" id="nama-resto" name="restaurant_name" required>
              <label for="deskripsi">Deskripsi:</label>
              <textarea id="deskripsi" name="description" required></textarea>
              <label for="rating">Rating:</label>
              <input type="number" id="rating" name="rating" min="1" max="5" required>
              <label for="link-gmaps">Link Google Maps:</label>
              <input type="url" id="link-gmaps" name="google_maps_link" required>
              
              <label for="provinsi">Provinsi:</label>
              <select name="provinsi" id="provinsi" required>
                <option value="">Pilih Provinsi</option>
                <option value="aceh">Nanggroe Aceh Darussalam</option>
                <option value="sumut">Sumatera Utara</option>
                <option value="sumsel">Sumatera Selatan</option>
                <option value="sumbar">Sumatera Barat</option>
                <option value="bengkulu">Bengkulu</option>
                <option value="riau">Riau</option>
                <option value="kepulauanriau">Kepulauan Riau</option>
                <option value="jambi">Jambi</option>
                <option value="lampung">Lampung</option>
                <option value="bangkabelitung">Bangka Belitung</option>
                <option value="banten">Banten</option>
                <option value="jakarta">DKI Jakarta</option>
                <option value="jawabarat">Jawa Barat</option>
                <option value="jawatengah">Jawa Tengah</option>
                <option value="yogyakarta">Daerah Istimewa Yogyakarta</option>
                <option value="jawatimur">Jawa Timur</option>
                <option value="bali">Bali</option>
                <option value="ntt">Nusa Tenggara Timur</option>
                <option value="ntb">Nusa Tenggara Barat</option>
                <option value="gorontalo">Gorontalo</option>
                <option value="sulawesibarat">Sulawesi Barat</option>
                <option value="sulawesitengah">Sulawesi Tengah</option>
                <option value="sulawesiutara">Sulawesi Utara</option>
                <option value="sulawesitenggara">Sulawesi Tenggara</option>
                <option value="sulawesiselatan">Sulawesi Selatan</option>
                <option value="kalimantanbarat">Kalimantan Barat</option>
                <option value="kalimantantimur">Kalimantan Timur</option>
                <option value="kalimantanselatan">Kalimantan Selatan</option>
                <option value="kalimantantengah">Kalimantan Tengah</option>
                <option value="kalimantanutara">Kalimantan Utara</option>
                <option value="maluku">Maluku</option>
                <option value="malukuutara">Maluku Utara</option>
                <option value="papua">Papua</option>
              </select>
              <button type="button" id="submit-btn">Submit</button>
            </form>
          </div>
        </div>
      </div>
    `;

    this.querySelector("#submit-btn").addEventListener(
      "click",
      this.submitForm.bind(this) // Bind the submitForm method to this context
    );
  }

  async submitForm() {
    const form = document.querySelector("#addnew-form");
    const provinsi = form.querySelector("#provinsi").value;

    // Check if the selected province is valid
    if (provinsi === "") {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Please select a province.",
      });
      return;
    }

    // Check if all required fields are filled
    const restaurant_name = form.querySelector("#nama-resto").value;
    const description = form.querySelector("#deskripsi").value;
    const rating = form.querySelector("#rating").value;
    const google_maps_link = form.querySelector("#link-gmaps").value;

    if (!restaurant_name || !description || !rating || !google_maps_link) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Please fill out all required fields.",
      });
      return;
    }

    const data = {
      restaurant_name,
      description,
      rating,
      google_maps_link,
    };

    try {
      const response = await fetch(`http://localhost:4000/${provinsi}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "New restaurant added successfully.",
        });
        form.reset();
      } else {
        const errorData = await response.json();
        Swal.fire({
          icon: "error",
          title: "Error",
          text: `Failed to add restaurant: ${errorData.msg}`,
        });
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An error occurred while adding the restaurant.",
      });
    }
  }
}

customElements.define("add-new-resto", AddNewResto);
