from flask import Flask
from flask_restful import Api
import log


def create_app():
    """
    Initialize application and add resources to interact with employees Database
    :return: None
    """
    print('App created')
    # from module import functions
    app = Flask(__name__)
    log.start()
    log.info('Application is Starting.')

    import views
    api = Api(app)

    # Endpoints - Get, Post, Delete and Update API Resources

    # Employees resources
    api.add_resource(
        views.EmployeesResource,
        '/employees'
    )

    # Logs visualization
    api.add_resource(
        views.LogResource,
        '/log'
    )

    return app
