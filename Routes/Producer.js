const router = require('express').Router();
const { HandleProduceMessageAdapter } = require('../Adapters/Inbound/ProducerAdapter');

router.post('/send', async (req, res) => {
  try {
    
    const { message } = req.body;
    const sentMessage = await HandleProduceMessageAdapter(message);
    res.status(200).send({
      message: sentMessage
    })

  } catch (error) {
    res.status(500).send({
      message: error
    });
  }
})

module.exports = router;