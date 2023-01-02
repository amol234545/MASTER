const exe = require('@angablue/exe');

const build = exe({
    entry: './main.js',
    out: '/home/runner/work/MASTER/build/cli/connect.exe',
    target: 'latest-win-x64'
});

build.then(() => console.log('Build completed!'));
