Way we opened terminal:

1. Navigate to Finder/ File Explorer
   - Mac: Right click class 15 folder --> open in terminal at folder
2. `pwd`
3. `npm init -y`
4. `npm install express nunjucks`

Ways in which we ran our `server.js` file

1. `node server.js` --> this requires a restart every time we make changes to the file
2. `node --watch server.js` --> this watches our `server.js` file for changes and` will automatically restart the server
3. `node --watch --watch-path=views server.js` --> this watches both our server.js file and all of our
