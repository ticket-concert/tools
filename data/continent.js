db = db.getSiblingDB('assessment');
db.continent.insertMany( [{
  "code": "AE",
  "name": "Asean"
},
{
  "code": "ME",
  "name": "Middle East"
},
{
  "code": "SA",
  "name": "South America"
},
{
  "code": "AF",
  "name": "Africa"
},
{
  "code": "AS",
  "name": "Asia"
},
{
  "code": "OC",
  "name": "Oceania"
},
{
  "code": "EU",
  "name": "Europe"
},
{
  "code": "AN",
  "name": "Antarctica"
},
{
  "code": "NA",
  "name": "North America"
}] );