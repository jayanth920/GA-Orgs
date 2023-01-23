#Javascript Quiz - Sept 15


##Questions

1. Make a `Person` constructor with attributes: `name:string`, `height:string`, `age:number`, `sleeping:boolean`.

2. Add prototype methods to `person`: `eat`, `sleep`, and `wakeUp`. (The `sleep` and `wakeUp` methods should toggle `sleeping` to `true/false`, and `eat` should return an eating noise.)

3. Make a `Student` prototype that inherits from `person` and has the additional attribute of `studying:boolean`.

4. Add methods to `Student` called `study`, and `stopStudy` to toggle `studying`

5. Override the `sleep` method on `student` to only run `sleep` if `studying` is `false`.