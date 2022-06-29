const Announcement = require("../models/announcementMdel");
const asyncHandler = require("express-async-handler");

const addAnnounce = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("text is required");
  }
  const announce = await Announcement.create({
    text: req.body.text,
  });
  res.status(200).json(announce);
});

const deleteAnnounce = asyncHandler(async (req, res) => {
  //delete announcement
  const announce = await Announcement.findById(req.params.id);
  if (!announce) {
    res.status(404);
    throw new Error("announcement not found");
  }
  await announce.remove();

  res.status(200).json({ message: "announcement deleted" });
});

const getAnnounce = asyncHandler(async (req, res) => {
  //get all announcements
  const announcements = await Announcement.find();

  res.status(200).json(announcements);
});

module.exports = { addAnnounce, deleteAnnounce, getAnnounce };
