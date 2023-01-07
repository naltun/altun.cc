import lume from "lume/mod.ts";
import blog from "https://deno.land/x/lume_theme_simple_blog@v0.5.0/mod.ts";

const site = lume({
  location: new URL(`https://${Deno.env.get("FQDN")}`),
});

site.use(blog());
site.ignore("LICENSE", "README.md");

export default site;
