from flask_app import app
from flask import redirect, session
from flask_app.models.likes import Likes

# /Likes/i.user_id/i.id"


# @app.route('/Likes/<int:users_id>/<int:show_id>')
# def like_show(users_id, shows_id):
#     data = {
#         "users_id":users_id,
#         "show_id": shows_id
#     }
#     Likes.like_show(data)
    
#     return redirect("/Dashboard")