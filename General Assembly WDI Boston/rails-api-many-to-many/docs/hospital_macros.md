# Renaming Associations

## Code Along: Renaming Clinic Associations

We want to create a new association between `doctor` and `patient`.

However, there are a few things to consider:

- Patients view doctors through specific professions.
- Doctors view patients differently as well.
- Relationships in a model **cannot** have the same name.

With this in mind, we can think of...: a doctor can have many *types* of
patients and a patient can have different *types* of doctors.

*Think: primary care recipient and primary care physician.*

In order to keep the work we've done so far, we'll want to modify our model
associations to keep the relationship intact.

But where do we start?

[The Rails Guide](http://guides.rubyonrails.org/association_basics.html) has
all the answers.

Looks like we need to add a `class_name` attribute to both models and a
`foreign_key` attribute to the `patient` model.

```ruby
class Patient < ApplicationRecord
  ## This is the standard use case
  belongs_to :doctor

  ## This is exactly the same as the above
  ## but shows what rails assumes
  belongs_to :doctor, class_name: 'Doctor',
                      foreign_key: 'doctor_id',
                      inverse_of: 'patients'
  # patient1.doctor will return us an instance of Doctor if there is one for
  # that patient

  ## If we want our association name to be 'primary_care_physician'
  belongs_to :primary_care_physician
  ## then rails will make the wrong assumptions
  belongs_to :primary_care_physician,
                    class_name: 'PrimaryCarePhysician',
                    foreign_key: 'primary_care_physician_id',
                    inverse_of: 'patients'
  ## THESE ARE ALL WRONG ^^^ Why? Do we have a PrimaryCarePhysician class?
                              ##  What do we want doctorWho.patients to return?

  ## So we have to tell it explicitly
  ## which class and foreign key our association name should point to
  belongs_to :primary_care_physician,
                     class_name: 'Doctor',
                     foreign_key: 'doctor_id',
                     inverse_of: 'primary_care_recipients'
  # patient1.primary_care_physician will return us an instance of a Doctor
end
```

In `models/patient.rb`:

```ruby
class Patient < ApplicationRecord
  belongs_to :primary_care_physician,
             class_name: 'Doctor',
             foreign_key: 'doctor_id',
             inverse_of: 'primary_care_recipients'

  validates :given_name, presence: true
  validates :born_on, presence: true
end
```

In `models/doctor.rb`:

```ruby
class Doctor < ApplicationRecord
  has_many :primary_care_recipients,
           class_name: 'Patient',
           inverse_of: 'primary_care_physician'

  validates :given_name, presence: true
  validates :family_name, presence: true
end
```

Adding `inverse_of` informs rails about the other side of the relationship. It's
not a requirement for relationships that follow the standard pattern, but once
custom relationships are introduced, `inverse_of` should be added!

## Code Along: Modifying Clinic Associations

While we can see that in the `appointment` model some some code was added for
us:

```ruby
class Appointment < ApplicationRecord
  belongs_to :doctor
  belongs_to :patient
end
```

But we need to go into our models (`patient`, `doctor`, and `appointment`) and
add some more code to finish creating our associations.

Let's go ahead and add that code starting with the `patient` model:

```ruby
# Patient Model
class Patient < ApplicationRecord
  has_many :appointments
  has_many :doctors, through: :appointments
end
```

In our doctor model we will do something similar:

```ruby
# Doctor Model
class Doctor < ApplicationRecord
  has_many :appointments
  has_many :patients, through: :appointments
end
```

Finally in our `appointment` model we're going to update it to:

```ruby
class Appointment < ApplicationRecord
  belongs_to :doctor, inverse_of: :appointments
  belongs_to :patient, inverse_of: :appointments
end
```

What is `inverse_of` and why do we need it?

## Code Along: Add Clinic Dependent Destroy

Say we wanted to delete a patient or a doctor. If we delete one we probably
want to delete the association with the other.

We'll use the `dependent destroy` to help us achieve this goal. Let's edit our
`patient` and `doctor` model to include it so when we delete one, reference to
the other gets deleted as well.

Let's update our models to look like the following:

```ruby
# Doctor Model
class Doctor < ApplicationRecord
  has_many :appointments, dependent: :destroy
  has_many :patients, through: :appointments
end
```

```ruby
class Patient < ApplicationRecord
  has_many :appointments, dependent: :destroy
  has_many :doctors, through: :appointments
end
```

Let's test this out by using curl request to construct relationships then
remove them.
