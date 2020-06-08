# Github Repository List

### Description
A service to list Github repositories based on their stars count. You can filter the list by programming language as well as get lists created after specific date


### Installation
- ```git clone https://github.com/abumostafa/gh-service.git```
- ```cd gh-service```
- ```docker-compose up```
- Navigate to [http://localhost:3000/v1/repo/popular](http://localhost:3000/v1/repo/popular)


### Docs
| Param          | Value                                                | Required  |
|:-------------  |:-----------------------------------------------------|:---------:|
| `itemsPerPage` | Number of items per page. Max 100                    | `false`   |
| `date`         | ISO standard date  YYYY-MM-DD                        | `false`   |
| `lang`         | programming language. ex `java`, `javascript`, etc., | `false`   |


### Quick Links
- Default (Limit 30): [http://localhost:3000/v1/repo/popular](http://localhost:3000/v1/repo/popular)
- Top 10: [http://localhost:3000/v1/repo/popular?itemsPerPage=10](http://localhost:3000/v1/repo/popular?itemsPerPage=10)
- Top 30: [http://localhost:3000/v1/repo/popular?itemsPerPage=30](http://localhost:3000/v1/repo/popular?itemsPerPage=30)
- Top 50: [http://localhost:3000/v1/repo/popular?itemsPerPage=50](http://localhost:3000/v1/repo/popular?itemsPerPage=50)
- Top 50: [http://localhost:3000/v1/repo/popular?itemsPerPage=100](http://localhost:3000/v1/repo/popular?itemsPerPage=100)
- Top Typescript Repositories: [http://localhost:3000/v1/repo/popular?lang=typescript](http://localhost:3000/v1/repo/popular?lang=typescript)
- Top JavaScript Repositories from January 2020: [http://localhost:3000/v1/repo/popular?lang=javascript&date=2020-01-01](http://localhost:3000/v1/repo/popular?lang=javascript&date=2020-01-01)


### Tests
- ```git clone https://github.com/abumostafa/gh-service.git```
- ```cd gh-service```
- ```npm i```
- ```npm test```

