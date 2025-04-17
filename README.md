# Greeter Component

A standalone Vue.js component that can be embedded via a `<script>` tag in third-party applications.

## 💡 Features

- Renders a styled button.
- Logs a custom message on click.
- Embeddable in any HTML using `Greeter.init()`.

## 🚀 Usage

```html
<script src="compiled-greeter-component.js"></script>
<div id="my-component"></div>
<script>
  Greeter.init('#my-component', { message: 'Hello from the host app!' });
</script>
```

## 🛠 How to Run

1. **Install Dependencies**:
   Navigate to the `greeter-component` directory and install the required dependencies:
   ```bash
   cd greeter-component
   npm install
   ```

2. **Run the Development Server**:
   Start the Vite development server to preview the component:
   ```bash
   npm run dev
   ```

3. **Build the Component**:
   To generate the standalone `compiled-greeter-component.js` file, run:
   ```bash
   npm run build
   ```

4. **Serve the `index.html` File**:
   To test the `index.html` file in the root directory, you can use `http-server`:
   - Install `http-server` globally if you don’t already have it:
     ```bash
     npm install -g http-server
     ```
   - Navigate to the root directory and serve the `index.html` file:
     ```bash
     cd ..
     http-server
     ```
   - Open the provided URL (e.g., `http://127.0.0.1:8080`) in your browser to view the demo.

## 🧪 How to Test

1. **Run Unit Tests**:
   The project uses `vitest` for testing. To run the tests, execute:
   ```bash
   npm run test
   ```

2. **Run Tests in Watch Mode**:
   For continuous testing during development:
   ```bash
   npm run test:watch
   ```

3. **Test Coverage**:
   To generate a test coverage report:
   ```bash
   npm run test:coverage
   ```

## 📂 Project Structure

- `src/`: Contains the Vue component and styles.
- `dist/`: Contains the built files after running `npm run build`.
- `index.html`: A demo file to test the component in a standalone environment.

written by [Oktaviardi.com](https://oktaviardi.com/) contact me at [me@oktaviarid.com](mailto:me@oktaviarid.com)