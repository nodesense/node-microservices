https://www.npmjs.com/package/redis - redislab.com
https://www.npmjs.com/package/amqplib - https://www.cloudamqp.com/

pm2 - npm package 

Restuarent Service - PUT/POST/DELETE/Mutation
                            publish payload {op: update, restarent_id: '1233453'} to topic restuarent_events
Order Service- PUT/POST/DELETE/Mutation
Custoemr Service- PUT/POST/DELETE/Mutation
Reviews- PUT/POST/DELETE/Mutation
    review
    rating
Aggregation Service  - GET 
    Cache - invalidate the cache

    susbcriber.susbcribe for Restuarent service channel/topic (topic="restuarent_events") 
                 
                 payload {op: update, restarent_id: '1233453'}
                 cache.remove(restarent_id)

Gateway

redislab.com 
    30 MB

    npm redis


AMQP - Subscriber, Publish

Aggregation Service {
    GET /restuarents/detail/:id
        resp = cache.get(id)
        if (!resp) {
            resp1 =  get from restuarents service , restuarent detail based on id
            resp2 = get from review service top rated reviews 10 reviews
            resp3 =  get from rating from revies services, 4.0/5, of total 1000 ratings
            resp = aggregate_object {resp1, resp2, resp3}
            cache.put(id, JSON.stringgy(resp))
        }
 
       return res.send(resp)
}

How to invalidate teh cache 

Publish and Subscriber Pattern 