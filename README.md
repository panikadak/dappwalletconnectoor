
# DAppWalletConnectoor

![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

`DAppWalletConnectoor` is an `npx` starter template that simplifies the setup of a WalletConnect-integrated dApp. With just one command, you can initiate your project and seamlessly integrate with WalletConnect v2 and Web3Modal 📲. This project is a fork of the original repository, aimed at not only maintaining its robust functionality but also significantly enhancing the user experience (UX) to create a more intuitive and engaging interaction flow for developers.

## Emphasis on UX Improvements

In this iteration, I've put a laser focus on refining the user experience, driven by the belief that technology should not only be powerful but also accessible and delightful to use. We've reimagined the setup process, streamlined configurations, and introduced interactive prompts that guide you smoothly through the project initialization phase. Our enhancements are designed to lower the barrier to entry for developers new to blockchain technology while providing quality-of-life improvements for seasoned veterans. The result is a more enjoyable and less friction-filled journey from start to finish.

## Project Aim

The primary goal of this fork is to demonstrate the profound impact thoughtful UX improvements can have on software tools. By reevaluating and enhancing the interaction design, we aim to make blockchain technology more approachable and the development process more efficient and enjoyable.

## Development Purpose

This project serves as a living laboratory for testing out new ideas, refining coding skills, and pushing the boundaries of what's possible with current web technologies. It's a testament to the continuous journey of learning and improvement in the field of software development.

## Features

✨ Seamless integration with WalletConnect v2 and Web3Modal with [EIP-6963](https://eips.ethereum.org/EIPS/eip-6963) support.

📦 Offers three template options: Next.js, React, and Vite for flexibility and convenience.

🧱 Supports multiple library choices including Wagmi and Ethers.js to suit your development needs.

🔧 Compatible with various package managers: Yarn, npm, and pnpm, providing flexibility in your workflow.

## Prerequisites

Before using `DAppWalletConnectoor`, ensure you have installed:

- Node.js (version 12 or higher)
- Git

## Usage

To create a new WalletConnect integrated dApp using DAppWalletConnectoor, execute the following command:

```bash
npx dappwalletconnectoor [options]
```

### Options

- `-V, --version`: Display the version number of `DAppWalletConnectoor`.
- `-i, --install`: Automatically install project dependencies after project creation.
- `-id, --project-id <projectId>`: Input your project ID from [https://cloud.walletconnect.com](https://cloud.walletconnect.com).
- `-t, --template <template>`: Choose a template for your WalletConnect dApp. Available options: "nextjs", "react", "vite".
- `-p, --package-manager <packageManager>`: Select a package manager for your dApp. Choices include: "yarn", "npm", "pnpm".
- `-l, --library <library>`: Pick a library for WalletConnect integration. Choices: "wagmi", "ethers".
- `-y, --use-default`: Opt for default options for all prompts.
- `-h, --help`: Show help information for the command.

## Running Locally

To run DAppWalletConnectoor locally, follow these steps:

```bash
git clone https://github.com/panikadak/dappwalletconnectoor.git
cd dappwalletconnectoor
yarn
```

Then, use the following command to start `DAppWalletConnectoor`:

```bash
yarn dev
```

## Serious Testing Required

While we've endeavored to enhance the UX, it's crucial to conduct thorough testing before considering this code production-ready. We encourage rigorous testing in various scenarios to ensure the application's reliability and stability.

## License

DAppWalletConnectoor is licensed under the [MIT License](LICENSE).

---

**Note**: This README provides a basic introduction to `DAppWalletConnectoor`, and forked for training purposes. Do not use it in production. For comprehensive details, usage examples, and troubleshooting, please refer to the documentation and source code hosted on the [GitHub repository](https://github.com/panikadak/dappwalletconnectoor).
