var q = 'tasks';
 
var open = require('amqplib').connect(process.env.RABBITMQ_URL);
 
export function publish(queueName, payload) {
    // Publisher
        return open.then(function(conn) {
            return conn.createChannel();
        }).then(function(ch) {
            return ch.assertQueue(queueName).then(function(ok) {
            return ch.sendToQueue(queueName, Buffer.from(JSON.stringify(payload)));
            });
        }).catch(console.warn);
}



// Consumer
export function subscribe(queueName) {
    open.then(function(conn) {
        return conn.createChannel();
      }).then(function(ch) {
        return ch.assertQueue(queueName).then(function(ok) {
          return ch.consume(queueName, function(msg) {
            if (msg !== null) {
                // msg.content is buffer,
                const payload = JSON.parse(msg.content.toString());
                console.log("susbcriber Paylaod received ", payload);
                
              // QoS : 0, 1, 2, ack to broker stating received and processed event
                ch.ack(msg);
            }
          });
        });
      }).catch(console.warn);
}
