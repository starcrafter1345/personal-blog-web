import { readAll, remove } from "../model/article.mjs";

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
