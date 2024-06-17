import BengkuluMenu from "../models/BengkuluModel.js";

export const createBengkuluMenu = async (req, res) => {
  const { restaurant_name, description, google_maps_link, rating } = req.body;

  if (!restaurant_name || !description || !google_maps_link || rating == null) {
    return res.status(400).json({ msg: "Please provide all required fields" });
  }

  try {
    const newMenu = await BengkuluMenu.create({
      restaurant_name,
      description,
      google_maps_link,
      rating,
    });
    res.status(201).json(newMenu);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Failed to create menu item" });
  }
};

export const getBengkuluMenu = async (req, res) => {
  try {
    const menus = await BengkuluMenu.findAll();
    res.json(menus);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Failed to retrieve menu items" });
  }
};

export const deleteBengkuluMenu = async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await BengkuluMenu.destroy({
      where: { id },
    });

    if (!deleted) {
      return res.status(404).json({ msg: "Menu item not found" });
    }

    res.status(200).json({ msg: "Menu item deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Failed to delete menu item" });
  }
};

export const editBengkuluMenu = async (req, res) => {
  const { id } = req.params; // Ambil ID menu dari parameter URL
  const { restaurant_name, description, google_maps_link, rating } = req.body; // Ambil data baru dari body request

  try {
    // Cari menu berdasarkan ID
    const menu = await BengkuluMenu.findByPk(id);

    // Jika menu tidak ditemukan, kembalikan respons 404
    if (!menu) {
      return res.status(404).json({ msg: "Menu item not found" });
    }

    // Update data menu
    menu.restaurant_name = restaurant_name;
    menu.description = description;
    menu.google_maps_link = google_maps_link;
    menu.rating = rating;

    // Simpan perubahan ke database
    await menu.save();

    // Kembalikan respons sukses
    res
      .status(200)
      .json({ msg: "Menu item updated successfully", updatedMenu: menu });
  } catch (err) {
    console.error(err);
    // Tangani kesalahan
    res.status(500).json({ msg: "Failed to update menu item" });
  }
};
