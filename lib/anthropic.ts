import Anthropic from "@anthropic-ai/sdk";

let instance: Anthropic | undefined;

function getClient() {
    if (!instance) {
        if (!process.env.ANTHROPIC_API_KEY) {
            throw new Error("ANTHROPIC_API_KEY no está definida en el .env");
        }
        instance = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
    }
    return instance;
}

export const anthropic = new Proxy({} as Anthropic, {
    get(_target, prop, receiver) {
        return Reflect.get(getClient(), prop, receiver);
    },
});

export const CHAT_MODEL = process.env.ANTHROPIC_MODEL || "claude-opus-5";
