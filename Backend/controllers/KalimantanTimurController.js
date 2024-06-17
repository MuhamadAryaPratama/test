import KalimantanTimurMenu from "../models/KalimantanTimurModel.js";

export const createKalimantanTimurMenu = async (req, res) => {
  const { restaurant_name, description, google_maps_link, rating } = req.body;

  if (!restaurant_name || !description || !google_maps_link || rating == null) {
    return res.status(400).json({ msg: "Please provide all required fields" });
  }

  try {
    const newMenu = await KalimantanTimurMenu.create({
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

export const getKalimantanTimurMenu = async (req, res) => {
  try {
    const menus = await KalimantanTimurMenu.findAll();
    res.json(menus);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Failed to retrieve menu items" });
  }
};

export const deleteKalimantanTimurMenu = async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await KalimantanTimurMenu.destroy({
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

export const editKalimantanTimurMenu = async (req, res) => {
  const { id } = req.params; // Ambil ID menu dari parameter URL
  const { restaurant_name, description, google_maps_link, rating } = req.body; // Ambil data baru dari body request

  try {
    // Cari menu berdasarkan ID
    const menu = await KalimantanTimurMenu.findByPk(id);

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
