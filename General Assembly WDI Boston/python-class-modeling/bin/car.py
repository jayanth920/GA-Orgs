"""Defines Car class Module"""

class Car:
    """Car class"""
    gas = 0
    def __init__(self, color, tank_size):
        self.color = color
        self.tank_size = tank_size

    def drive(self):
        """Reduces gas based on a certain distance"""
        if self.gas > 0:
            self.gas -= 5
        else:
            print('Empty tank! Fill me up!')

    def fill_tank(self):
        """Sets available gas to tank size"""
        self.gas = self.tank_size

class Truck(Car):
    """Truck class inherits from Car class"""

big_red_truck = Truck('red', 50)
big_red_truck.fill_tank()
big_red_truck.drive()
print(big_red_truck.gas)
# 45
