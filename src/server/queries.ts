import "server-only";

export async function getResponse(message: string) {
  await new Promise((r) => setTimeout(r, 2000));
  return "You said: " + message;
}
