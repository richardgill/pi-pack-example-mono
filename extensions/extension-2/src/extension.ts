import type { ExtensionAPI } from "@mariozechner/pi-coding-agent";

export type Extension2Options = {
  commandName?: string;
};

export const extension = (options: Extension2Options = {}) => {
  const commandName = options.commandName ?? "extension-2";

  return (pi: ExtensionAPI): void => {
    pi.registerCommand(commandName, {
      description: "Run the extension-2 extension",
      handler: async (_args, ctx) => {
        ctx.ui.notify("extension-2 ran", "info");
      },
    });
  };
};
