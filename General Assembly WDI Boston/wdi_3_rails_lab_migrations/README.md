# Tow Lot Migrations Lab

You are creating a Rails app for the owner of a tow lot to keep track of tow trucks and towed vehicles. Unfortunately, the requirements keep changing! For each step below, write a *single* migration that accomplishes the stated goal, then run `rake db:migrate` to execute it, run `rake db:migrate:redo` to ensure it can be rolled back, and *check your schema* to ensure your desired changes are present. Make a new Git commit with each successful migration.

### Get Started

Create a new Rails app within this directory by typing `rails new . -T -d postgresql`, then run `rake db:create` to create your database.

### Step 1

Create a table called `vehicles` to keep track of all vehicles. Vehicles have a make, model, and color (text), year (integer), VIN (unique non-nullable indexed text), an acquisition date, a text field for notes, and a boolean indicating whether this vehicle is a tow truck or a towed vehicle.

### Step 2

The owner wants to keep a record of towed vehicles that have been picked up, instead of deleting them from the database. Add a column that indicates what date a vehicle was picked up (if null, that indicates the vehicle is still on the lot).

### Step 3

The owner realizes that having a "pickup date" for tow trucks doesn't really make sense, and thinks the attributes for tow trucks and towed vehicles might diverge further in the future.

1. Create a table called `tow_trucks` with columns for make and model (text), year (integer), acquisition date, and a text field for notes.
2. Remove the boolean column indicating whether the vehicle is a tow truck from the `vehicles` table. This table will now only represent towed vehicles.

Be sure to do these as a single reversible migration! In the real world we would also write some code to transfer existing tow trucks into the new table, but we are staying clear of Rails models for now.

### Step 4

The owner wants to keep track of the mileage and most recent service date on tow trucks. Add columns to the `tow_trucks` table for this data.

### Step 5

The owner wants to expand the business into towing motorcycles. Add a boolean column to the `vehicles` table that will indicate whether the vehicle is a motorcycle.

### Step 6

You think a text column for the category of vehicle might be better, to allow for expansion into other vehicle types in the future (trucks?). Since you haven't pushed your changes from Step 6 yet, you can modify the existing migration. Do this &ndash; but be sure to roll it back *before* making any modifications.

**Warning:** Do not create a column called `type`! This is a reserved column name in Rails and will be handled in special ways that we don't want.

### Step 7

The motorcycle business is going well, so the owner is frequently sorting and filtering by vehicle category. Add an index on this column to make these operations faster, and make it non-nullable to ensure all vehicles are categorized.

### Step 8

The owner wants to experiment with putting some of his bookkeeping data into the app. Add a decimal column to the `vehicles` table that indicates the towing fee charged, and a boolean column indicating whether the full amount has been paid.

### Step 9

The owner isn't enthused about the bookkeeping experiment, and wants the app reverted to the way it was before. Create a new migration that will revert the previous one &ndash; use the `revert` method, do not manually undo the changes!
