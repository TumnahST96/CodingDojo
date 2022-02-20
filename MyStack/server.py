
import imp
from flask_app import app
from flask_app.controllers import user_controller

            
if __name__ == "__main__":
    app.run(debug=True)

#render_template: show me specific html. 
#redirect --redirects to desired place