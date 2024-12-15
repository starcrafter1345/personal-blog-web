import * as path from "node:path";
import * as fs from "node:fs/promises";

const ARTICLE_PATH = path.join(process.cwd(), "data", "articles");

export async function create(title, text) {
  const date = new Date();
  const id = Date.now();

  const data = {
    id: id,
    title: title,
    text: text,
    date: date,
  };

  const json = JSON.stringify(data);

  await fs.writeFile(path.join(ARTICLE_PATH, String(id)), json);
}

export async function read(id) {
  try {
    return JSON.parse(await fs.readFile(path.join(ARTICLE_PATH, String(id))));
  } catch (error) {
    throw error;
  }
}

export async function readAll() {
  const objs = [];

  try {
    const articles = await fs.readdir(ARTICLE_PATH);

    for (let article of articles) {
      objs.push(await read(article));
    }
  } catch (error) {
    throw error;
  }

  return objs;
}

export async function update(id, title, text) {
  const date = new Date();

  const data = {
    id: id,
    title: title,
    text: text,
    date: date,
  };

  const json = JSON.stringify(data);

  await fs.writeFile(path.join(ARTICLE_PATH, String(id)), json);
}
