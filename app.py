from flask import Flask
from flask_cors import CORS
#import library

import speech_recognition as sr

# Initialize recognizer class (for recognizing the speech)

r = sr.Recognizer()

# Reading Microphone as source
# listening the speech and store in audio_text variable

with sr.Microphone() as source:
    print("Talk")
    audio_text = r.listen(source)
    # print("Time over, thanks")
# recoginize_() method will throw a request error if the API is unreachable, hence using exception handling
    rec=r.recognize_google(audio_text)
    try:
        # using google speech recognition
        print("Text: "+rec)
    except:
         print("Sorry, I did not get that")

app = Flask(__name__)
CORS(app)

@app.route('/hello')
def say_hello_world():
    return {'result': rec }