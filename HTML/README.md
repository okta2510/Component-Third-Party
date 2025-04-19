# Index.html Demo

This is a standalone HTML file that demonstrates the usage of the `Greeter` component.

## 🚀 How to Run

1. **Install `http-server`**:
   To serve the `index.html` file locally, you need to install `http-server`. Run the following command:
   ```bash
   npm install -g http-server
   ```

2. **Navigate to the Project Directory**:
   Open your terminal and navigate to the root directory of the project:
   ```bash
   cd /Users/oktaviardi/Okta/interview-Dashtomer/project3
   ```

3. **Serve the `index.html` File**:
   Start the `http-server` to serve the `index.html` file:
   ```bash
   http-server
   ```

4. **Open in Browser**:
   Once the server is running, open your browser and navigate to:
   ```
   http://127.0.0.1:8080
   ```

   You should see the demo of the `Greeter` component.

## 🛠 Troubleshooting

- If you encounter issues, ensure that the `compiled-greeter-component.js` file exists in the `greeter-component/dist/` directory. If it’s missing, rebuild the component:
  ```bash
  cd greeter-component
  npm run build
  ```

- Ensure that `http-server` is installed globally. If not, try reinstalling it:
  ```bash
  npm install -g http-server
  ```

Contact me@oktaviardi.com if you need help