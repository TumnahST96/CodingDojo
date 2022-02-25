
from flask_app import app
from flask import render_template, request, redirect
from flask_app.models.books import Book

from flask_app.models.authors import Author
from flask_app.models.faves import Fave

@app.route("/")
def index():
    authors = Author.allAuthors()
    return render_template("index.html", authors = authors)

@app.route("/add_newAuthor", methods = ["POST"])
def add_newAuthor():
    data = {
        "name" : request.form["author_name"]
    }
    Author.save(data)
    return redirect("/")
@app.route("/AuthPage/<int:id>")
def AuthPage(id):
    data = {
        "id" : id
    }
    # allFaves = Fave.faveAuth(data)
    allBooks = Book.allbooks()
    print(allBooks)
    return render_template("takeFaveBook.html", author_id = id,  allBooks = allBooks)


@app.route("/add_Fave/<int:author_id>", methods = ["POST"])
def add_Fave(author_id):
    data = {
        "author_id" :author_id,
        "book_id" : request.form["book_id"]
    }
    addBookandAuth = Author.addBookandAuth(data)
    return redirect("/")


