"""Shows off default parameter values and named arguments"""

def move(name, city="Seattle", state="Washington"):
    """Prints who is moving and where"""
    msg = f"{name} is moving to {city}, {state}"
    print(msg)
