SystemJS.config({
    production: true,
    defaultJSExtensions: true,
    paths: {
        "github:*": "./jspm_packages/github/*",
        "npm:*": "./jspm_packages/npm/*",
        "app/*": "./app/*",
        "com/*": "./com/*",
        "config/*": "./config/*",
        "core/*": "./core/*",
        "css/*": "./css/*",
        "lib/*": "./lib/*",
        "model/*": "./model/*",
        "pages/*": "./pages/*",
        "jquery": "./lib/jquery"
    }
});
