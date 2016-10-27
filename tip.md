###安装ngc编译器（@angular/compiler-cli提供）
* yarn add @angular/compiler-cli @angular/platform-server
### 安装rollup依赖
* yarn add rollup rollup-plugin-node-resolve rollup-plugin-commonjs rollup-plugin-uglify
### ngc执行AOT编译命令
* node_modules/.bin/ngc -p tsconfig-aot.json
### rollup命令
* node_modules/.bin/rollup -c rollup-config.js