#! /bin/sh
cd /server && npm install && ./node_modules/.bin/nodemon --experimental-modules --watch . --watch /server/schema.mjs /server/index.mjs
