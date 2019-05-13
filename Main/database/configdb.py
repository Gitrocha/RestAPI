import sqlite3

'''
Create configurations for local database creation.
TODO: Replace it to a cloud database service to persist data.
'''


def start_database():

    #conn = sqlite3.connect(':memory:')
    conn = sqlite3.connect('./Main/database/data/Employees.db')
    c = conn.cursor()
    c.execute("""CREATE TABLE employees_list (
            ids integer primary key autoincrement,
            name text,
            age integer,
            role text
            )""")

    return
