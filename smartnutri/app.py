from flask import Flask, render_template, url_for

app = Flask(__name__, static_url_path='/static')

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/consulta")
def consulta():
    return render_template("consulta.html")

@app.route("/dieta")
def dieta():
    return render_template("dieta.html")

@app.route("/login")
def login():
    return render_template("login.html")

@app.route("/cadastro")
def cadastro():
    return render_template("cadastro.html")

@app.route("/recuperacao")
def recuperacao():
    return render_template("recuperacao.html")

@app.route("/funcionalidades")
def funcionalidades():
    return render_template("funcionalidades.html")