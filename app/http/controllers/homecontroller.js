require("dotenv").config();

const Menu = require("../../models/menu");
const Comment = require("../../models/comment");
const nodemailer = require("nodemailer");
let name;
let content;
const transporter = nodemailer.createTransport({
  service: "mail.privateemail.com",
  port: 587,
  secure: false,
  auth: {
    user: "contact@essencefoodsng.com",
    pass: "Marinestar12@",
  },
});
const homeController = () => {
  // factory functions
  return {
    index: async (req, res) => {
      const foods = await Menu.find();
      return res.render("home", { foods: foods });
    },
    menu: async (req, res) => {
      const foods = await Menu.find();
      const comments = await Comment.find();

      return res.render("menu", { foods: foods, comments: comments });
    },
    contact_us: async (req, res) => {
      const { name, email, message } = req.body;
      var mailOptions = {
        from: "contact@essencefoodsng.com",
        to: email,
        subject: "Thanks for contacting us!",
        html: `<p>Hello ${name}</p><p>Thanks for contacting us! This auto-reply is just to let you know that we have received your email and will get back to you with a (human) response as soon as possible.</p>
        <p>Cheers!</p>`,
      };
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });
      return res.redirect("/");
    },
    commentPost: async (req, res) => {
      console.log(req.body)
      name = req.body.name;
      content = req.body.content;
      console.log(name, content)
      const comment = new Comment({
        name,
        content
      })
      comment.save()
        .then((comment) => {
          console.log(comment)
        return res.redirect("/menu#commentbox");
        })
        .catch((err) => {
        req.flash("error", "Something went wrong");
        console.log(err)
        return res.redirect("/menu#commentbox");
        });
      
  //     Comment.create(req.body, (error, comment) => {
  //       if (error) {
  //           //  const orderErrors = Object.keys(error.errors).map(key => error.errors[key].message)
  //            req.flash('data', req.body)
  //            req.flash('CommentErrors', 'CommentErrors')
  //            console.log(error)
  //            return res.redirect('/menu#commentbox');
  //       }
  //       console.log(req.body)
  //       res.redirect('/menu#commentbox');
  //  })
    }
  };
};

module.exports = homeController;
