## Rust + WebAssembly開発環境のテンプレ

## WebAssembly環境構築の参考
https://developer.mozilla.org/ja/docs/WebAssembly/Rust_to_Wasm

## wasmのbuild
```
// npmでserveするコマンド
// dockerコンテナにattach
docker-compose up
docker exec -it wasm_wasm_1 bash
// wasmのbuild。npmで扱えるようoptionをつける
wasm-pack build --target bundler
// npm linkでbuildしたpackageを扱えるようにする
cd /app/pkg
npm link
// npm側でもnpm linkを実行
cd ../site
npm link rust-wasm
// サーバ起動
npm install
npm run serve
```
