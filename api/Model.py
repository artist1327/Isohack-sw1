from flask import Flask
from flask_marshmallow import Marshmallow
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
ma = Marshmallow()
db = SQLAlchemy()


class User(db.Model):
    __tablename__='user'
    id=db.Column(db.String(20), primary_key=True)
    name=db.Column(db.String(40), nullable=False)
    password=db.Column(db.String(85),nullable=False)
    public_id=db.Column(db.String(50),default='123')


    def __init__self(self,id,name,password,public_id):
        self.id=id
        self.name=name
        self.password=password
        self.public_id=public_id


class Scrapping(db.Model):
    __tablename__="Prices"
    id=db.Column(db.Integer,primary_key=True )
    name=db.Column(db.String(300),nullable=False)
    price=db.Column(db.String(200),nullable=False)


    def __init__self(self,id,name,price):
        self.id=id
        self.name=name
        self.price=price
