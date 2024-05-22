import express from "express";
import {
  addNewPost,
  deletePost,
  getAllPosts,
  getUserPosts,
  updatePost,
} from "../Controllers/posts.js";
const router = express.Router();

//get all

router.get("/all", async (req, res) => {
  try {
    const posts = await getAllPosts();
    if (posts.length <= 0) {
      return res.status(404).json({
        error: "No Data Available",
      });
    }
    return res.status(200).json({
      data: posts,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Internal server Error",
    });
  }
});

//get specific

router.get("/user/all", async (req, res) => {
  try {
    // TODO: Make Dynamic User After Autentication setup
    const userPosts = await getUserPosts(req.user._id);
    if (userPosts.length <= 0) {
      return res.status(404).json({
        error: "No Data Available",
      });
    }
    return res.status(200).json({ data: userPosts });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Internal server Error",
    });
  }
});

//post new data

router.post("/add", async (req, res) => {
  try {
    const currentDate = new Date().toJSON().slice(0, 10);
    const newPost = await addNewPost(req, currentDate);
    if (!newPost) {
      return res.status(400).json({
        error: "Error Occcured",
      });
    }
    return res.status(201).json({
      message: "Data added Succesfully",
      data: newPost,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Internal server Error",
    });
  }
});

//edit new data
router.put("/user/edit/:id", async (req, res) => {
  try {
    const editedPost = await updatePost(req);
    if (!editedPost) {
      return res.status(400).json({
        error: "Error Occured",
      });
    }
    return res.status(200).json({
      message: "Updated Successfully",
      data: editedPost,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Internal server Error",
    });
  }
});

router.delete("/user/delete/:id", async (req, res) => {
  try {
    const deleteResponse = await deletePost(req);
    if (!deleteResponse) {
      return res.status(400).json({
        error: "Error Occured",
      });
    }
    return res.status(200).json({
      message: "Deleted Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Internal server Error",
    });
  }
});
export const postsRouter = router;

//delete

//exporting all routes
