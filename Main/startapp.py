from flask_script import Server, Manager
from app import create_app
import log


manager = Manager(create_app())
manager.add_command('runserver', Server(use_debugger=True, use_reloader=False, threaded=True))

if __name__ == '__main__':
    """
    Run Flask server in given host and port in the format 
    python Main/startapp.py runserver --host X.Y.Z.W --port N
    """

    log.start()
    # log.info(f'Application has started')
    log.info('Application has started')
    manager.run()
