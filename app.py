from flask import Flask, jsonify, redirect, request, session
from dotenv import load_dotenv
from flask_cors import CORS, cross_origin
from tests import tests


import requests
import json
import os


load_dotenv() #load env variables
CLIENT_ID = os.getenv("SPOTIFY_CLIENT_ID")
CLIENT_SECRET = os.getenv("SPOTIFY_CLIENT_SECRET")
REDIRECT_URI = os.getenv("SPOTIFY_REDIRECT_URI")

SPOTIFY_TOKEN_URL = 'https://accounts.spotify.com/api/token'
MY_FOLLOWED_ARTISTS_URL = 'https://api.spotify.com/v1/me/following?type=artist'


app = Flask(__name__)
CORS(app)
#CORS(app,resources={r'/*':{'origins':'http://localhost'}})
#cors = CORS(app, resources={r"/*": {"origins": "*"}})


def get_tokens():
    with open('token.json', 'r') as openfile:
        tokens = json.load(openfile)
    return tokens    


app.secret_key = os.getenv('SECRET_KEY')



###---> Routes

@app.route('/ping')
def ping():
    return jsonify({"message": "pong!"})

####---> Authentication <---####
@app.route('/')
def request_auth():

    scope = 'user-top-read playlist-modify-public playlist-modify-private user-follow-read' #playlist-read-private
    return redirect(f'https://accounts.spotify.com/authorize?response_type=code&client_id={CLIENT_ID}&scope={scope}&redirect_uri={REDIRECT_URI}')

###---> CALLBACK <---###        
@app.route('/callback')
def request_tokens():
    code = request.args.get('code')
    

    payload = {
        'grant_type': 'authorization_code',
        'code': code,
        'redirect_uri': REDIRECT_URI,
        'client_id': CLIENT_ID,
        'client_secret': CLIENT_SECRET
    }


    r = requests.post(SPOTIFY_TOKEN_URL, data=payload)
    response = r.json()

    tokens = {
        'access_token': response['access_token'],
        'refresh_token': response['refresh_token'],
        'expires_in': response['expires_in']
    }

    with open('token.json', 'w') as outfile:
        json.dump(tokens, outfile)


    
    return redirect('/get_artists') #get_artists



####---> GET Artists <---####
#@cross_origin
@app.route('/get_artists', methods=['GET'])
def get_artists():
    
    tokens = get_tokens()
    headers = { 'Authorization': f'Bearer {tokens["access_token"]}' }

    r = requests.get(MY_FOLLOWED_ARTISTS_URL, headers=headers)
    response = r.json()

    #artist_ids = []
    #artists = response['artists']['items']

    #for artist in artists:
        #artist_ids.append(artist['id'])

    print('Ids Artistas Recupedado')
    #session['artist_ids'] = artist_ids
    #str(artist_ids)

    return response




###--->GET Albums <---### 
#@cross_origin
@app.route('/get_albums', methods=['GET'])
def get_albums():
    tokens = get_tokens()
    artist_ids = session['artist_ids']

    album_ids = []
    album_names = {}

    for id in artist_ids:
        uri = f'https://api.spotify.com/v1/artists/{id}/albums?include_groups=album,single&country=US'
        headers = { 'Authorization': f'Bearer {tokens["access_token"]}' }
        r = requests.get(uri, headers=headers)
        response = r.json()

        #albums = response['items']
        
        #for album in albums:
            #album_name = album['name']
            #artist_name = album['artists'][0]['name']
            #if album_name not in album_names or artist_name != album_names[album_name]:
                #album_ids.append(album['id'])
                #album_names[album_name] = artist_name

    #session['album_ids'] =  album_ids
    print('retrieva album IDs!')
    #str(album_ids)
    return response      

###---> GET Albums por IDs de artista
@app.route('/get_albums/<string:artist_id>', methods=['GET'])
def get_albums_id(artist_id):
    tokens = get_tokens()

    uri = f'https://api.spotify.com/v1/artists/{artist_id}/albums?include_groups=album,single&country=US'
    headers = { 'Authorization': f'Bearer {tokens["access_token"]}' }
    r = requests.get(uri, headers=headers)
    response = r.json()

    print('Albums Recibidos!')

    return response     




####---> GET Tracks por Ids de Album <---###
@app.route('/get_tracks/<string:album_id>', methods=['GET'])
def get_tracks(album_id):
    with open('token.json', 'r') as openfile:
        tokens = json.load(openfile)

    uri = 'https://api.spotify.com/v1/albums/{album_id}/tracks'
    headers = { 'Authorization': f'Bearer {tokens["access_token"]}' }

    r = requests.get(uri, headers=headers)
    response = r.json()

    print('Tracks Recibidos!')

    return response














""" while response['artists']['next']:
        next_page_uri = response['artists']['next']
        r = requests.get(next_page_uri, headers=headers)
        response = r.json()
        for artists in response['artists']['items']:
            artist_ids.append(artists['id']) """









if __name__ == '__main__':
    app.run(debug=True, port=5000)





    """     artist_ids = session['artist_ids']

    album_ids = []
    album_names = {} """