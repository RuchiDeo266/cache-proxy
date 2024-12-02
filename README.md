# CachingProxy

**CachingProxy** is a lightweight and efficient CLI tool for creating a caching proxy server. It intercepts HTTP requests, caches responses, and redirects users to specific URLs, enhancing performance and reducing redundant server requests.

The project also includes a client utility for testing the proxy's functionality.

## Features

- 🚀 **Simple CLI Commands**: Easy-to-use commands for setting up and testing the proxy.
- ⚡ **Caching Mechanism**: Reduces server load by caching frequent requests using `node-cache`.
- 🌐 **Dynamic URL Redirection**: Redirects users to specified URLs efficiently.
- 🔧 **Customizable Configuration**: Use `.env` for environment-specific configurations.
- 📦 **Built on Express.js**: Fast and robust server framework.

## Installation

### Prerequisites

- [Node.js](https://nodejs.org) (v16 or higher)
- npm (comes with Node.js)

### Steps

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/cachingproxy.git
   cd cachingproxy
   ```
2. Install dependencies:

   ```bash
   npm install
   ```

3. Link the CLI commands:
   ```bash
   npm link
   ```

## Commands

### CLI Commands

- **Start Server**:
  ```bash
  cache-proxy start  --port 4000 --origin "http://dummyjson.com/"
  ```
- **Run Client**:
 In another terminal, if you don't want to visit the port where the server is running (e.g., localhost:4000), run the following command:
  ```bash
  cd src
  node client.js --port 4000
  ```

## Dependencies

- [Express](https://expressjs.com/) - Web framework for Node.js.
- [Node-Cache](https://www.npmjs.com/package/node-cache) - Caching utility for Node.js.
- [Yargs](https://yargs.js.org/) - Command-line arguments parser.
- [Axios](https://axios-http.com/) - HTTP client for making requests.

## Author

👩‍💻 **Ruchi Deo**

"Challenge" : https://roadmap.sh/projects/caching-server
