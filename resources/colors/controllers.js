import { Color } from "./model.js";

export const allColors = async (req, res) => {
  try {
    const colors = await Color.find();
    res.status(200).json({
      message: "All colors",
      colors: colors.map((c) => ({ name: c.name, hex: c.hex })),
    });
  } catch (e) {
    res.status(400);
  }
};

export const createColor = async (req, res) => {
  const { name, hex } = req.body;
  try {
    const newColor = await Color.create({ name: name, hex: hex });
    res.status(201).json({ color: newColor });
  } catch (e) {
    res.status(400).json({ message: e.message });
    throw new Error(e.message);
  }
};

export const deleteColor = async (req, res) => {
  const { name } = req.body;
  try {
    const deleted = await Color.findOneAndDelete({ name: name });
    res.status(200).json({
      message: "Item Deleted",
      colors: { name: deleted.name, hex: deleted.hex },
    });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

export const updateColor = async (req, res) => {
  const { name, hex } = req.body;
  try {
    await Color.findOneAndUpdate({ name: name, hex: hex });
    res.status(200).json({
      message: "Item Updated",
    });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};
