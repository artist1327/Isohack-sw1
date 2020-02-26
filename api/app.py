from flask import Blueprint
from  flask_restful import Api
# from resources.      import Scrapping 
from resources.signup import SignupApi
from resources.login import LoginApi
from resources.Predictions import Predict
api_bp=Blueprint('api',__name__)
api=Api(api_bp)




api.add_resource(SignupApi,'/signup')

api.add_resource(LoginApi,'/login')

api.add_resource(Predict,'/predict/<url>')