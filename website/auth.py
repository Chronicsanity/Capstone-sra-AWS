from urllib.robotparser import RobotFileParser
from flask import Blueprint, render_template, request, flash, url_for
from werkzeug.utils import redirect
from .models import User
from . import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import login_user, login_required, logout_user, current_user



auth = Blueprint('auth', __name__)

@auth.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        email = request.form.get('email')
        password = request.form.get('password1')

        user = User.query.filter_by(email=email).first()
        if user:
            if check_password_hash(user.password, password):
               flash('Logged in successfully!', category='success')
               login_user(user, remember=True)
               return redirect(url_for('views.home'))
            else:
               flash('Incorrect password, try again.', category='error')
        else:
            flash('Email does not exist.', category='error')
            

    return render_template("login.html", user=current_user)

@auth.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect(url_for('auth.login'))

@auth.route('/sra_admin', methods=['GET', 'POST'])
def admin_role_check():
    if current_user.role == 'Admin':
        return render_template("sra_admin.html", user=current_user)
    elif current_user.role == 'Root':
        return render_template("sra_admin.html", user=current_user)
    else:
        flash ('Permission denied!')
        return render_template("Home.html", user=current_user)
def admin():
  
    return render_template("sra_admin.html", user=current_user)

@auth.route('/caller', methods=['GET', 'POST'])
def caller():
   return render_template("caller.html", user=current_user)


@auth.route('/root', methods=['GET', 'POST'])
def root_role_check():

    if current_user.role == 'Root':
        return render_template("root.html", user=current_user)
    else:
        flash ('Permission denied!')
        return render_template("Home.html", user=current_user)

def root():
    if request.method == 'POST': #setting role for indicated email
        email2 = request.form.get('email')
        role = request.form.get('role')
    
       
        if len(email2) < 4:
            flash('Email must be greater than 3 characters.', category='error')
        else:
           
            db.session.query(User).filter(email2 == User.email).update({"role" : role})
            db.session.commit()
       
        flash('Account Authorized!', category='success')
    return render_template("root.html", user=current_user)

@auth.route('/sign-up', methods=['GET', 'POST'])
def sign_up():
    if request.method == 'POST':
        email = request.form.get('email')
        firstName = request.form.get('firstName')
        password1 = request.form.get('password1')
        password2 = request.form.get('password2')
       

        user = User.query.filter_by(email=email).first()
        if user:
            flash('Email already exists.', category='error')
        elif len(email) < 4:
            flash('Email must be greater than 3 characters.', category='error')
        elif len(firstName) < 2:
            flash('First name must be greater than 1 character.', category='error')
        elif password1 != password2:
            flash('Passwords don\'t match.', category='error')
        elif len(password1) < 7:
            flash('Password must be at least 7 characters.', category='error')
        else:
            new_user = User(email=email, firstName=firstName, password=generate_password_hash(password1, method='sha256'))
            db.session.add(new_user)
            db.session.commit()
            
            flash('Account created!', category='success')
            return redirect(url_for('views.home'))

    return render_template("sign_up.html", user=current_user)
