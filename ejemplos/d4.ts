const encoder = new TextEncoder();
const data = encoder.encode('Hello Salomone!');
await Deno.writeFile('test.txt',data)