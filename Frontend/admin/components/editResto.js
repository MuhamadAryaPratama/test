class EditResto extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="container">
        <div class="dashboard-content">
          <div class="editResto">
            <h2 class="editresto-title">Edit Restoran Berdasarkan Provinsi</h2>
            <form id="editpage-form">
              <label for="provinsi-select">Pilih Provinsi:</label>
              <select name="provinsi-select" id="provinsi-select" required>
                <option value="">Pilih Provinsi</option>
                <option value="aceh">Nanggroe Aceh Darussalam</option>
                <option value="sumaterautara">Sumatera Utara</option>
                <option value="sumateraselatan">Sumatera Selatan</option>
                <option value="sumaterabarat">Sumatera Barat</option>
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
                <option value="nusatenggaratimur">Nusa Tenggara Timur</option>
                <option value="nusatenggarabarat">Nusa Tenggara Barat</option>
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
            </form>
            <div id="resto-data"></div>
          </div>
        </div>
      </div>
    `;

    const provinsiSelect = this.querySelector("#provinsi-select");
    provinsiSelect.addEventListener("change", this.loadRestoData.bind(this));
  }

  async loadRestoData() {
    const provinsi = document.querySelector("#provinsi-select").value;
    const restoDataDiv = document.querySelector("#resto-data");

    if (!provinsi) {
      restoDataDiv.innerHTML = "";
      return;
    }

    try {
      const response = await fetch(`http://localhost:4000/${provinsi}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const restaurantDataArray = await response.json();

      restoDataDiv.innerHTML = `
        <h3 class="dataresto-title">Data Restoran di ${provinsi}</h3>
      `;

      restaurantDataArray.forEach((menu) => {
        restoDataDiv.innerHTML += `
          <div class="resto-container" data-id="${menu.id}">
            <div class="resto-info">
              <h3 class="resto-info-title">${menu.restaurant_name}</h3>
              <p class="resto-info-description">${menu.description}</p>
              <p class="resto-info-detail"><a href="${menu.google_maps_link}" target="_blank">Google Maps</a></p>
              <p class="resto-info-detail">★ ${menu.rating}</p>
            </div>
            <div class="button-container">
              <button class="edit-btn" data-id="${menu.id}">Edit</button>
              <button class="delete-btn" data-id="${menu.id}">Delete</button>
            </div>
          </div>
        `;
      });

      restoDataDiv.querySelectorAll(".edit-btn").forEach((editButton) => {
        editButton.addEventListener("click", (event) => this.editResto(event));
      });

      restoDataDiv.querySelectorAll(".delete-btn").forEach((deleteButton) => {
        deleteButton.addEventListener("click", (event) =>
          this.deleteResto(event)
        );
      });
    } catch (error) {
      console.error("Error fetching data:", error);
      restoDataDiv.innerHTML = `<p class="error-msg">Failed to fetch data for ${provinsi}</p>`;
    }
  }

  async editResto(event) {
    const id = event.target.dataset.id;
    const provinsi = document.querySelector("#provinsi-select").value;
    const restoDataDiv = document.querySelector(
      `#resto-data .resto-container[data-id="${id}"] .resto-info`
    );

    const currentName =
      restoDataDiv.querySelector(".resto-info-title").textContent;
    const currentDescription = restoDataDiv.querySelector(
      ".resto-info-description"
    ).textContent;
    const currentGoogleMapsLink = restoDataDiv.querySelector(
      ".resto-info-detail a"
    ).href;
    const currentRating = restoDataDiv
      .querySelector(".resto-info-detail:last-child")
      .textContent.slice(2);

    const { value: formValues } = await Swal.fire({
      title: "Edit Restaurant",
      html: `
        <label for="swal-input1">Name</label><input id="swal-input1" class="swal2-input" value="${currentName}">
        <label for="swal-input2">Description</label><input id="swal-input2" class="swal2-input" value="${currentDescription}">
        <label for="swal-input3">Google Maps Link</label><input id="swal-input3" class="swal2-input" value="${currentGoogleMapsLink}">
        <label for="swal-input4">Rating</label><input id="swal-input4" class="swal2-input" value="${currentRating}">
      `,
      focusConfirm: false,
      preConfirm: () => {
        return [
          document.getElementById("swal-input1").value,
          document.getElementById("swal-input2").value,
          document.getElementById("swal-input3").value,
          document.getElementById("swal-input4").value,
        ];
      },
    });

    if (formValues) {
      const [newName, newDescription, newGoogleMapsLink, newRating] =
        formValues;

      if (newName && newDescription && newGoogleMapsLink && newRating) {
        try {
          const response = await fetch(
            `http://localhost:4000/${provinsi}/${id}`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                restaurant_name: newName,
                description: newDescription,
                google_maps_link: newGoogleMapsLink,
                rating: newRating,
              }),
            }
          );

          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }

          // Update Resto
          restoDataDiv.querySelector(".resto-info-title").textContent = newName;
          restoDataDiv.querySelector(".resto-info-description").textContent =
            newDescription;
          restoDataDiv.querySelector(".resto-info-detail a").href =
            newGoogleMapsLink;
          restoDataDiv.querySelector(".resto-info-detail a").textContent =
            "Google Maps";
          restoDataDiv.querySelector(
            ".resto-info-detail:last-child"
          ).textContent = `★ ${newRating}`;

          // Show success message
          Swal.fire({
            title: "Success!",
            text: "Data berhasil diubah.",
            icon: "success",
          });
        } catch (error) {
          console.error("Error updating data:", error);
          Swal.fire("Error", "Failed to update restaurant data.", "error");
        }
      }
    }
  }

  async deleteResto(event) {
    const id = event.target.dataset.id;
    const provinsi = document.querySelector("#provinsi-select").value;

    const confirmation = await Swal.fire({
      title: "Are you sure?",
      text: "Do you really want to delete this restaurant?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    });

    if (confirmation.isConfirmed) {
      try {
        const response = await fetch(
          `http://localhost:4000/${provinsi}/${id}`,
          {
            method: "DELETE",
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        Swal.fire({
          title: "Deleted!",
          text: "Menu item deleted successfully!",
          icon: "success",
        });

        this.loadRestoData();
      } catch (error) {
        console.error("Error deleting menu item:", error);

        Swal.fire({
          title: "Error",
          text: "Failed to delete menu item.",
          icon: "error",
        });
      }
    }
  }
}

customElements.define("edit-resto", EditResto);
