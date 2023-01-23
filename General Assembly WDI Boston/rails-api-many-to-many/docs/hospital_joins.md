# Code Along: Create Appointment Model

We're going to use the generators that Rails provides to generate an
`appointment` model along with an `appointment` migration that includes
references to both `patient` and `doctor`.

```ruby
bin/rails generate scaffold appointment doctor:references patient:references date:datetime
```

Along with creating an `appointment` model, controller, routes, and serializer,
Rails will create this migration:

```ruby
class CreateAppointments < ActiveRecord::Migration
  def change
    create_table :appointments do |t|
      t.references :doctor, index: true, foreign_key: true
      t.references :patient, index: true, foreign_key: true
      t.datetime :date

      t.timestamps null: false
    end
  end
end
```

So our `appointment` model now has the following attributes: id, doctor_id,
patient_id, and date.

Let's run our migration with `bin/rails db:migrate`

Let's take a peek at our database and see how this model looks. Simply type:

```bash
bin/rails db
```

If your prompt looks like this `rails-api-clinic-code-along_development=#` type:

```bash
\d appointments
```

You will be able to see all the columns contained in the `appointments` table.
