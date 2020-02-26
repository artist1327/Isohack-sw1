from Model import db,User
from flask_restful import Resource
from flask import request,jsonify,make_response
import uuid
import datetime
import jwt
import time
from decorators.User_token import token_required
import cv2
# import joblib
import Fruit_Recognition.test_knn as kp 
# from skimage.transform import  resize
import pickle


from sklearn.externals import joblib
# import cv2
import numpy as np
import pandas as pd

from skimage.color import rgb2gray
from skimage.transform import rescale, resize, downscale_local_mean

from sklearn.model_selection import train_test_split
from skimage import data, color, feature
from skimage.feature import hog
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import accuracy_score
from skimage.filters import threshold_yen
from skimage.exposure import rescale_intensity
# import base64   image_64_encode = base64.encodestring(image_read) image_64_decode = base64.decodestring(image_64_encode) image_result = open('deer_decode.gif', 'wb') # create a writable image and write the decoding result image_result.write(image_64_decode) 


class Predict(Resource):
    def get(self,url):
        
        print(url)
        image=url;
        return {"status":"+VE"},200
        filename = r'/knn_model.pkl' 
        loaded_model =    pickle.load(open(filename, 'rb'))
        data = request.get_json(force=True)
        img=data["url"]
        img=cv2.imread(r+img)
        img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
        img=resize(img, (72, 72),anti_aliasing=True)
        data_test_ftr= kp.preprocessing_part_two(img)
        y_knn_pred = loaded_model.predict(data_test_ftr)
        print(y_knn_pred)
        
            # print("skdjfkjs",data["url"])
        # except:
            # pass

        # return {"status":"Hello"},200