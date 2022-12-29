const exe = require('@angablue/exe');

const build = exe({
    entry: './index.js',
    out: './build/My Cool App.exe',
    target: 'latest-win-x64'
});

build.then(() => console.log('Build completed!'));
