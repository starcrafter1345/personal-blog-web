import { create, read, readAll, remove, update } from "../model/article.mjs";

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

export async function editGetController(req, res) {
  const id = req.params["id"];

  const article = await read(id);

  res.render("admin/edit_article", {
    article: article,
  });
}

export async function editPostController(req, res) {
  const id = req.params["id"];

  const { title, text } = req.body;

  await update(id, title, text);

  res.redirect("/admin");
}
