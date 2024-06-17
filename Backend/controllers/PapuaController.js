import PapuaMenu from "../models/PapuaModel.js";

export const createPapuaMenu = async (req, res) => {
  const { restaurant_name, description, google_maps_link, rating } = req.body;

  if (!restaurant_name || !description || !google_maps_link || rating == null) {
    return res.status(400).json({ msg: "Please provide all required fields" });
  }

  try {
    const newMenu = await PapuaMenu.create({
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

export const getPapuaMenu = async (req, res) => {
  try {
    const menus = await PapuaMenu.findAll();
    res.json(menus);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Failed to retrieve menu items" });
  }
};

export const deletePapuaMenu = async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await PapuaMenu.destroy({
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

export const editPapuaMenu = async (req, res) => {
  const { id } = req.params;
  const { restaurant_name, description, google_maps_link, rating } = req.body;

  if (!restaurant_name || !description || !google_maps_link || rating == null) {
    return res.status(400).json({ msg: "Please provide all required fields" });
  }

  try {
    const menu = await PapuaMenu.findByPk(id);

    if (!menu) {
      return res.status(404).json({ msg: "Menu item not found" });
    }

    menu.restaurant_name = restaurant_name;
    menu.description = description;
    menu.google_maps_link = google_maps_link;
    menu.rating = rating;

    await menu.save();

    res.status(200).json({ msg: "Menu item updated successfully", menu });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Failed to update menu item" });
  }
};
