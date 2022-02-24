from flask_app import app
from flask import render_template, request, redirect

from flask_app.models.books import Book

@app.route("/new_book")
def new_book():
    allBooks = Book.allbooks()
    return render_template("booksPage.html", allBooks = allBooks)
    # authors = Author.allAuthors()
    # return render_template("index.html", authors = authors)

@app.route("/add_newBook", methods = ["POST"])
def add_newBook():
    data = {
        "title" : request.form["book_title"],
        "num_of_pages" : request.form["num_of_pages"]
    }
    Book.save(data)
    return redirect("/new_book")
