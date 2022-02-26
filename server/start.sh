#! /bin/sh
cd /server && npm install && ./node_modules/.bin/nodemon --experimental-modules --watch . --watch /server/schema.mjs /client /server/index.mjs
