
from flask_app import app

#controllers
from flask_app.controllers import user_controller, dashboard_controller
#  dashboard_controller



if __name__ == "__main__":
    app.run(debug = True)