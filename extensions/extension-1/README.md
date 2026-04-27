# extension-1

<Describe what this pi extension does.>

Part of [`pi-pack-example-mono`](../../README.md).

## Install with pi-pack

Install `pi-pack` globally:

```bash
npm install -g pi-pack
```

```bash
pi-pack install "git:github.com/richardgill/pi-pack-example-mono" --extension "extension-1"
```


## Configure

```ts
import { extension } from "extension-1";

export default extension({
  commandName: "extension-1",
});
```
