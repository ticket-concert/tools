mongo-up:
	sh ./mongo/dbstart.sh

elastic-up:
	docker-compose -f ./elastic/docker-compose.yml up

redis-up:
	docker-compose -f ./general/docker-compose.yml up

kafka-up:
	docker-compose -f ./kafka/docker-compose.yml up