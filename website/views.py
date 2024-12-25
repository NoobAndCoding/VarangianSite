from flask import Blueprint, render_template, request, flash
from flask_login import login_user, login_required, logout_user, current_user

views = Blueprint("views", __name__)

@views.route("/", methods = ["GET", "POST"])
@login_required
def home():
        return render_template("home.html")