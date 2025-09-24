# Installation

## Steps to Install the Extension

1. Install dependencies:

    ```bash
    npm install
    ```

2. Compile the extension:

    ```bash
    npm run compile
    ```

3. Install VSCE globally:

    ```bash
    npm install -g vsce
    ```

4. Package the extension:

    ```bash
    vsce package
    ```

5. Install the packaged extension in VS Code:

    ```bash
    code --install-extension vscode-pokemon-custom-3.1.1.vsix
    ```

6. To uninstall the extension:
    ```bash
    code --uninstall-extension vscode-pokemon-custom-3.1.1.vsix
    ```
