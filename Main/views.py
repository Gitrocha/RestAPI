from flask import Response, stream_with_context, current_app, make_response, render_template, Flask, request, jsonify
from flask_restful import Resource, Api
import log
import sys


class EmployeesResource(Resource):
    """
    Create class methods of API - Get, Post, Delete and Update
    """

    def get(self):
        print('Getting')
        log.start()

        try:
            log.info('Get Resource')

        except OSError:
            log.info("Could not get information")

            errormsg = "Unexpected error:" + str(sys.exc_info()[0]) + ' / ' + str(sys.exc_info()[1]) + ' / ' + \
                       str(sys.exc_info()[2])
            log.info(errormsg)

        return True

    def post(self):
        log.start()

        try:
            log.info('Post Resource')

        except OSError:
            log.info("Could not get information")

            errormsg = "Unexpected error:" + str(sys.exc_info()[0]) + ' / ' + str(sys.exc_info()[1]) + ' / ' + \
                       str(sys.exc_info()[2])
            log.info(errormsg)

        return True

    def delete(self):
        log.start()

        try:
            log.info('Get Resource')

        except OSError:
            log.info("Could not get information")

            errormsg = "Unexpected error:" + str(sys.exc_info()[0]) + ' / ' + str(sys.exc_info()[1]) + ' / ' + \
                       str(sys.exc_info()[2])
            log.info(errormsg)

        return True

    def update(self):
        log.start()

        try:
            log.info('Get Resource')

        except OSError:
            log.info("Could not get information")

            errormsg = "Unexpected error:" + str(sys.exc_info()[0]) + ' / ' + str(sys.exc_info()[1]) + ' / ' + \
                       str(sys.exc_info()[2])
            log.info(errormsg)

        return True


class LogResource(Resource):
    def get(self):
        log.start()

        try:
            syslog = open('log/syslog.log', 'r')

        except OSError:
            log.info("Faile to open log file")
            return 'no log file found'

        content = stream_with_context(syslog)
        response = Response(content)
        response.headers['Content-type'] = 'text/plain'

        return response
