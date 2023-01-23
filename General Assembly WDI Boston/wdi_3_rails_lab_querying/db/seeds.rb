TowTruck.delete_all
Vehicle.delete_all

TowTruck.create!(
  make: 'International',
  model: 'DT 444E',
  year: 1998,
  acquired_at: 6.years.ago,
  last_service_at: 4.months.ago,
  mileage: 282_453,
  notes: 'Transmission rebuilt December 2012'
)

TowTruck.create!(
  make: 'Freightliner',
  model: 'FL70',
  year: 1997,
  acquired_at: 7.years.ago,
  last_service_at: 6.months.ago,
  mileage: 171_024,
  notes: 'Front bumper needs work for inspection'
)

TowTruck.create!(
  make: 'International',
  model: '4700',
  year: 2001,
  acquired_at: 4.years.ago,
  last_service_at: 11.months.ago,
  mileage: 170_338,
  notes: ''
)

Vehicle.create!(
  make: 'Honda',
  model: 'Accord',
  color: 'gray',
  year: 2004,
  vin: 'A950ED1BD5AAC5061',
  category: 'car',
  acquired_at: 4.days.ago,
  released_at: nil,
  fee: nil,
  is_paid: false,
  notes: ''
)

Vehicle.create!(
  make: 'Toyota',
  model: 'Camry',
  color: 'blue',
  year: 2001,
  vin: '512C991364316FAA7',
  category: 'car',
  acquired_at: 2.days.ago,
  released_at: nil,
  fee: nil,
  is_paid: false,
  notes: ''
)

Vehicle.create!(
  make: 'Subaru',
  model: 'Outback',
  color: 'brown',
  year: 2007,
  vin: '97D04B60834F7A59B',
  category: 'car',
  acquired_at: 3.days.ago,
  released_at: nil,
  fee: nil,
  is_paid: false,
  notes: 'Damage to rear quarter panel'
)

Vehicle.create!(
  make: 'Chevrolet',
  model: 'Camaro',
  color: 'red',
  year: 2012,
  vin: '6A568B8115633A086',
  category: 'car',
  acquired_at: 4.days.ago,
  released_at: nil,
  fee: 239.20,
  is_paid: false,
  notes: ''
)

Vehicle.create!(
  make: 'Toyota',
  model: 'Prius',
  color: 'silver',
  year: 2009,
  vin: '657589CF5373505EE',
  category: 'car',
  acquired_at: 1.day.ago,
  released_at: nil,
  fee: nil,
  is_paid: false,
  notes: ''
)

Vehicle.create!(
  make: 'Jeep',
  model: 'Wrangler',
  color: 'yellow',
  year: 2002,
  vin: '15323190B689F17DE',
  category: 'car',
  acquired_at: 14.days.ago,
  released_at: 12.days.ago,
  fee: 125.70,
  is_paid: true,
  notes: ''
)

Vehicle.create!(
  make: 'Ford',
  model: 'Focus',
  color: 'blue',
  year: 1996,
  vin: 'D0985DF1593A350A4',
  category: 'car',
  acquired_at: 17.days.ago,
  released_at: 13.days.ago,
  fee: 215.30,
  is_paid: true,
  notes: ''
)

Vehicle.create!(
  make: 'Scion',
  model: 'xB',
  color: 'pink',
  year: 2004,
  vin: 'F0B94E2D1E83AF882',
  category: 'car',
  acquired_at: 8.days.ago,
  released_at: 7.days.ago,
  fee: 76.10,
  is_paid: true,
  notes: ''
)

Vehicle.create!(
  make: 'Honda',
  model: 'Fit',
  color: 'red',
  year: 2012,
  vin: '9B0A324912B5675F1',
  category: 'car',
  acquired_at: 9.days.ago,
  released_at: 6.days.ago,
  fee: 174.60,
  is_paid: true,
  notes: ''
)

Vehicle.create!(
  make: 'Volkswagen',
  model: 'Beetle',
  color: 'silver',
  year: 1964,
  vin: '9F26BC270E630A3A3',
  category: 'car',
  acquired_at: 15.days.ago,
  released_at: 11.days.ago,
  fee: 201.40,
  is_paid: false,
  notes: 'Check bounced, sent to collections'
)

Vehicle.create!(
  make: 'Mazda',
  model: 'Miata',
  color: 'blue',
  year: 2009,
  vin: '6CDFC56EF8AF719D7',
  category: 'car',
  acquired_at: 10.days.ago,
  released_at: 9.days.ago,
  fee: 88.60,
  is_paid: true,
  notes: ''
)

Vehicle.create!(
  make: 'Honda',
  model: 'Civic',
  color: 'black',
  year: 1997,
  vin: '76F5B45D4B455023F',
  category: 'car',
  acquired_at: 12.days.ago,
  released_at: 10.days.ago,
  fee: 129.30,
  is_paid: true,
  notes: 'Dent on right front wheel well'
)

Vehicle.create!(
  make: 'Toyota',
  model: 'Corolla',
  color: 'orange',
  year: 1977,
  vin: '410DF611BFBAE2CE1',
  category: 'car',
  acquired_at: 9.days.ago,
  released_at: 5.days.ago,
  fee: 198.40,
  is_paid: true,
  notes: ''
)

Vehicle.create!(
  make: 'Dodge',
  model: 'Dart',
  color: 'white',
  year: 1973,
  vin: 'EF9D38106063F6DCB',
  category: 'car',
  acquired_at: 9.days.ago,
  released_at: 5.days.ago,
  fee: 198.40,
  is_paid: true,
  notes: ''
)

Vehicle.create!(
  make: 'Chevrolet',
  model: 'Malibu',
  color: 'green',
  year: 1999,
  vin: 'FF3DD7D27D4D3D798',
  category: 'car',
  acquired_at: 17.days.ago,
  released_at: 13.days.ago,
  fee: 231.90,
  is_paid: true,
  notes: ''
)

Vehicle.create!(
  make: 'Kawasaki',
  model: 'Ninja 250R',
  color: 'black',
  year: 2012,
  vin: 'A1055252B7C3AE179',
  category: 'motorcycle',
  acquired_at: 2.days.ago,
  released_at: nil,
  fee: nil,
  is_paid: false,
  notes: ''
)

Vehicle.create!(
  make: 'Harley-Davidson',
  model: 'Sportster 883',
  color: 'red',
  year: 2002,
  vin: '6C2B482A0EBC0F5B7',
  category: 'motorcycle',
  acquired_at: 4.days.ago,
  released_at: 3.days.ago,
  fee: 102.40,
  is_paid: true,
  notes: ''
)

Vehicle.create!(
  make: 'BMW',
  model: 'K1200GT',
  color: 'blue',
  year: 2006,
  vin: '33E7651FFE585BA02',
  category: 'motorcycle',
  acquired_at: 7.days.ago,
  released_at: 5.days.ago,
  fee: 163.70,
  is_paid: true,
  notes: ''
)

Vehicle.create!(
  make: 'BMW',
  model: 'R1200GS',
  color: 'silver',
  year: 2014,
  vin: 'F3A88F970B736BF06',
  category: 'motorcycle',
  acquired_at: 6.days.ago,
  released_at: 5.days.ago,
  fee: 112.50,
  is_paid: true,
  notes: ''
)

Vehicle.create!(
  make: 'Honda',
  model: 'VTR1000F',
  color: 'red',
  year: 1999,
  vin: 'D77336B451C23CC3C',
  category: 'motorcycle',
  acquired_at: 8.days.ago,
  released_at: 7.days.ago,
  fee: 109.10,
  is_paid: true,
  notes: 'Front tire was flat upon arrival'
)
