import "./components/headerBarAdmin.js";
import "./components/addNewResto.js";
import "./components/editResto.js";
import "./components/footerBarAdmin.js";

// Function to fetch dashboard data after successful login
async function fetchDashboard() {
  try {
    const response = await fetch("http://localhost:4000/dashboard", {
      method: "GET",
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch dashboard");
    }

    const data = await response.json();
  } catch (error) {
    console.error("Error fetching dashboard:", error);
  }
}

fetchDashboard();
