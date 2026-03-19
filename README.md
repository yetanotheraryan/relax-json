# relax-json

> A safer `JSON.parse()` that never crashes your app.

---

## ✨ Why?

`JSON.parse()` is brittle.

One invalid input → 💥 runtime crash.

`relax-json` gives you a **fault-tolerant parser** so your app keeps running, even with bad input.

---

## 📦 Installation

```bash
npm install relax-json
```

---

## 🚀 Usage

```ts
import { relaxjson } from "relax-json";

// valid JSON
relaxjson('{"name": "Aryan"}')
// → { name: "Aryan" }

// invalid JSON
relaxjson('invalid json')
// → null

// with fallback
relaxjson('invalid json', {})
// → {}
```

---

## 🧠 API

### `relaxjson(input, fallback?)`

| Param    | Type   | Description                     |
| -------- | ------ | ------------------------------- |
| input    | string | JSON string to parse            |
| fallback | any    | Value returned if parsing fails |

**Returns:**

* Parsed JSON if valid
* `fallback` or `null` if invalid

---

## ⚡ Features

* 🛡️ **Never throws** — safe by default
* ⚡ **Lightweight** — zero dependencies
* 🧩 **Drop-in replacement** for `JSON.parse`
* 🧠 **Graceful fallback handling**

---

## 🔍 Example Use Cases

* Parsing unreliable API responses
* Handling user-generated JSON input
* Logging / analytics pipelines
* Defensive backend systems

---

## 🆚 vs JSON.parse

| Feature          | JSON.parse | relax-json |
| ---------------- | ---------- | ---------- |
| Throws on error  | ❌ Yes      | ✅ No       |
| Fallback support | ❌ No       | ✅ Yes      |
| Safe by default  | ❌ No       | ✅ Yes      |

---

## 📁 Package Philosophy

> Small utilities. Zero crashes. Predictable behavior.

`relax-json` is built for developers who prefer **resilience over runtime failures**.

---

## 🛠️ Contributing

PRs are welcome. If you have ideas to improve performance or edge-case handling, feel free to open an issue.
Help with the CICD improvement will be appreciated.

---

## 📄 License

MIT © Aryan Tiwari

---

## 🌟 Support

If this helped you, consider giving it a ⭐ on GitHub — it helps others discover it.

---
