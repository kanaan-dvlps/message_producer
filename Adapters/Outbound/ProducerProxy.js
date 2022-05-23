const amqp = require('amqplib/callback_api');
const { MESSAGE_SUCCESSFULLY_SENT } = require('../../Helpers/Responses');

const HandleProduceMessageProxy = async (message) => {
  try {
    
    amqp.connect('amqp://channel_rabbitmq_service:5672', (error, connection) => {
      if (error) {
        console.log(error);
        throw error;
      }
      
      connection.createChannel((err, channel) => {
        
        if (err) {
          console.log(err);
          throw err;
        }

        const queue = 'order';
        // const message = {
        //   userId: '128DSDE_ER12097866JK_98435734557UDIROIIO',
        //   orderId: '09547468UIYRT_12213267854UIDHFJDGKKL',
        //   orderItems: [{ itemId: '1293823IDFIRE_1232376456UITUERITU', amount: 10 }, { itemId: '1293823IDFIRE_1232376456UITUERITU', amount: 1 }],
        // }

        channel.assertQueue(queue, {
          durable: false,
        });

        channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)));

        console.log('[X] sent %s', { message: MESSAGE_SUCCESSFULLY_SENT, response: JSON.stringify(message) });

        return message;
      });

      // setTimeout(() => {
      //   connection.close();
      //   process.exit(0);
      // }, 500);

    });

  } catch (error) {
    console.log(error);
    return error
  }
};

module.exports = {
  HandleProduceMessageProxy
}