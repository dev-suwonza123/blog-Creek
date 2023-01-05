import rss from "@astrojs/rss";

const postImportResult = import.meta.globEager("./posts/*.md");
const posts = Object.values(postImportResult);

export const get = () =>
  rss({
    title: "NAZAVIP | เว็บตรงปลอดภัย",
    description: "NAZAVIP",
    site: import.meta.env.SITE,
    items: import.meta.glob("./posts/**/*.md"),
  });
