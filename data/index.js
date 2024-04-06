db = db.getSiblingDB('assessment');

db.getCollection("bank-ticket").createIndex({ "userId": 1, "queueId": 1 });
db.getCollection("bank-ticket").createIndex({ "isUsed": 1, "eventId": 1, "ticketType": 1 });
db.getCollection("bank-ticket").createIndex({ "userId": 1 });
db.getCollection("bank-ticket").createIndex({ "updatedAt": -1 });
db.getCollection("bank-ticket").createIndex({ "ticketNumber": 1 });
db.getCollection("bank-ticket").createIndex({ "seatNumber": -1, "eventId": 1, "countryCode": 1, "ticketType": 1 });
db.getCollection("bank-ticket").createIndex({ "createdAt": 1, "updatedAt": 1, "paymentStatus": 1 });
db.getCollection("bank-ticket").createIndex({ "userId": 1, "updatedAt": -1 });
db.getCollection("bank-ticket").createIndex({ "ticketNumber": 1, "eventId": 1 });

db.getCollection("ticket-detail").createIndex({ "totalRemaining": 1, "country.code": 1, "tag": 1 });
db.getCollection("ticket-detail").createIndex({ "ticketType": 1, "eventId": 1 });
db.getCollection("ticket-detail").createIndex({ "ticketType": 1, "totalRemaining": 1, "country.code": 1, "tag": 1 });
db.getCollection("ticket-detail").createIndex({ "eventId": 1, "ticketType": 1, "ticketPrice": 1, "country.code": 1 });
db.getCollection("ticket-detail").createIndex({ "ticketType": 1, "ticketPrice": 1, "country.code": 1, "tag": 1 });
db.getCollection("ticket-detail").createIndex({ "ticketType": 1, "ticketPrice": 1, "totalRemaining": 1, "tag": 1 });
db.getCollection("ticket-detail").createIndex({ "eventId": 1, "ticketType": 1, "country.code": 1 });
db.getCollection("ticket-detail").createIndex({ "ticketId": 1, "eventId": 1 });
db.getCollection("ticket-detail").createIndex({ "ticketType": 1, "country.code": 1, "tag": 1 });
db.getCollection("ticket-detail").createIndex({ "ticketId": 1 });
db.getCollection("ticket-detail").createIndex({ "ticketType": 1, "totalQuota": 1, "totalRemaining": 1, "country.name": 1, "country.code": 1, "tag": 1 });

db.getCollection("order").createIndex({ "userId": 1, "createdAt": -1 });
db.getCollection("order").createIndex({ "ticketNumber": 1 });

db.getCollection("event").createIndex({ "eventId": 1 });

db.getCollection("queue-room").createIndex({ "eventId": 1, "userId": 1 });
db.getCollection("queue-room").createIndex({ "eventId": 1, "seatNumber": -1 });

db.getCollection("users").createIndex({ "userId": 1 });
db.getCollection("users").createIndex({ "email": 1 });

db.getCollection("users-temp").createIndex({ "email": 1 });

db.getCollection("province").createIndex({ "name": 1 });

db.getCollection("city").createIndex({ "name": 1, "provinceId": 1 });

db.getCollection("district").createIndex({ "name": 1, "cityId": 1, "provinceId": 1 });

db.getCollection("subdistrict").createIndex({ "name": 1, "cityId": 1, "districtId": 1, "provinceId": 1 });
db.getCollection("subdistrict").createIndex({ "id": 1 });

db.getCollection("country").createIndex({ "name": 1 });
db.getCollection("country").createIndex({ "id": 1 });

db.getCollection("continent").createIndex({ "name": 1 });

db.getCollection("online-ticket-config").createIndex({ "tag": 1 });

db.getCollection("payment-history").createIndex({ "payment.transactionStatus": 1, "isValidPayment": 1, "expiryTime": 1, "createdAt": 1 });
db.getCollection("payment-history").createIndex({ "ticket.ticketNumber": 1, "isValidPayment": 1 });
db.getCollection("payment-history").createIndex({ "paymentId": 1 });
db.getCollection("payment-history").createIndex({ "paymentId": 1, "isValidPayment": 1 });
db.getCollection("payment-history").createIndex({ "userId": 1, "createdAt": -1 });