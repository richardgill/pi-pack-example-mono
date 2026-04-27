import type { ExtensionAPI } from "@mariozechner/pi-coding-agent";

export type Extension1Options = {
  commandName?: string;
};

export const extension = (options: Extension1Options = {}) => {
  const commandName = options.commandName ?? "extension-1";

  return (pi: ExtensionAPI): void => {
    pi.registerCommand(commandName, {
      description: "Run the extension-1 extension",
      handler: async (_args, ctx) => {
        ctx.ui.notify("extension-1 ran", "info");
      },
    });
  };
};
