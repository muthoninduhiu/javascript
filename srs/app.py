from flask import Flask, render_template, request, redirect, url_for, session
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__)
app.secret_key = "pet-care-database"

# Configure database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///pet_care.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# Define Pet and User models
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(50), unique=True, nullable=False)
    password = db.Column(db.String(50), nullable=False)
    pets = db.relationship('Pet', backref='user', lazy=True)

class Pet(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    breed = db.Column(db.String(50), nullable=False)
    age = db.Column(db.Integer, nullable=False)
    gender = db.Column(db.String(10), nullable=False)
    profile_pic = db.Column(db.String(50), nullable=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)

# Define routes and view functions
@app.route('/')
def home():
    if 'user_id' not in session:
        return redirect(url_for('login'))
    else:
        pets = Pet.query.filter_by(user_id=session['user_id']).all()
        return render_template('index.html', pets=pets)

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']
        user = User.query.filter_by(email=email).first()
        if user and user.password == password:
            session['user_id'] = user.id
            return redirect(url_for('home'))
        else:
            return render_template('login.html', error="Invalid email or password")
    else:
        return render_template('login.html')

@app.route('/logout')
def logout():
    session.pop('user_id', None)
    return redirect(url_for('login'))

@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        password = request.form['password']
        user = User(name=name, email=email, password=password)
        db.session.add(user)
        db.session.commit()
        session['user_id'] = user.id
        return redirect(url_for('home'))
    else:
        return render_template('register.html')

@app.route('/add_pet', methods=['GET', 'POST'])
def add_pet():
    if request.method == 'POST':
        name = request.form['name']
        breed = request.form['breed']
        age = request.form['age']
        gender = request.form['gender']
        profile_pic = request.files['profile_pic']
        filename = datetime.now().strftime("%Y%m%d-%H%M%S") + ".jpg"
        profile_pic.save(filename)
        pet = Pet(name=name, breed=breed, age=age, gender=gender, profile_pic=filename, user_id=session['user_id'])
        db.session.add(pet)
        db.session.commit()
        return redirect(url_for('home'))
    else:
        return render_template('add_pet.html')

if __name__ == '__main__':
    db.create_all()
    app.run(debug=True)
S