const router = requiere("express").Router();
const stripe = require("stripe")(process.env.STRIPE_KEY);

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (Err, Res) => {
      if (Err) {
        res.status(500).json(Err);
      } else {
        res.status(200).json(Res);
      }
    }
  );
});

module.exports = router;
