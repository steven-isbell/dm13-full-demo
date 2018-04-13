require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const massive = require("massive");
const passport = require("passport");
const path = require("path");

const { strat, logout, getUser } = require(`${__dirname}/controllers/authCtrl`);
const {
  getProducts,
  getCart,
  addToCart,
  removeFromCart
} = require(`${__dirname}/controllers/productCtrl`);

const port = process.env.PORT || 3001;

const app = express();

massive(process.env.CONNECTION_STRING)
  .then(db => app.set("db", db))
  .catch(err => console.log(err));

app.use(json());
app.use(cors());

// FOR PRODUCTION

// app.use(express.static(`${__dirname}/../build/`));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 100000
    }
  })
);

app.use(passport.initialize());
app.use(passport.session());
passport.use(strat);

passport.serializeUser((user, done) => {
  app
    .get("db")
    .getUserByAuthid(user.id)
    .then(response => {
      if (!response[0]) {
        app
          .get("db")
          .addUserByAuthid([user.displayName, user.id])
          .then(res => {
            return done(null, res[0]);
          })
          .catch(err => console.log(err));
      } else {
        return done(null, response[0]);
      }
    })
    .catch(err => console.log(err));
});
passport.deserializeUser((user, done) => {
  return done(null, user);
});

// AUTH ENDPOINTS

app.get(
  "/auth",
  passport.authenticate("auth0", {
    successRedirect: "/#/",
    failureRedirect: "/#/login"
  })
);
app.get("/logout", logout);
app.get("/api/me", getUser);

// PRODCUTS ENDPOINTS
app.get("/api/product", getProducts);
app.get("/api/cart", getCart);
app.post("/api/cart/:id", addToCart);
app.delete("/api/cart/:id", removeFromCart);

// FOR PRODUCTION

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../build/index.html"));
// });

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
