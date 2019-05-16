'''
Module functions to properly interact with Database
'''


def add_employee(employee, connection):

    with connection:
        c = connection.cursor()
        c.execute("INSERT INTO employees_list (name,age,role) VALUES (:name, :age, :role)",
                  {'name': employee.name,
                   'age': employee.age,
                   'role': employee.role})

    message = f'Employee {employee.name}, {employee.age} added to new function {employee.role}.'

    return {'Status': 'ok', 'Message': message}


def find_employee_exact(empname, connection):

    c = connection.cursor()
    c.execute("SELECT * FROM employees_list WHERE name=:name", {'name': empname})

    result = c.fetchall()

    if len(result) == 0:
        message = f'Employee {empname} not found'
        result = {'Status': 'ok', 'Message': message}
        return result

    return {'Status': 'ok', 'Message': result}


def find_employee_close(namelike, connection):

    c = connection.cursor()
    likename = f'%{namelike}%'
    c.execute("SELECT * FROM employees_list WHERE name LIKE :name", {'name': likename})

    result = c.fetchall()

    if len(result) == 0:
        message = f'Employee name similar to {namelike} not found.'
        result = {'Status': 'ok', 'Message': message}
        return result

    return {'Status': 'ok', 'Message': result}


def find_employee_roles(rolelike, connection):

    c = connection.cursor()
    likename = f'%{rolelike}%'
    c.execute("SELECT * FROM employees_list WHERE role LIKE :role", {'role': likename})

    result = c.fetchall()

    if len(result) == 0:
        message = f'Employee role similar to {rolelike} not found.'
        result = {'Status': 'ok', 'Message': message}
        return result

    return {'Status': 'ok', 'Message': result}


def find_employee_exactid(empid, connection):

    c = connection.cursor()
    c.execute("SELECT * FROM employees_list WHERE id=:id", {'id': empid})

    result = c.fetchall()

    if len(result) == 0:
        message = f'Employee {empid} not found'
        result = {'Status': 'ok', 'Message': message}
        return result

    return {'Status': 'ok', 'Message': result}


def update_role(employeeid, newrole, connection):

    with connection:
        c = connection.cursor()

        c.execute("SELECT * FROM employees_list WHERE id=:id", {'id': employeeid})

        result = c.fetchall()

        if len(result) > 0:

            c.execute("""UPDATE employees_list SET role = :role
                        WHERE id = :id""",
                      {'id': employeeid, 'role': newrole})

            message = f'Employee {employeeid}, changed role to {newrole}.'

            return {'Status': 'ok', 'Message': message}

        message = f'There is no occurrence of id {employeeid}'

        return {'Status': 'error', 'Message': message}


def remove_employee(employeeid, connection):

    with connection:
        c = connection.cursor()
        c.execute("SELECT * FROM employees_list WHERE id=:id", {'id': employeeid})

        result = c.fetchall()

        if len(result) > 0:

            c.execute("DELETE from employees_list WHERE id = :id", {'id': employeeid})

            message = f'Removed employee ID: {employeeid} from database.'

            return {'Status': 'ok', 'Message': message}

        message = f'There is no occurrence of id {employeeid}'

        return {'Status': 'error', 'Message': message}
