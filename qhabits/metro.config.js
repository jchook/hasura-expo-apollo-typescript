const { getDefaultConfig } = require('@expo/metro-config')

const defaultConfig = getDefaultConfig(__dirname);

// Bug with Apollo + Expo + TypeScript
//
// While trying to resolve module `@apollo/client` from file
// `/home/jchook/projects/habits/qhabits/App.tsx`, the package
// `/home/jchook/projects/habits/qhabits/node_modules/@apollo/client/package.json`
// was successfully found. However, this package itself specifies a `main`
// module field that could not be resolved
// (`/home/jchook/projects/habits/qhabits/node_modules/@apollo/client/main.cjs`.
// Indeed, none of these files exist:
//
defaultConfig.resolver.sourceExts.push("cjs")

module.exports = defaultConfig;

