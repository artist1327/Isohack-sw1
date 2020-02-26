from flask import Flask
from flask_cors import CORS


def create_app(config_filename):
    app=Flask(__name__)
    CORS(app)
    # cors = CORS(app, resources={r"/foo": {"origins": "http://localhost:port"}})
    # CORS(app, origins="http://localhost:5000", allow_headers=[
    # "Content-Type", "Authorization", "Access-Control-Allow-Credentials"],
    # supports_credentials=True)
    
    app.config.from_object(config_filename)
    app.config['SECRET_KEY']='Elegance-1234'

    from app import api_bp
    app.register_blueprint(api_bp, url_prefix='/api')
    
    from Model import db
    db.init_app(app)
   
    return app

if __name__=="__main__":
    app=create_app("config")

    app.run('172.16.20.103',debug=True)
  