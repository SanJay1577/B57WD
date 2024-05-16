import { Posts } from "../models/posts.js";

export function getAllPosts() {
  return Posts.find().populate("user", "username");
}

export function getUserPosts(userId) {
  return Posts.find({ user: userId }).populate("user", "username email");
}

export function addNewPost(req, currentDate, userId) {
  return new Posts({
    ...req.body,
    date: currentDate,
    user: userId,
  }).save();
}

export function updatePost(req) {
  return Posts.findOneAndUpdate(
    { _id: req.params.id },
    { $set: req.body },
    { new: true }
  );
}

export function deletePost(req) {
  return Posts.findByIdAndDelete({ _id: req.params.id });
}
