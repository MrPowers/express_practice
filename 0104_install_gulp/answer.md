npm install gulp --save

This installs gulp locally.  It will add a dependencies object to the package.json file.  This will also add `node_modules` directory that contains gulp and all of its dependencies.  The `node_modules` directory should not be checked into source control.  This directory can be rebuilt at any time with the package.json file.
