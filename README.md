# USC Philosophy Club Website

This repository hosts the source code of the website located at [https://usc.philclub.org](https://usc.philclub.org).

## Contributing

We follow the [Conventional Commits](https://www.conventionalcommits.org/) convention for commit messages. Please follow these practices:

- Prefix your commits with `feat:` for new content and significant revisions
- Prefix your commits with `fix:` for minor revisions and edits

By contributing, you agree to the [License policy](#license) below.

## Development

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```console
yarn install
```

### Local Development

```console
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## License

Copyright (C) 2021, Theodore Chu and Individual Contributors. The source code of the website is licensed under the [MIT License](./LICENSE). The content in the `.md` files in the `docs` folder is licensed under [CC-BY-SA-4.0](https://creativecommons.org/licenses/by-sa/4.0/) unless otherwise noted. The content in the `.md` files in the `blog` is copyrighted with All Rights Reserved by the author of the file as indicated at the top of the file (the `yaml` metadata).
