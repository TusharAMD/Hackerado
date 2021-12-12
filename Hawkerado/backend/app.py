from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/search', methods = ['GET', 'POST'])
def search():
    if(request.method == 'POST'):
        print(request.json)
        return jsonify({'data': "200"})
    else:
        return jsonify({'data': "200 get"})

if __name__=="__main__":
    app.run()