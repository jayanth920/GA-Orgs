const vendingMachine = {
  snacks: [
    {
      name: 'kitkat',
      price: 6
    },
    {
      name: 'sun chips',
      price: 7
    },
    {
      name: 'apple',
      price: 12
    },
  ],
  vend(input){
    console.log('vending', vendingMachine.snacks[input]);
  }
}

vendingMachine.vend(1)
