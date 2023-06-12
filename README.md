<p>
  <img src="https://img.shields.io/badge/Nodejs-14.16.+-green.svg">
  <img src="https://img.shields.io/badge/Express-4.17.+-purple.svg">
</p>
<img src="public/img/essencefoods.png" />

# Efoods

Essence Foods is a full-stack, food and drink ordering system. The app is split into two front ends: one for the customer to order their drink(s) and/or food (Efoods Customer, or Efoods-C ), and one for the Efoodsshop to receive and manage orders as they come in (Efoods Admin, or Efoods-A).<br />

To see EssenceFoodsng in action, open a browser tab for <a href="https://essencefoodsng.com/">Essencefoodsng customer</a> and a tab for <a href="https://essencefoodsng.com/">Essencefoodsng-Admin</a>. All you have to do is place an order on Essencefoodsng app, and then watch Essencefoodsng Admin receive the order.
<br />
<br /><br />

## Features

User:

1. Server-side rendering
2. Login & register
3. Responsive design
4. Add to cart
5. filter items using search
6. Delete from cart
7. Checkout
8. Session based on localStorage and tokens
9. Get a list of orders.
10. Fetch a specific order.
11. Real-time order status using socket.io
12. Contact page

Admin:

1. Login
2. Responsive design
3. Orders lists based on status
4. Change order status
5. View order
6. Products list
7. View product

- Authentication system guarding the app core.
- Customers can browse the menu, Add/remove items to cart, track the order and can make payment online.
- admin can control orders and can change the order status.
- Data stored in a MongoDB database
- Friendly user interface with ejs

## Technical

• The front end of the app is built using SASS, tailwind CSS as a CSS extension language, and webpack as a module bundler.<br />
• The back end is built in Node.js with Express, and uses MongoDB with Mongoose as a database.<br />
• The app uses passport.js for authenticate the user.<br />

1.  Once the user opens the app, see loader and redirect to the home page.<br />
2.  As soon as a user click on their menu, and add items to cart.<br />
3.  As soon as a user clicks on cart, user can placed order with COD & Payment with card. After successful order placed then redirest to order status.<br />
4.  As finally, Essencefoodsng get realtime order update from admins, who can control order status using Socket.io.

• Submitted orders are sent to the database along with the user's username, to allow the display of previous and favorited orders and for Essencefoodsng-Admin to fetch the orders.<br />
• Essencefoodsng-Admin uses Ajax to fetch orders from the database every second & using socket.io to get real-time order updates. <br />
<br /><br />

## Snapshots

![homelightmode1](/gitpics/lightmodal.png)
![homedarkmode1](/gitpics/darkmodal.png)
![menudarkmode1](/gitpics/darkmenu.png)
![OrderSummarypage](/gitpics/lightcart.png)
![image](/gitpics/darkcart.png)

<br /><br />

## Setup

### Prerequisites

- Install Node.js >= 14
- Install MongoDB
- Install npm/yarn

Dependencies

```shell
    npm install
```

Seed the Database (for the very first run only)

```shell
    node server.js
```

Run the Server

```shell
    npm start
```

### Technologies

###### Back-end

NodeJS, Express, MongoDB, Mongoose.

###### Front-end

ejs, Tailwindcss, scss.
###### Dev-Dependencies
