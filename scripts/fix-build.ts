const file = './dist/index.html';
const data = Deno.readTextFileSync(file);
Deno.writeTextFileSync(file, data.replace(/"\/deps/ig, '"./deps'))
