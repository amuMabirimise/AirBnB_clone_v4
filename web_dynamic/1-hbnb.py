#!/usr/bin/python3
""" Starting a Flask Web Application """
from models import storage
from models.state import State
from models.amenity import Amenity
from models.place import Place
from flask import Flask, render_template
import uuid

app = Flask(__name__)

@app.teardown_appcontext
def close_db(error):
    """ Removing the current SQLAlchemy Session """
    storage.close()

@app.route('/1-hbnb/', strict_slashes=False)
def hbnb():
    """ HBNB is looking alive! """
    states = sorted(storage.all(State).values(), key=lambda k: k.name)
    amenities = sorted(storage.all(Amenity).values(), key=lambda k: k.name)
    places = sorted(storage.all(Place).values(), key=lambda k: k.name)

    return render_template('1-hbnb.html',
                           states=states,
                           amenities=amenities,
                           places=places,
                           cache_id=uuid.uuid4())

if __name__ == "__main__":
    """ Main of the Function """
    app.run(host='0.0.0.0', port=5000)

