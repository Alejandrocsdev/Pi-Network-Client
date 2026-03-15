# Pi Network Client

This repository is a **React + Vite frontend integration test for the Pi
Network SDK**.\
The goal of this project is to experiment with **Pi Browser environment
detection** and verify how the Pi SDK behaves in different environments.

Currently the project focuses on detecting whether the application is
running inside:

-   **Pi Browser (production)**
-   **Pi Sandbox**
-   **Regular browser (Chrome, etc.)**

The detection result is stored in **Redux state** and displayed on the
UI.

---

# Repository Description

**Frontend integration test with Pi Network SDK.\
Detects whether the application is running inside Pi Browser or a normal
browser environment.**

---

# Tech Stack

-   React
-   Vite
-   Redux Toolkit
-   React Router
-   Pi Network JavaScript SDK

---

# Pi Browser Detection Logic

The project listens for `window.postMessage` events sent by the Pi SDK
iframe.

Depending on the origin of the message, the environment is determined.

    https://app-cdn.minepi.com   → Pi Browser (production)
    https://sandbox.minepi.com   → Pi Sandbox

# Development

Install dependencies:

    npm install

Start development server:

    npm run dev

The Vite configuration loads environment variables and prints the
sandbox URL:

    Sandbox URL:
    https://sandbox.minepi.com/app/<SANDBOX_SLUG>

---

# Purpose of This Repository

This project is intended for:

-   testing **Pi SDK integration**
-   understanding **Pi Browser messaging behavior**
-   verifying **environment detection strategies**
-   building a reliable **Pi app frontend template**

---

# Future Improvements

Possible improvements include:

-   automatic Pi Browser detection fallback
-   authentication tests (`Pi.authenticate`)
-   payment API testing
-   full Pi app template with backend integration
-   improved environment validation

---

# License

MIT License
