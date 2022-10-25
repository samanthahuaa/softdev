Timmy, Dini, and Bob's Adventures: Samantha Hua, Anjini Katari, Emerson Gelobter
SoftDev
K17: Shell Game
2022-10-24
time spent: 1.0hrs

Notes:
 * All SQLite Shell commands begin with a .


 |Command|What it does|
 |-------|------------|
 | .show | showed the stats of your database including what settings you have on|
 | .exit | exited the SQLite shell|
 | .help | prints out all of the commands you can run in the shell|
 | .header on/off | turns on the header setting on off (we think this will change how the query treats the first row of the db)|



 CREATE TABLE changed the appearance of the shell ...> instead of the nomral sqlite>
 We think that it might not be meant to be put in the shell. We don't know how to get out of it. Need to end with a semicolon. 
    ex: CREATE TABLE amunals (name TEXT, id INTEGER PRIMARY KEY)

 A lot of the times when we ran commands, we didn't see anything