# Minimal Astro Blog Template

This is a minimal blog template built using [Astro](https://astro.build/) and [tailwindcss](https://tailwindcss.com/).

I built this for my personal blog [alasdairb.com](https://alasdairb.com).

## Features

This template has very few features, with the goal of being a lightweight starting point for you to make your own. 

1. [MD/MDX post content](./src/content/blog/)
2. [Blog feed](./src/components/BlogFeed.astro)
3. [About section](./src/components/About.astro)
4. [Project links section](./src/components/Projects.astro)
5. [Tags](./src/components/TagCloud.astro)
6. [Tag feed](./src/pages/tags/index.astro)
7. [RSS feed](./src/pages/rss.xml.js)
8. [Social links](./src/components/Social.astro)

## How to use

Confiure your `site` URL in [astro.config.mjs](./astro.config.mjs), this is used to generate the RSS feed.

Configure site name & description in [./src/pages/rss.xml.js](./src/pages/rss.xml.js).

Configure social media accounts in [./src/components/Social.astro](./src/components/Social.astro).

Configure project links in [./src/components/Projects.astro](./src/components/Projects.astro).

Configure any Navigation links in [./src/components/Nav.astro](./src/components/Nav.astro) (this is empty by default).

Configure your site Header in [./src/components/Header.astro](./src/components/Header.astro).

Configure your About section in [./src/components/About.astro](./src/components/About.astro).

Blog posts are contained in [`./src/content/blog`](./src/content/blog) using Astro's [Content Collections](https://docs.astro.build/en/guides/content-collections/). Add a new folder for each blog post, with a file called `index.md` or `index.mdx`. 

Images for your blog posts can be placed in an `images` folder inside the blog post's folder. For an example, see ['blog-post-1'](./src/content/blog/blog-post-1/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:3000`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Credits

Thanks to [AstroPaper](https://github.com/satnaing/astro-paper), which helped as a reference, and I have copied a few small utilities directly from there.


