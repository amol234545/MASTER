const exe = require('@angablue/exe');

const build = exe({
    entry: './main.js',
    out: '/home/runner/work/MASTER/build/connect.exe',
    target: 'latest-win-x64',
    icon: './icon.ico'
});

build.then(() => console.log('Build completed!'));
