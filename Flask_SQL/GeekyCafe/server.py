from flask_app import app
from flask_app.controllers import  register_controller, dashboard_controller

if __name__ == "__main__":
    app.run(debug = True)
