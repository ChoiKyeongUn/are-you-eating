import pymysql


def connectDB():
    connect = pymysql.connect(host="54.180.160.233", port=3306,
                              user="root", passwd="eatrice", db="eatrice", charset="utf8mb4")
    cursor = connect.cursor()
    return connect, cursor
