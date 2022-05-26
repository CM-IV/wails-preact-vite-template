# README

## About

This is a modified template of Wails using Preact-TS with Vitejs bundler.  Bulma CSS is used for styling on the frontend, along with a components and layout directory inside the src folder.  Preact and Vitejs are my go-to tools in web development, so I hope you enjoy this template!

## Live Development

To create a project using this template run: 
```
wails init -n [Your Appname] -t https://github.com/CM-IV/wails-preact-vite-template
```

To run in live development mode, run `wails dev` in the project directory. In another terminal, go into the `frontend`
directory and run `npm run dev`. The frontend dev server will run on http://localhost:34115. Connect to this in your
browser and connect to your application.

## Building

To build a redistributable, production mode package, use `wails build`.
