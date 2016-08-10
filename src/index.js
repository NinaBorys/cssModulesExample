//npm start
//commad doesn't start the html-page becaue of the node vertion (6.3.1)
//[5.0-6.0 needed for webpack script to work]

// Exported static site renderer:
module.exports = function render(locals, callback) {
  callback(null, '<html>Hello!</html>');
};
