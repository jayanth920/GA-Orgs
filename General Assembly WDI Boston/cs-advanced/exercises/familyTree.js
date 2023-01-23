const people = {
  name: "Robin",
  children: [
    {
      name: "Alberto",
      children: [
        {
          name: "Quinn",
          children: [
            {
              name: "Conner",
              children: []
            },
            {
              name: "Lila",
              children: []
            }
          ]
        }
      ]
    },
    {
      name: "Charlie",
      children: []
    }
  ]
}

// Write a function called getNames that returns a string or an array with all of the names
// 'Robin, Alberto, Quinn, Conner, Lila, Charlie'
// ['Robin', 'Alberto', 'Quinn', 'Conner', 'Lila', 'Charlie']
