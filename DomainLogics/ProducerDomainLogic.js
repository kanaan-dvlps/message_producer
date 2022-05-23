const { HandleProduceMessageOutboundPort } = require('../Ports/Outbound/ProducerOutboundPort');

const SendMessage = async (message) => {
  try {
    
    const sentMessage = await HandleProduceMessageOutboundPort(message);
    return sentMessage;

  } catch (error) {
    return error;
  }
};

module.exports = {
  SendMessage,
}