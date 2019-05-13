from flask import Response, stream_with_context, current_app, make_response, render_template, Flask, request, jsonify
from flask_restful import Resource, Api
import log
import sys


class EmployeesResource(Resource):
    """
    Create class methods of API - Get, Post, Delete and Update
    """

    def get(self):

        employee_id = request.args.get('id', default=0, type=int)

        try:
            string = f'User query for employee id {employee_id}'
            log.info(string)

        except OSError:
            log.info(f'Failed to fetch employee id {employee_id}')

            errormsg = "Unexpected error:" + str(sys.exc_info()[0]) + ' / ' + str(sys.exc_info()[1]) + ' / ' + \
                       str(sys.exc_info()[2])
            log.info(errormsg)

        return {'Status': 'Got me'}

    def delete(self):

        try:
            log.info('Delete Resource')

        except OSError:
            log.info("Could not delete employee information")

            errormsg = "Unexpected error:" + str(sys.exc_info()[0]) + ' / ' + str(sys.exc_info()[1]) + ' / ' + \
                       str(sys.exc_info()[2])
            log.info(errormsg)

        return {'Status': 'Deleted Me'}

    def put(self):

        try:
            log.info('Put Resource')

        except OSError:
            log.info("Could not update information")

            errormsg = "Unexpected error:" + str(sys.exc_info()[0]) + ' / ' + str(sys.exc_info()[1]) + ' / ' + \
                       str(sys.exc_info()[2])
            log.info(errormsg)

        return {'Status': 'Updated Me'}


class NewEmployeesResource(Resource):
    """
    Create class methods of API - Post
    """

    def post(self):

        try:
            log.info('Post Resource')
            straight = request.get_json()
            print('Straight', straight)

        except OSError:
            log.info("Could not post information")

            errormsg = "Unexpected error:" + str(sys.exc_info()[0]) + ' / ' + str(sys.exc_info()[1]) + ' / ' + \
                       str(sys.exc_info()[2])
            log.info(errormsg)
            postdict = {'Status': 'Error'}

        result = 'Teste'
        return {'Status': result}


class LogResource(Resource):

    def get(self):

        try:
            syslog = open('log/syslog.log', 'r')

        except OSError:
            log.info("Faile to open log file")
            return 'no log file found'

        content = stream_with_context(syslog)
        response = Response(content)
        response.headers['Content-type'] = 'text/plain'

        return response


class FrontMock(Resource):

    def get(self):

        from database import clientoperations

        print(clientoperations.client_test())

        return {'Status': 'Ok'}
