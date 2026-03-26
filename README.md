<div align="center">

# relax-json

**A safer `JSON.parse()` that never crashes your app.**

<div>

![NPM Version](https://img.shields.io/npm/v/relax-json?style=flat-square&color=CB3837&label=npm)
![GitHub package.json version](https://img.shields.io/github/package-json/v/yetanotheraryan/relax-json?style=flat-square&color=0f172a&label=version)
![GitHub last commit](https://img.shields.io/github/last-commit/yetanotheraryan/relax-json?style=flat-square&color=6366f1)
![GitHub contributors](https://img.shields.io/github/contributors/yetanotheraryan/relax-json?style=flat-square&color=0ea5e9)
![GitHub forks](https://img.shields.io/github/forks/yetanotheraryan/relax-json?style=flat-square&color=8b5cf6)
![GitHub Repo stars](https://img.shields.io/github/stars/yetanotheraryan/relax-json?style=flat-square&color=f59e0b)
![GitHub License](https://img.shields.io/github/license/yetanotheraryan/relax-json?style=flat-square&color=22c55e)

</div>

</div>


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

## 🤝 Why not just try/catch?

You *can* write:

```ts
try {
  JSON.parse(str);
} catch {
  return null;
}
```
  
But across a real codebase, you get:

- inconsistent fallbacks  
- duplicated logic  
- no centralized error handling  

relax-json gives you:

- consistent behavior  
- cleaner code  
- extensibility  

---


## 🔧 `repair()` — Fix Dirty JSON Before Parsing

`repair` helps you clean up malformed JSON strings by applying a series of safe transformations.

It is especially useful when dealing with:

* Logs
* LLM outputs
* User-generated input
* APIs returning slightly invalid JSON

---

### ✨ What it fixes

* Removes comments (`//` and `/* */`)
* Converts single quotes → double quotes
* Adds quotes to unquoted keys
* Removes trailing commas
* Fixes simple missing commas

---

### 🚀 Usage

```ts
import { json } from "relax-json";

const dirty = `
{
  name: 'Aryan',
  age: 24,
  skills: ['ts', 'node',],
}
`;

const fixed = json.repair(dirty); // repair return a string with fixed json.

console.log(fixed);
/*
`{
  "name": "Aryan",
  "age": 24,
  "skills": ["ts", "node"]
}`
*/
```

---

### ⚠️ Notes

* `repair` does **best-effort fixes**, not guaranteed recovery for severely broken JSON
* Always validate or safely parse after repairing:

```ts
const result = json.parse(json.repair(dirty));
```

---

### 💡 Pro Tip

Combine `repair` + `parse` for maximum safety:

```ts
const data = json.parse(json.repair(dirty), { fallback: {} });
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
