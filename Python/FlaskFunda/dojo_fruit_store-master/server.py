from flask import Flask, render_template, request, redirect
app = Flask(__name__)  

@app.route('/')         
def index():
    return render_template("index.html")




@app.route('/checkout', methods=['POST'])         
def checkout():
    print(request.form)
    firstName = request.form["first_name"]
    lastName = request.form["last_name"]
    StuId =  request.form["student_id"]
    count = 0
    apple = request.form["apple"]
    count+=int (apple)
    blackberry = request.form["blackberry"]
    count+= int (blackberry)
    raspberry =  request.form["raspberry"]
    count+= int (raspberry)
    strawberry = request.form["strawberry"]
    count+= int (strawberry)
    

    return render_template("checkout.html", firstName = firstName, lastName = lastName, StuId = StuId, apple = apple, blackberry = blackberry, raspberry= raspberry, strawberry=strawberry, count = count)

@app.route('/fruits')         
def fruits():
    return render_template("fruits.html")

if __name__=="__main__":   
    app.run(debug=True)    