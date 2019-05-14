from flask import Flask
from flask_restful import Api
import log
import features
from database import configdb


def base_app():
    """
    Initialize application and add resources to interact with employees Database
    """
    print(' * Initializing API.')
    restapi = Flask(__name__)
    log.start()
    api = Api(restapi)
    # Employees resources
    api.add_resource(features.EmployeesResource1, '/employees')
    api.add_resource(features.EmployeesResource2, '/employees-by-id')
    api.add_resource(features.NewEmployeesResource, '/new-employees')
    # Logs visualization
    api.add_resource(features.LogResource, '/log')

    # Front mocking
    api.add_resource(features.FrontMock, '/run')

    # Create Database
    configdb.start_database()

    return restapi
