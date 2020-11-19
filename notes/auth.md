Authentication 
                - passport js - npm - node.js
                        300+ adaptors, google oauth, autho, okta .....

                - Own User/Password
                        register 
                            username, email, password
                            plain password should not be stored

                            encryption with decrptipn is bad - has problem, to revert back, encrption key needed

                            one way encryption
                              can encrypt, no decrypt

                            password as input, enypt using sha, ...

                            password 
                                +
                               salt - randomly - stored

                        to validate password,
                            you need password from user

            Generate JWT token after checking the username/password
            Token should be passed for every request
            Middleware to check it
            Token expiry, renewal ?? - Optional

                - 3rd party
                    -- Google authentication
                    -- Auth0
                    -- Okta

Authorization - Standard, Staff, Admin

[options 2, each one have its validator]
    restauraent service
        exclusion - search may be offered for annonymouse users
    order service
    user/customer-service
    review-service
        get - annoymouse
        post/delete/put - specific user, own comment, 
                user_id - authorization
                delete - admin


# Auth 

  -- API Gateway Service
  -- All requests goes here
        -- valdiate the user [one option]
               JWT ?? Header, Authorization -- 


gateway service - keep the bad user away
                - is token there or not
                - is token expired
                - can it check whether you have balance in your account?
    authenticate user
    use Order internally

restauraent service
order service
user/customer-service
review-service
reward-points

client ------> Gateway ---->  Order Service
                              User Service
                              ....
                              