# Suraj Singh Chahar — Portfolio

My personal portfolio website. Live at [iamsurajchahar.vercel.app](https://iamsurajchahar.vercel.app/).

## What's inside

- **Home** — about me, work experience, education, skills, and featured projects
- **Blog** — technical articles written in MDX (npm publishing, CI/CD, JWT auth, and more)
- **Resources** — tools, references, and learning material I use and recommend
- Dark mode, smooth scroll animations, and a fully responsive layout

## Tech stack

- [Next.js 14](https://nextjs.org/) (App Router) with TypeScript
- [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/) + [Magic UI](https://magicui.design/) for animations
- MDX for blog content, rendered with `unified`/`rehype-pretty-code`

## Running locally

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

To add a blog post, drop a new `.mdx` file in `content/` with `title`, `publishedAt`, and `summary` frontmatter. Projects, work experience, and skills are all edited in one place: `src/data/resume.tsx`.

## Contact

- GitHub: [@iamsurajchahar](https://github.com/iamsurajchahar)
- LinkedIn: [imsurajchahar](https://www.linkedin.com/in/imsurajchahar/)
- Email: contact.chahar@gmail.com
