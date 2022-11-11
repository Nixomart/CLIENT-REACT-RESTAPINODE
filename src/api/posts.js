import axios from "axios";

export const getPostsRequest = async () =>
  await axios.get("http://localhost:4000/posts");

export const createPostRequest = async (post) => {
  const form = new FormData();

  for (let key in post) {
    form.append(key, post[key]);
  }

  return await axios.post("http://localhost:4000/addPost", form, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const deletePostRequest = async (id) =>
  await axios.delete("http://localhost:4000/posts/" + id);

export const getPostRequest = async (id) =>
  await axios.get("http://localhost:4000/posts/" + id);

export const updatePostRequest = async (id, post) => {
  const form = new FormData();
  for (let key in post) {
    form.append(key, post[key]);
  }

  return await axios.put(`http://localhost:4000/posts/${id}`, form, {
    headers: {
      "Content-Type": "mulipart/form-data",
    },
  });
};
