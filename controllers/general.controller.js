module.exports.addSubscriber = async (req, res) => {
  try {
    const subscriberModel = require("../models/subscriber.model");
    const exists = await subscriberModel.findOne(req.body);
    if (exists) throw { message: "Already Subscribed with this email" };

    await subscriberModel.create(req.body);
    const sendEmail = require("../utils/sendEmail");
    sendEmail("event", {
      message: `New Subscriber Onboarded: ${req.body.email}`,
      email: "harshvsingh.223@gmail.com",
    });
    res.status(201).json({
      success: true,
      message: "Subscribed Successfully",
    });
  } catch (error) {
    console.log("Subscriber Add Error", error);
    res.status(500).json({ success: false, message: error.message });
  }
};
