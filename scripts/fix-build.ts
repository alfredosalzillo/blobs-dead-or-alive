const indexPath = './dist/index.html';
const serviceWorkerPath = './dist/service-worker.js';
const PUBLIC_URL = 'https://alfredosalzillo.me/blobs-dead-or-alive';

async function getNames(currentPath: string) {
  const names: string[] = [];

  for await (const dirEntry of Deno.readDir(currentPath)) {
    const entryPath = `${dirEntry.name}`;
    if (dirEntry.isFile) names.push(entryPath);

    if (dirEntry.isDirectory) {
      names.concat(await getNames(`${currentPath}/${entryPath}`));
    }
  }

  return names;
}

Deno.removeSync('./dist/.cache', {
  recursive: true,
})
const __WEB_MANIFEST = await getNames('dist')
  .then((files) => files.map((file) => `${PUBLIC_URL}/${file}`))

Deno.writeTextFileSync(indexPath, Deno.readTextFileSync(indexPath).replace(/"\/deps/ig, '"./deps'))
Deno.writeTextFileSync(serviceWorkerPath, Deno.readTextFileSync(serviceWorkerPath)
  .replace(/export default/ig, '')
  .replace('self.__WB_MANIFEST', JSON.stringify(__WEB_MANIFEST))
)
