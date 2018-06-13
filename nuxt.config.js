require('dotenv/config');
const SpritesmithPlugin = require('webpack-spritesmith');
const path = require('path');

const envPath = path.resolve(__dirname, 'config', '.env');
require('dotenv').config({ path: envPath });

const makeSprite = () => new SpritesmithPlugin({
  src: {
    cwd: __dirname + '/assets/sprites',
    glob: '*.png'
  },
  target: {
    image: __dirname + '/static/img/sprite.png',
    css: __dirname + '/assets/scss/sprite.scss'
  },
  apiOptions: {
    cssImageRef: '/static/img/sprite.png'
  }
});

module.exports = {
  // rootDir and watcher need to docker work
  rootDir: path.resolve(__dirname),
  watchers: {
    webpack: {
      poll: true
    }
  },
  build: {
    plugins: [
      makeSprite('instruments')
    ]
  },
  modules: [
    // ['@nuxtjs/dotenv', { path: path.resolve('config') }],
    ['@nuxtjs/dotenv', { path: envPath }],
    "@nuxtjs/axios",
    "~/modules/typescript.js",
  ]
  // axios: {}
  //
}