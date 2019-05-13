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


def find_employee_exact(empname, connection):
    c = connection.cursor()
    c.execute("SELECT * FROM employees_list WHERE name=:name", {'name': empname})
    return c.fetchall()


def find_employee_close(empname, connection):
    c = connection.cursor()

    likename = f'%{empname}%'
    c.execute("SELECT * FROM employees_list WHERE name LIKE :name", {'name': likename})
    return c.fetchall()


def update_age(employee, newage, connection):
    with connection:

        c = connection.cursor()
        c.execute("""UPDATE employees_list SET age = :age
                    WHERE name = :name""",
                  {'name': employee.name, 'age': newage})


def remove_employee(employee, connection):
    with connection:

        c = connection.cursor()
        c.execute("DELETE from employees_list WHERE name = :name",
                  {'name': employee.name})
