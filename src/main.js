import axios from "axios";
import express from "express";
import NodeCache from "node-cache";

export default class main {
  constructor(port, origin) {
    this.app = express();
    this.port = port;
    this.origin = origin;
    this.NodeCache = new NodeCache({ stdTTL: 1800, checkperiod: 120 });
  }
  async handleProxy(req, res) {
    const origin = this.origin.replace(/\/+$/, "");
    const originalUrl = req.originalUrl.replace(/^\/+/, "");
    const url = origin + originalUrl;
    const cache_data = this.NodeCache.get(url);

    if (cache_data) {
      console.log("HIT", url);
      res.header("X-Cache", "HIT");
      res.send(cache_data.data);
    } else {
      try {
        const data = await axios(url);
        this.NodeCache.set(origin, url);
        console.log("MISS", url);
        res.header("X-Cache", "MISS");
        res.send(data.data);
      } catch (err) {
        console.log(`Error: ${err.message}`);
      }
    }
  }
  deleteCache() {
    if (this.NodeCache) {
      console.log("Empty Cache");
    } else {
      console.log("Delete the Cache");
      this.NodeCache.flushAll();
    }
  }
  start() {
    this.app.get("*", this.handleProxy.bind(this));
    this.app.listen(this.port, () => {
      console.log(`Server is running : http://localhost:${this.port}`);
    });
  }
}
