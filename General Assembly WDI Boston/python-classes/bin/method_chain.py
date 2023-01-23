"""Method chaining practice"""

class Satellite:
    """Creates satellite objects"""
    def __init__(self):
        self.orbits = 0

    def orbit(self):
        """Time to orbit the earth"""
        self.orbits += 1
        print(f"Bleep bloop... I have orbited the earth {self.orbits} times.")

sputnik = Satellite()
sputnik.orbit().orbit().orbit() # Make this work!
