const indexPath = './dist/index.html';
const serviceWorkerPath = './dist/service-worker.js';
Deno.writeTextFileSync(indexPath, Deno.readTextFileSync(indexPath).replace(/"\/deps/ig, '"./deps'))
Deno.writeTextFileSync(serviceWorkerPath, Deno.readTextFileSync(serviceWorkerPath).replace(/export default/ig, ''))
