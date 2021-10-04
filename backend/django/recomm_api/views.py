from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Store
from .serializers import StoreSerializer
import pymysql
from Rec.database import *

# Create your views here.


@api_view(['GET'])
def helloAPI(request):
    db, cursor = connectDB()
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
