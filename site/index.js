import("./node_modules/rust-wasm/rust_wasm.js").then((js) => {
  js.greet("WebAssembly with npm");
});
