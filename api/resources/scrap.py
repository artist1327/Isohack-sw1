from Model import db,User
from flask_restful import Resource
from flask import request,jsonify,make_response
import uuid
import datetime
import jwt
import time
# from decorators.User_token import token_required
# from selenium import webdriver 
# from selenium.webdriver.common.by import By 
# from selenium.webdriver.support.ui import WebDriverWait 
# from selenium.webdriver.support import expected_conditions as EC 
# from selenium.common.exceptions import TimeoutException




def func():
    option = webdriver.ChromeOptions()
    option.add_argument(' — incognito')
# option.add_argument('headless')
    browser = webdriver.Chrome(executable_path="C:/Users/HP/Downloads/chromedriver_win32/chromedriver.exe", chrome_options=option)

    browser.get("https://www.ondoor.com/")
    timeout = 200
    try:

        WebDriverWait(browser, timeout).until(EC.visibility_of_element_located((By.XPATH, "//img[@class=’avatar width-full rounded-2']")))
        # time.sleep(5000)
        python_button = browser.find_elements_by_xpath("//input[contains (@value, 'Change Location')]")[0]
        python_button.click()
    except TimeoutException:
        print("Timed out waiting for page to load")
        # browser.quit()ss
    



class PriceAPi(Resource):
    
    # @token_required
    def get(self,*args):
        
        func()
        
        return {"response":"created successfully"}

        