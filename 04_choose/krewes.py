'''
SIM Card: Marc Jiang, Ian Jiang, and Samantha Hua
SoftDev
K04 -- krewes dictionary and randomness
2022-09-23
time spent: 1.5hrs

keywords: rng randomness dictionary
'''

'''
DISCO:
    - random.choice() returns a random element from an iterable list. we found this more useful than using random.randint() and using the return value as an index
    - list() makes something iterable
    - dict.keys() returns all of the keys of a dictionary
    - to access the value associated with a key, you can write dict[key] similar to an array

QCC:
    - which is more random? randint or choice? is it ok to not care for our purposes?
    - when is the distinction of randomness really important?

OPS SUMMARY:
    1. make the keys from the dictionary iterable
    2. pick a random key
    3. access the value associated with that key
    4. return a random element of the chosen value
'''

import random

krewes = {
           2:["NICHOLAS", "ANTHONY", "BRIAN", "SAMUEL", "JULIA", "YUSHA", "CRAIG", "FANG MIN", "JEFF", "KONSTANTIN", "AARON", "VIVIAN", "AYMAN", "TALIA", "FAIZA", "ZIYING", "YUK KWAN", "DANIEL", "WEICHEN", "MAYA", "ELIZABETH", "ANDREW", "VANSH", "JONATHAN", "ABID", "WILLIAM", "HUI", "ANSON", "KEVIN", "DANIEL", "IVAN", "JASMINE", "JEFFREY", "Ruiwen"],
           7:["DIANA", "DAVID", "SAM", "PRATTAY", "ANNA", "JING YI", "ADEN", "EMERSON", "RUSSELL", "JACOB", "WILLIAM", "NADA", "SAMANTHA", "IAN", "MARC", "ANJINI", "JEREMY", "LAUREN", "KEVIN", "RAVINDRA", "SADI", "EMILY", "GITAE", "MAY", "MAHIR", "VIVIAN", "GABRIEL", "BRIANNA", "JUN HONG", "JOSEPH", "MATTHEW", "JAMES", "THOMAS", "NICOLE", "Karen"],
           8:["ALEKSANDRA", "NAKIB", "AMEER", "HENRY", "DONALD", "YAT LONG", "SEBASTIAN", "DAVID", "YUKI", "SHAFIUL", "DANIEL", "SELENA", "JOSEPH", "SHINJI", "RYAN", "APRIL", "ERICA", "JIAN HONG", "VERIT", "JOSHUA", "WILSON", "AAHAN", "GORDON", "JUSTIN", "MAYA", "FAIYAZ", "SHREYA", "ERIC", "JEFFERY", "BRIAN", "KEVIN", "SAMSON", "BRIAN", "HARRY", "CORINA", "Wanying", "Kevin"]
         }
krewes2 = {2:["Kevin", "Joe", "Mama"] , 7:["Marc", "Ian", "Samantha"], 8:["Jason", "Emilia", "Bobby"]}

keys = list(krewes.keys())
def choose(d):
    l = list(d.keys())
    key = random.randint(0,len(d)-1)
    value = random.randint(0,len(d[l[key]])-1)
    return d[l[key]][value]

# alt algo
def choose2(d):
    rand_key = random.choice(list(d.keys()))
    rand_val = random.choice(d[rand_key])
    return rand_val

# testing
print(choose(krewes))
print(choose(krewes2))

print(choose2(krewes))
print(choose2(krewes2))
