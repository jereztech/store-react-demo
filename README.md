# Store React Demo

This repository provides a simple [live demo](https://jereztech.github.io/store-react-demo) showcasing the usage of [@jereztech/i18n-react](https://github.com/jereztech/i18n-react) and [@jereztech/react-elements](https://github.com/jereztech/react-elements) in a React application.

## Features

- Implements internationalization (i18n) using `@jereztech/i18n-react`
- Utilizes reusable UI components from `@jereztech/react-elements`
- Demonstrates a basic store interface with localized content

## Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18+ recommended)
- [pnpm](https://pnpm.io/) or [npm](https://www.npmjs.com/)

## Installation

Clone the repository and install dependencies:

```sh
git clone https://github.com/jereztech/store-react-demo.git
cd store-react-demo
pnpm install  # or npm install
```

## Running the Project

To start the development server, run:

```sh
pnpm dev  # or npm run dev
```

This will start the application at `http://localhost:3000/`.

## Using @jereztech/i18n-react

This project integrates `@jereztech/i18n-react` for managing translations.

Example usage:

```tsx
import { useI18n } from "@jereztech/i18n-react";

export default function Footer() {
    const { t } = useI18n('Navigation');
    return (
        <footer className="container">
            <p className="float-end">
                <a href="#">{t('back-to-top')}</a>
            </p>
        </footer>
    )
}
```

## License

This project is licensed under the **GNU General Public License v3.0**

---

Made with ❤️ by [Jerez Tech](https://jereztech.com)

