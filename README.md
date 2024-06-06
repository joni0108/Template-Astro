# Astro Starter Kit

This is the starter kit for a website using Astro framework.

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── __tests__/
├── public/
├── src/
│   └── components/
│       └── ui/
│   └── constants/
│       └── constants.astro
│   └── contexts/
│   └── layouts/
│       └── Main.astro
│   └── lib/
│   └── pages/
│       └── index.astro
|       └── 404.astro
│   └── services/
└── .env
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 👀 What Features does it Include?

- 🏎️ **[Astro Framework](https://astro.build/)** - One of the fastest and easier solutions for simple web pages. Includes **(Pages Routing)**
- 💅 **[Tailwind CSS](https://tailwindcss.com/)** - A utility-first CSS framework for quick UI development using class based styling.
- ✨ **[Prettier](https://prettier.io/)** - For clean and consistent codebase styling habits.
- 🛠️ **[Strict TypeScript](https://www.typescriptlang.org/)** - Types to JavaScript to see errors at dev time, not runtime.
- 🚀 **[GitHub Actions](https://github.com/features/actions)** - Pre-configured Github action to check code styling, run tests suits and build the project before too late.
- 🧪 **[Vitest](https://vitest.dev/)** - Professional testing and benchmarking library
- 📦 **[React-Icons](https://react-icons.github.io/react-icons/)** - Thousands of icons react components ready to be used in your code.
- 🎨 **Custom Theme** - You can choose between light and dark mode, import the `ToggleTheme` component to do it. To setup the colors, go to the `tailwind.config.mjs` file.
- 🖰 **[Preline UI](https://preline.co/index.html)** - A lightweight but powerful UI components library
- 🗃️ **[SQL Database](https://turso.tech/)** - Ready to use configuration to Turso DB, one of the most used hosted SQL Database.

## 🧞 Scripts

All commands are run from the root of the project, from a terminal:

- `dev`: Starts the development server
- `build`: Builds the app for production
- `preview`: Starts the production server
- `test`: Runs all the test suits
- `test:watch`: Runs all the test suits but watching for any file update afterwards
- `test:bench`: Runs all the benchmarks watching for any file update afterwards.
- `prettier:check`: Checks all the files for code styling rules broken
- `prettier:fix`: Fix all the code styling rules broken

## 🥇 Contributions

If you want to contribute to this template, feel free to do it!

Also feel free to use this template the way you want, don't need any attribution.
Check my repositories for **more templates** like this for different kind of projects.
