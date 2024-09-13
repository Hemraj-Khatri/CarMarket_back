import express from "express";
import {
  AddListing,
  allListings,
  getListById,
  getNewListings,
  recentListings,

} from "../controller/addListing.controller.js";
import  { checkAdmin, checkAuth } from "../middleware/auth.user.js";
const router = express.Router();

router.post("/addListing", checkAuth, AddListing);
router.get("/allListings", allListings);
router.get("/recentListings", recentListings);
router.get("/newListings", getNewListings);
router.get("/:id", getListById);
export default router;
