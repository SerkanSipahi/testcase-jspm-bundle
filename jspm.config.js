SystemJS.config({
  transpiler: false,
  packages: {
    "src": {
      "main": "my-app.js",
      "meta": {
        "*.js": {
          "defaultExtension": "js"
        }
      }
    },
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "css": "github:systemjs/plugin-css@0.1.21",
    "document-register-element": "npm:document-register-element@0.3.0",
    "jquery": "npm:jquery@2.2.2",
    "underscore": "npm:underscore@1.8.3"
  },
  packages: {}
});
