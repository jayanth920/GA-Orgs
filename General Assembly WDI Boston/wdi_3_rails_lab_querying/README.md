# Tow Lot Querying Lab

The [tow lot app](https://github.com/ga-wdi-boston/wdi_3_rails_lab_migrations) you built earlier has been in use for a few weeks, and the owner has some questions about the data that is now entered into it. Run `rake db:setup` to create the database and load this data, then open a `rails console` and write a *single* ActiveRecord query to achieve each of the following objectives. Record your finished queries in a separate file.

**Note:** "Vehicle" here only refers to records in the `vehicles` table (i.e. not tow trucks).

1. Get a list of all tow trucks.
2. Get the vehicle with ID 3.
3. Get the vehicle with VIN D0985DF1593A350A4.
4. Get a list of all vehicles sorted by acquisition date.
5. Get a list of all silver vehicles, ordered alphabetically by make.
6. Get a list of all red Honda vehicles that are cars.
7. Get a count of all vehicles that are motorcycles.
8. Get a count of vehicles that are currently on the lot (i.e. not released).
9. Get a list of all tow trucks whose mileage is over 200,000.
10. Get a list of all tow trucks whose last service was more than 8 months ago.
11. Get the average tow fee across all vehicles.
12. Get the top 3 vehicles with the highest tow fees.
13. Get all vehicles that have a fee assessed which has not been paid.
14. Get a list of all released vehicles, sorted by most recently released.
15. Get a list of all vehicles that have notes.
16. Get the VINs of all vehicles manufactured before the year 2000.
17. Get the make, model, and year of all silver vehicles, ordered by year.
18. Get the total income from all vehicles (i.e. sum of all fees that are paid).
