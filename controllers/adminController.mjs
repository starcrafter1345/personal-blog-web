import { create, readAll, remove } from "../model/article.mjs";

export async function adminController(req, res) {
  const articles = await readAll();

  res.render("admin/admin", {
    articles: articles,
  });
}

export async function deleteController(req, res) {
  const id = req.params["id"];

  await remove(id);

  res.redirect("/admin");
}

export async function addGetController(req, res) {
  res.render("admin/new_article");
}

export async function addPostController(req, res) {
  const { title, text } = req.body;

  await create(title, text);

  res.redirect("/admin");
}
