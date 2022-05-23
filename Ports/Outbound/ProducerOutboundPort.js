const { HandleProduceMessageProxy } = require('../../Adapters/Outbound/ProducerProxy');

const HandleProduceMessageOutboundPort = async (message) => {
  try {
    
    const sentMessage = await HandleProduceMessageProxy(message);
    return sentMessage;

  } catch (error) {
    return error;
  }
};

module.exports = {
  HandleProduceMessageOutboundPort
};