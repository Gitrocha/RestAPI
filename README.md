# RestAPI

## Requirements

* Docker
* Docker Compose

## Quickstart

Execute the following command:

```shell
$ python Main/startapp.py runserver --host 0.0.0.0 --port 50000
```

Go to url [http://localhost:5000](http://localhost:5000).

## Endpoints

To Post data

```
$ curl -O http://localhost:8000/post
```

To Get data

```
$ curl -O http://localhost:8000/get
```

To Delete data

```
$ curl -O http://localhost:8000/delete
```
To Update data

```
$ curl -O http://localhost:8000/update
```

## Deployment

The project will be in Continuous Delivery by `Microsoft VSTS` or other CICD service. So the changes in the branch `master` automatically deploy in the production.


## Testing Locally

To test in local enviroment use Configurations Script (made for windows users).

In first teste run file:

- RestAPI\installenvs.bat


And then after first install run file:

- startlocal.bat

>
> 
> WARNING  
> Keep the requirements.txt updated by the following command:  
> pipenv lock -r > requirements.txt
> 
