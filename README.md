# sipgate Integration Bridge Boilerplate Repository

Use this repository to bootstrap a new sipgate Integration Bridge.

## Step by step guide

1. Clone this repository (`git clone git@github.com:sipgate/integration-bridge-boilerplate.git integration-bridge-mycrm`)
2. Run `rm -rf .git && git init` to initialize your new git repository.
3. Run `npm i` to install all dependencies.
4. Start the bridge with `npm start`.
5. Edit the `index.ts` file and implement the method stubs.
6. Test your implementation (e.g. `curl -H "X-Provider-Key: abcdef123456" -H "X-Provider-URL: https://www.example.com" http://localhost:8080/contacts`).
7. Create a new Git repository (e.g. `sipgate-integration-bridge-mycrm`) and push your bridge.

## Coding style and linting

[Prettier](https://prettier.io/) and [ESLint](https://eslint.org/) are included by default. Feel free to remove these tools (or certain rules) if you don't like them.

## License

[Apache 2.0](LICENSE)
