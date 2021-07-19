curl --location --request POST 'localhost:5000/graphql' \
--header 'Content-Type: application/json' \
--data-raw '[{"operationName":"ViewerQuery","variables":{},"query":"query ViewerQuery {\n  viewer {\n    id\n    name\n  }\n}\n"}]' 
