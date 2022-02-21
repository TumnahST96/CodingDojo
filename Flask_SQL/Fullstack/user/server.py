

from flask import Flask, render_template
app = Flask (__name__)
from users import User



@app.route("/")
def index():
    
    uza = User.all_users()
    print(uza)
    return uza















            
if __name__ == "__main__":
    app.run(debug=True)
    


