###
Assignment: Write a function that searches the address book array for any first or last
name inputted via the command line. Return the addresses and names of all results found.
Bonus points for writing tests to ensure that your solution works!
###

AddressBook =
    searchByName: (name) ->
        AddressBook.people.filter (item) ->
            item.name.indexOf(name) > -1

    people: [
        {
            name: "John Gomez",
            street: "8636 Cost Avenue",
            city: "Rockville, VA"
        },
        {
            name: "James Mazur",
            street: "4961 Adams Drive",
            city: "East Bernard, NH"
        },
        {
            name: "Adam Ross",
            street: "486 Leverton Cove Road",
            city: "Pittsfield, MA"
        },
        {
            name: "Betty Bowman",
            street: "840 Arlington Way",
            city: "Conroe, CA"
        },
        {
            name: "Dannielle Thompson",
            street: "31 Frosty Lane",
            city: "Endicott, NJ"
        },
        {
            name: "Irving Burgess",
            street: "59 Norma Lane",
            city: "Monroe, MO"
        },
        {
            name: "John Peeler",
            street: "2371 Quincy Street",
            city: "Horsham, LA"
        },
        {
            name: "Lydia Nelson",
            street: "7090 Irving Place",
            city: "Orchardfarm, PA"
        },
        {
            name: "Debra Montgomery",
            street: "783 Washburn Street",
            city: "Baton Rouge, RI"
        }
    ]

# The name variable will return the string inputted via the command line.
# For example, `node addressBook.js 'Andrew'` will return the string 'Andrew'
name = process.argv.slice(2, 3)[0]

console.log AddressBook.searchByName name
