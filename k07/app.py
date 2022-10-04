# your heading here

from flask import Flask

app = Flask(__name__) # Q0: Where have you seen similar syntax in other langs?

@app.route("/") # Q1: What points of reference do you have for meaning of '/'?

def bob():
    print(__name__)
    return "bob"

def ello_world():
    print(__name__) # Q2: Where will this print to? Q3: What will it print?
    return "No hablo queso!"  # Q4: Will this appear anywhere? How u know?



app.run()  # Q5: Where have you seen similar constructs in other languages?


'''
DISCO:
The program runs the first function beneath @app.route("/")
The name of the function doesn't matter and if there are two functions the latter one does not run
Print goes to the shell and return prints on to the webpage

QCC:
0. Java with constructors
1. It denotes a new directory
2. It wil print to the terminal
3. It will print __name__ which is __main__. When we replace __name__ with a string, it printed the string
4. It appears on the web address http://127.0.0.1:5000. I know because I went to the page and I saw it
5. We are unsure
...

INVESTIGATIVE APPROACH:
We ran the program, looked at the terminal and clicked on the link. We saw "No hablo queso!"
We then changed __name__ to a string and the program printed the string in the terminal
Next we made a new function and discovered that only the first function ran
'''
