(function (global) {
    System.config({
        transpiler: 'ts',
        typescriptOptions: {
            tsconfig: true
        },
        meta: {
            'typescript': {
              "exports": "ts"
            },
            '*.css': { loader: 'css' }
        },
        paths: {
            // paths serve as alias
            'npm:': 'node_modules/'
        },
        // map tells the System loader where to look for things
        map: {
            'core-js': 'npm:core-js/client/shim.min.js',
            'zone': 'npm:zone.js/dist/zone.min.js',
            'rxjs': 'npm:rxjs/bundles/rxjs.umd.min.js',
            '@angular/core': 'npm:@angular/core/bundles/core.umd.min.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.min.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.min.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.min.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.min.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.min.js',
            '@angular/common/http': 'npm:@angular/common/bundles/common-http.umd.min.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.min.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.min.js',
            'jszip': 'npm:jszip/dist/jszip.min.js',
            'typescript': 'npm:typescript/lib/typescript.js',
            'ts': 'npm:plugin-typescript/lib/plugin.js',
            'css': 'npm:systemjs-plugin-css/css.js',
            'plugin-babel': 'npm:systemjs-plugin-babel/plugin-babel.js',
            'systemjs-babel-build':'npm:systemjs-plugin-babel/systemjs-babel-browser.js',

            '@grapecity/spread-sheets': 'npm:@grapecity/spread-sheets/index.js',
            '@grapecity/spread-sheets-angular': 'npm:@grapecity/spread-sheets-angular/bundles/grapecity-spread-sheets-angular.umd.js',
            '@grapecity/spread-excelio': 'npm:@grapecity/spread-excelio/index.js',
            '@grapecity/spread-sheets-charts': 'npm:@grapecity/spread-sheets-charts/index.js',
            '@grapecity/jsob-test-dependency-package/react-components': 'npm:@grapecity/jsob-test-dependency-package/react-components/index.js'
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            src: {
                defaultExtension: 'ts'
            },
            rxjs: {
                defaultExtension: 'js'
            },
            "node_modules": {
                defaultExtension: 'js'
            },
        }
    });
})(this);
