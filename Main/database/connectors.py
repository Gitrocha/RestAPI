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
    return {'Status': 'ok', 'Message': c.fetchall()}


def find_employee_close(empname, connection):

    c = connection.cursor()
    likename = f'%{empname}%'
    c.execute("SELECT * FROM employees_list WHERE name LIKE :name", {'name': likename})
    return c.fetchall()


def find_employee_exactid(empid, connection):

    c = connection.cursor()
    c.execute("SELECT * FROM employees_list WHERE id=:id", {'id': empid})
    return c.fetchall()[0]


def update_role(employeeid, newrole, connection):

    with connection:
        c = connection.cursor()
        c.execute("""UPDATE employees_list SET role = :role
                    WHERE id = :id""",
                  {'id': employeeid, 'role': newrole})

    message = f'Employee {employeeid}, changed role to {newrole}.'

    return {'Status': 'ok', 'Message': message}


def remove_employee(employeeid, connection):

    with connection:
        c = connection.cursor()
        c.execute("DELETE from employees_list WHERE id = :id",
                  {'id': employeeid})

    message = f'Removed employee ID: {employeeid} from database.'

    return {'Status': 'ok', 'Message': message}
