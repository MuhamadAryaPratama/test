class headerBarAdmin extends HTMLElement {
  connectedCallback() {
    this.render();
    this.addEventListeners();
  }

  render() {
    this.innerHTML = `
      <nav class="navbar navbar-expand-lg navbar-dark custom-navbar">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">NusantaRasa</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="offcanvas offcanvas-end text-bg-dark custom-bg" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <a id="logoutButton" class="nav-link mx-lg-2" aria-current="page" href="#">Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    `;
  }

  addEventListeners() {
    const logoutButton = this.querySelector("#logoutButton");
    if (logoutButton) {
      logoutButton.addEventListener("click", this.logout.bind(this));
    }
  }

  async logout(event) {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/logout", {
        method: "DELETE", // Menggunakan method DELETE
        headers: {
          "Content-Type": "application/json",
          // You might need to include additional headers like Authorization if required by your backend
        },
      });

      if (response.ok) {
        // Logout successful, redirect to login page
        window.location.href = "/"; // Sesuaikan path jika perlu
      } else {
        // Handle logout failure, if needed
        console.error("Logout failed");
        // Optionally show an error message to the user
      }
    } catch (error) {
      console.error("Error during logout:", error);
      // Handle network errors or other exceptions
    }
  }
}

customElements.define("header-bar-admin", headerBarAdmin);
