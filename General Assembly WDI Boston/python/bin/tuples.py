"""Shows off tuples as return values"""

def int_and_float(num):
    """Converts number and returns both int and float version"""
    converted_int = int(num)
    converted_float = float(num)
    return (converted_int, converted_float)

our_int, our_float = int_and_float(9.3)
print(our_int, our_float)
