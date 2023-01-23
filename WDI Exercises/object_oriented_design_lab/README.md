## Object Oriented Design Lab

An Object Oriented design lab where students architect the blueprints of Classes.

- Consider the car. 
- You want to drive a car.
- You want to make it go faster.
- You do this by pressing the accelerator pedal.

#### Before you drive the car, how is it designed?

- Someone blueprints the architecture for the car. 
- They design the framing of the car.
  - They design a housing for the car. This could be seen as a **Class declaration**.
  - This could be written as `class Car {  /* content of the car go inside of the framing here */ }`
  - We could create a new copy of a car to drive using `Car car = new Car()`;
  - We would be **instantiating** a new copy of the **class** *blueprint*.
  - We can have them built all over the world! So there can be many!
  - **Classes** allow engineers to re-use *blueprints*; this saves time, energy, and money!
  - It also keeps things **DRY** as the desert. D. R. Y. Like the deserty. *DRY* like the Sahara.
- They design the gas pedal.
  - The pedal *keeps the interior abilities of the car* **private**
  - The pedal allows a driver to *perform an action* on the car; an *abilty*; a **method**.
  - This could be declared inside of the `Car` **class** *blueprint* as `private void accelerate() { /* contents of the method here */ }`
    - We make *methods* **private** to hide the nitty, gritty business logic.
    - We don't want to expose crucial information to competitors.
    - We don't want to show our sloppiness to the world, *amirite?!?!?!*
  - This could be performed using as `car.accelerate();`
  - The gas pedal gives the user a publically accessible way to accelerate the vehicle.
  - The user presses the gas pedal to perform this action; this ability; this method.
  - This could be declare inside of the `Car` as `public void pressBrakePedal() { this.accelerate(); // call the private method }`//
    - **Public methods** let people use parts correctly.
    - We make sure parts are correctly used for those inexperienced and *make it easy*.
    - We hide the launch codes from the aliens (but let them nuke asteroids if they want to).

##### Next, designing a breake pedal
- They design a brake pedal.
  - The pedal *keeps the interior abilities of the car that allow it to accelerate* **private**
  - The pedal allows a driver to *perform ann action* on the car; an *ability*; a **method**.
  - This could be declared inside of the `Car` **class** *blueprint* as `private void brake() { /* contents of the method here */ }`
    - We make *methods* **private** to hide our weird language dialects.
    - We don't want miscommunicate or have people use things incorrectly.
    - It would be bad to give aliens who don't understand english our nuclear launch codes and buttons, *amirite?!?!?!*
  - The brake pedal gives the user a publically accessible way to slow the vehicle down.
  - The user presses the brake pedal to perform this action; this ability; this method.
  - This could be declare inside of the `Car` as `public void pressBrakePedal() { this.accelerate(); // call the private method }`//
    - **Public methods** let people use parts correctly.
    - We make sure parts are correctly used for those inexperienced and *make it easy*.
    - We hide the launch codes from the aliens (but let them nuke asteroids if they want to).
  - This could be viewed as `car.brake();`

##### Independent Challenge
- They design a steering wheel. They are contracting this out to you!
  - How would you *abstract* the mechanic parts of the vehicle away from the user?
  - How will you make them **private**?
  - How will you let the user interact with the **steering wheel**?
  - What input does the **steering wheel** accept? What happens based on that?

##### Group Challenge
- You have been hired back! Your next challenge is to design the air bag system.
  - How would you implement this?
  - Break into teams and discuss. You have 7 minutes to discuss amongst your group.
  - Each team will take one minute to present to their class their design.
  - Instructors wills provide critique and feedback to each group after you present.

## View the Code
- This repository contains a Javascript constructor, Ruby class, and Java class as examples to show you what the final code would look like.
- What other public and private methods might your team add?
- Break into teams and discuss. You have 7 minutes to discuss amongst your group.
- Each team will take one minute to present to their class their design.
- Instructors wills provide critique and feedback to each group after you present.
