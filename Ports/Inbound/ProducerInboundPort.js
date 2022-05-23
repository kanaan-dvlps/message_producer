const { SendMessage } = require('../../DomainLogics/ProducerDomainLogic');

const HandleProduceMessageInboundPort = async (message) => {
  try {
    
    const sentMessage = await SendMessage(message);
    return sentMessage;

  } catch (error) {
    return error;
  }
};

module.exports = {
  HandleProduceMessageInboundPort
};