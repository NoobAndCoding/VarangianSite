from flask import Blueprint, render_template, request, flash, redirect, url_for
from .models import User
from werkzeug.security import generate_password_hash, check_password_hash
from . import db
from flask_login import login_user, login_required, logout_user, current_user

auth = Blueprint("auth", __name__)

@auth.route("/login/", methods = ["GET", "POST"])
def login():
    if current_user.is_authenticated:
        return redirect(url_for("views.home"))
    if request.method == "POST":
        email = request.form.get("email")
        password = request.form.get("password")
        rememberMeBool = request.form.get("rememberme")
        
        user = User.query.filter_by(email = email).first()
        if user:
            if check_password_hash(user.password, password):
                flash("Logged in successfully", category = "success")
                login_user(user, remember = True if rememberMeBool is True else False)
                return redirect(url_for("views.home"))
            else:
                flash("Incorrect password", category = "error")
        else:
            flash("Email is not in the database", category = "error")
        
    return render_template('login.html')

@auth.route("/logout/")
@login_required
def logout():
    logout_user()
    return render_template("login.html")

@auth.route("/sign-up/", methods = ["GET", "POST"])
def sign_up():
    if current_user.is_authenticated:
        return redirect(url_for("views.home"))
    if request.method == "POST":
        email = request.form.get('email')
        password1 = request.form.get('password1')
        password2 = request.form.get('password2')
        rememberMeBool = request.form.get('rememberMe')
        
        user = User.query.filter_by(email = email).first()
        if user:
            flash("Email already in use", category = "error")
        elif len(email) < 4:
            flash("Email must greater than 4 characters.", category = "error")
        
        elif len(password1) < 7:
            flash("Password must be greater or equal to 8 characters", category = "error")
        
        elif password1 != password2:
            flash("Your passwords don't match", category = "error")
        
        else:
            new_user = User(email = email, password = generate_password_hash(password1, method = "scrypt", salt_length=16))
            db.session.add(new_user)
            db.session.commit()
            if rememberMeBool is not None:
                login_user(user = new_user, remember = True)
                flash("Account created!", category = "success")
                return redirect("views.home")
            else:
                login_user(user = new_user, remember = False)
                flash("Account created!", category = "success")
                return redirect("views.home")

    return render_template('signup.html')