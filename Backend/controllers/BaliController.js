import BaliMenu from "../models/BaliModel.js";

export const createBaliMenu = async (req, res) => {
  const { restaurant_name, description, google_maps_link, rating } = req.body;

  if (!restaurant_name || !description || !google_maps_link || rating == null) {
    return res.status(400).json({ msg: "Please provide all required fields" });
  }

  try {
    const newMenu = await BaliMenu.create({
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

export const getBaliMenu = async (req, res) => {
  try {
    const menus = await BaliMenu.findAll();
    res.json(menus);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Failed to retrieve menu items" });
  }
};

export const deleteBaliMenu = async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await BaliMenu.destroy({
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

export const editBaliMenu = async (req, res) => {
  const { id } = req.params;
  const { restaurant_name, description, google_maps_link, rating } = req.body;

  try {
    const menu = await BaliMenu.findByPk(id);
    if (!menu) {
      return res.status(404).json({ msg: "Menu item not found" });
    }

    menu.restaurant_name = restaurant_name || menu.restaurant_name;
    menu.description = description || menu.description;
    menu.google_maps_link = google_maps_link || menu.google_maps_link;
    menu.rating = rating || menu.rating;

    await menu.save();
    res.status(200).json(menu);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Failed to edit menu item" });
  }
};
