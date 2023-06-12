const Order = require("../../../models/order");

function statusController() {
  return {
    update(req, res) {
      Order.updateOne(
        { _id: req.body.orderId },
        { status: req.body.status },
        // { paymentStatus: req.body.paymentStatus },
        (err, data) => {
          if (err) {
            return res.redirect("/admin/orders");
          }
          // Emit event
          const eventEmitter = req.app.get("eventEmitter");
          eventEmitter.emit("orderUpdated", {
            id: req.body.orderId,
            status: req.body.status,
            // paymentStatus: req.body.paymentStatus,
          });
          return res.redirect("/admin/orders");
        }
      );
    },
  };
}

module.exports = statusController;
