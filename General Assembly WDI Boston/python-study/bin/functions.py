# Run this file with `python bin/functions.py` or `python3 bin/functions.py`
"""Shows off default parameter values and named arguments"""

def move(name, city="Seattle", state="Washington"):
    """Prints who is moving and where"""
    msg = f"{name} is moving to {city}, {state}"
    print(msg)

# Uncomment each line one-by-one & run the file to see how the function
# takes the given input arguments.

# move('Sally')
# move('Sally', 'Boston', 'Massachusetts')
# move()
