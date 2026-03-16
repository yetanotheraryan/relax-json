# safe-json

A tiny utility for **safe JSON parsing and stringifying** without crashing your application.

`JSON.parse()` throws when it encounters invalid JSON.  
`safe-json` ensures your program **never crashes due to malformed JSON**.

Perfect for APIs, logs, user input, and unreliable data sources.

## Install

```bash
npm install relax-json