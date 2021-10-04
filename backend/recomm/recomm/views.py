from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Store
from .serializers import StoreSerializer
import pymysql

# Create your views here.
@api_view(['GET'])
def helloAPI(request):
    db = pymysql.connect(host="54.180.160.233", port=3306, user="root", passwd="eatrice", db="eatrice", charset="utf8mb4")
    cursor = db.cursor()
    sql = """select * from store where name=%s"""
    cursor.execute(sql, 'Agal')
    res = cursor.fetchall()
    return Response(res)

# @api_view(['GET'])
# def randomQuiz(request, id):
#     totalQuizs = Quiz.objects.all()
#     randomQuizs = random.sample(list(totalQuizs), id)
#     serializer = QuizSerializer(randomQuizs, many=True)
#     return Response(serializer.data)