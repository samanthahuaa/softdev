# Polymer Erasers
# SoftDev
# K08 -- Putting it Together -- flask, debug, new line
# 2022-10-06
# time spent: 0.8hrs

from flask import Flask
app = Flask(__name__) #create instance of class Flask

@app.route("/")       #assign fxn to route
def hello_world():
    return "No hablo queso!"

app.run()

# We think that the same thing will happen except the shell won't print __main__
