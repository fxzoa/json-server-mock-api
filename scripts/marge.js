const fs = require('fs');
const path = require('path');

const root = path.resolve('./', 'api');

console.log(root);

const update = () => {
  const api = fs.readdirSync(root).reduce((api, file) => {
    if (api === undefined) {
        api= {}
    };

    if (path.extname(file) == '.json') {
        const endpoint = path.basename(file, path.extname(file));
        console.log(endpoint);
        console.log(root + '/' + file);

        if (api[endpoint] === undefined) {
            api[endpoint] = {}
        };
        api[endpoint] = JSON.parse(fs.readFileSync(root + '/' + file, 'utf-8'));
        return api;
    }
  }, {});

  fs.writeFile(root + '/../mock.json', JSON.stringify(api), function(err) {
    if (err) throw err;
    console.log('mock file updated.');
  });
}

// 初回作成
update();

// jsonファイルを監視し, 監視ファイルに更新があるたびmerged.jsonを更新
fs.watch(root, (e, filename) => update());