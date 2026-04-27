# extension-2

<Describe what this pi extension does.>

Part of [`pi-pack-example-mono`](../../README.md).

## Install with pi-pack

Install `pi-pack` globally:

```bash
npm install -g pi-pack
```

<!-- Delete install options that do not apply before publishing. -->

```bash
pi-pack install "npm:extension-2"
pi-pack install "git:github.com/<user>/pi-pack-example-mono" --extension "extension-2"
pi-pack install "~/code/pi-pack-example-mono" --extension "extension-2"
```


## Configure

```ts
import { extension } from "extension-2";

export default extension({
  commandName: "extension-2",
});
```
