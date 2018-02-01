// import rollup from 'rollup';
import nodeResolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify';


const plugins = [
    nodeResolve({
        jsnext: true,
        module: true,
        extensions: [ '.js' ]
    })
];


let dest = 'bundles/bundle.umd.js';

if (process.env.BUNDLE_MIN === 'true') {
    dest = 'bundles/bundle.umd.min.js';
    plugins.push(
        uglify()
    );
}

export default {
    input: 'esm/index.js',
    output: {
        name: 'angular-pipes-forked',
        format: 'umd',
        file: dest
    },
    external: [
        '@angular/core'
    ],
    plugins: plugins
}