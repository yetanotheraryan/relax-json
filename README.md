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
import { json } from "relax-json";

// valid JSON
json.parse('{"name": "Aryan"}')
// → { name: "Aryan" }

// invalid JSON
json.parse('invalid json')
// → null

// with fallback + error callback
json.parse('invalid json', {
  fallback: {},
  onError: (err) => console.log(err),
});
// → {}
```

---

## 🧠 API

### `json.parse(input, { fallback?, onError? }?)`

| Param    | Type   | Description                     |
| -------- | ------ | ------------------------------- |
| input    | string | JSON string to parse            |
| fallback | any    | Value returned if parsing fails |
| onError  | (err) => void | Called with the parse error before returning fallback |

**Returns:**

* Parsed JSON if valid
* `fallback` or `null` if invalid

---

### Backward compatible: `relaxjson(input, fallback?)`

Legacy wrapper kept for older code. Import `relaxjson` only if you need the old function style:

```ts
import { relaxjson } from "relax-json";

relaxjson('invalid json', {});
// → {}
```


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
