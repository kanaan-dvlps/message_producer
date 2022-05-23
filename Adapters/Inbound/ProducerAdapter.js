const { MESSAGE_SUCCESSFULLY_SENT } = require('../../Helpers/Responses');
const { HandleProduceMessageInboundPort } = require('../../Ports/Inbound/ProducerInboundPort');

const HandleProduceMessageAdapter = async (message) => {
  try {
    
    const sentMessage = await HandleProduceMessageInboundPort(message);
    return sentMessage;

  } catch (error) {
    return error;
  }
};

module.exports = {
  HandleProduceMessageAdapter
};