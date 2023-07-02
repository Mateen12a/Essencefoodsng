const Comment = require('../../../models/comment');

module.exports = (req, res) => {
     Comment.create(req.body, (error, comment) => {
          if (error) {
               const orderErrors = Object.keys(error.errors).map(key => error.errors[key].message)
               req.flash('data', req.body)
               req.flash('CommentErrors', CommentErrors)
               return res.redirect('/menu#commentbox');
          }
          console.log(req.body)
          res.redirect('/menu#commentbox');
     })
}
