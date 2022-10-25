# portfolio-eric-pereira
[<img height=40 witdh=40 src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />](https://open.vscode.dev/cirebox/portfolio-eric-pereira)

A Visual Studio Code themed developer portfolio website built with Next.js and deployed on Vercel.

![vscode-portfolio banner](https://media-exp1.licdn.com/dms/image/C4D22AQEwVQWPSzgaBQ/feedshare-shrink_800/0/1666668596508?e=1669852800&v=beta&t=KS6LCMR0xZ2oIkeTOrrj6T8BGhFEUTpPPnEiL-CWXZY)

## Features Roadmap

- [ ] Themes and customizations
  - [x] GitHub Dark (default)
  - [ ] One Dark Pro
  - [x] Dracula
  - [x] Ayu
  - [x] Nord
- [ ] Interactive custom terminal

For other features and themes suggestions, please open an issue.

## Environment Variables

For fetching your articles from dev.to, create an `.env.local` file inside the project directory. Check the `.env.local.example` file for more information.

## Running Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

All VSCode related components can be found in the `components` folder. To change the content of the portfolio, check out the `pages` folder. To add or remove pages, modify `components/Sidebar.jsx` and `components/Tabsbar.jsx`.

## Next.js Resources

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
