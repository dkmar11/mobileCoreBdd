
# Mobile Testing Project with Appium

## Overview
APPIUM PROYECT WITH CUCUMBER
This project is designed for mobile testing using Appium with Cucumber and WebDriverIO. It provides a structure for writing and executing automated mobile tests.



## Dependencies

- **`@cucumber/cucumber`**: Cucumber for JavaScript (version 10.4.0)
- **`webdriverio`**: WebDriverIO for interaction with mobile browsers (version 8.36.0)
- **`@cucumber/pretty-formatter`**: Formatter for Cucumber reports (version 1.0.1)
- **`cucumber`**: Cucumber for JavaScript (version 6.0.7)
- **`expect`**: Assertion library (version 29.7.0)
- **`pino`**: Logger library (version 8.20.0)
- **`pino-pretty`**: Pretty printer for Pino logs (version 11.0.0)

## Setup

1. **Clone the repository**:

    ```bash
    git clone https://github.com/yourusername/your-repo.git
    cd your-repo
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

## Configuration

1. **Appium Configuration**:
   - Ensure you have Appium installed and configured. You can install Appium using npm:

     ```bash
     npm install -g appium
     ```

   - Configure your Appium server settings (e.g., in `appium.conf.js`).

2. **WebDriverIO Configuration**:
   - Create or update the WebDriverIO configuration file (`wdio.conf.js`) to include desired capabilities for your mobile device.

