# Tools
This project requires following tools:
- Mongo DB
- Kafka
- Redis
- Elasticsearch
- Filebeat
- Mongosh (Mongo shell command)

## Description

## Installation
1. Install MongoDB
```bash
make mongo-up
```
2. Install Kafka
```bash
make kafka-up
```
3. Install Redis
```bash
make redis-up
```
4. Install Elasticsearch
```bash
make elastic-up
```
5. Install Filebeat
Follow this instruction:
https://www.elastic.co/guide/en/beats/filebeat/current/filebeat-installation-configuration.html
6. Install Mongosh
- Download mongoshell binary from this link https://www.mongodb.com/try/download/shell
- Choose your platform and install it

## Data Preparation
1. After success install mongosh, insert continent data with this command
```bash
./mongosh "mongodb://127.0.0.1:27021/admin?replicaSet=dbrs&directConnection=true"  --file /tools/data/continent.js
```
2. Insert country data
```bash
./mongosh "mongodb://127.0.0.1:27021/admin?replicaSet=dbrs&directConnection=true"  --file /tools/data/country.js
```

3. Insert province data
```bash
./mongosh "mongodb://127.0.0.1:27021/admin?replicaSet=dbrs&directConnection=true"  --file /tools/data/province.js
```

4. Insert city data
```bash
./mongosh "mongodb://127.0.0.1:27021/admin?replicaSet=dbrs&directConnection=true"  --file /tools/data/city.js
```

5. Insert district data
```bash
./mongosh "mongodb://127.0.0.1:27021/admin?replicaSet=dbrs&directConnection=true"  --file /tools/data/district.js
```

6. Insert subdistrict data
```bash
./mongosh "mongodb://127.0.0.1:27021/admin?replicaSet=dbrs&directConnection=true"  --file /tools/data/subdistrict.js
```

7. Insert database index
```bash
./mongosh "mongodb://127.0.0.1:27021/admin?replicaSet=dbrs&directConnection=true"  --file /tools/data/index.js
```