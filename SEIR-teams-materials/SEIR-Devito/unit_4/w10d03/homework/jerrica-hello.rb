# ================================
#           PEOPLE DATA
# ================================
people = [
  {
     "name"=>"Chase",
     "age"=>"30",
     "home_id"=>"1",
     "home_street"=>"1600 Broadway",
     "home_city"=>"New York",
     "home_state"=>"NY",
     "home_zip_code"=>"10019"
   }
]

people_two = [
    {
        "name"=>"Gert",
        "age"=>"23",
        "home_id"=> "1",
        "home_street"=>"1600 Broadway",
        "home_city"=>"New York",
        "home_state"=>"NY",
        "home_zip_code"=> "10019"
    },
    {
        "name"=>"Alex",
        "age"=>"42",
        "home_id"=> "1",
        "home_street"=>"1600 Broadway",
        "home_city"=>"New York",
        "home_state"=>"NY",
        "home_zip_code"=> "10019"
    },
    {
        "name"=>"Nico",
        "age"=>"61",
        "home_id"=> "1",
        "home_street"=>"1600 Broadway",
        "home_city"=>"New York",
        "home_state"=>"NY",
        "home_zip_code"=> "10019"
    }
]

people_three = [
    {
        "name"=>"Gert",
        "age"=>"23",
        "home_id"=> "1",
        "home_street"=>"1600 Broadway",
        "home_city"=>"New York",
        "home_state"=>"NY",
        "home_zip_code"=> "10019"
    },
    {
        "name"=>"Alex",
        "age"=>"42",
        "home_id"=> "1",
        "home_street"=>"1600 Broadway",
        "home_city"=>"New York",
        "home_state"=>"NY",
        "home_zip_code"=> "10019"
    },
    {
        "name"=>"Nico",
        "age"=>"61",
        "home_id"=> "1",
        "home_street"=>"1600 Broadway",
        "home_city"=>"New York",
        "home_state"=>"NY",
        "home_zip_code"=> "10019"
    },
    {
        "name"=>"Molly",
        "age"=>"55",
        "home_id"=> "2",
        "home_street"=>"1 Alcatraz Island",
        "home_city"=>"San Francisco",
        "home_state"=>"CA",
        "home_zip_code"=> "94133"
    },
    {
        "name"=>"Karolina",
        "age"=>"82",
        "home_id"=> "2",
        "home_street"=>"1 Alcatraz Island",
        "home_city"=>"San Francisco",
        "home_state"=>"CA",
        "home_zip_code"=> "94133"
    }
]
# ================================
#     DATA TRANSFORM 1 PERSON
# ================================
def data_transform person_array
  # get the person hash
  person = person_array.first
  # check if the person has a home_id / belongs to a home
  if person["home_id"]
    # return the transformed person hash
    return {
      "name" => person["name"],
      "age" => person["age"].to_i,
      "home" => {
        "id" => person["home_id"].to_i,
        "street" => person["home_street"],
        "city" => person["home_city"],
        "state" => person["home_state"],
        "zip_code" => person["home_zip_code"].to_i
      }
    }
  # # else if the person does not belong to a home
  else
    # return the hash with just their name/age
    return {
      "name" => person["name"],
      "age" => person["age"]
    }
  end
end

# p data_transform people

# ================================
#     DATA TRANSFORM 2+ PEOPLE
# ================================
def data_transforms people_array
  # define empty people array that we will return at the end
  transformed_people = []
  # loop through the people_array
  for person in people_array do
    # check if the current iteration has a house
    if person["home_id"]
      # reformat the current iteration's hash
      transformed_person = {
        "name" => person["name"],
        "age" => person["age"].to_i,
        "home" => {
          "id" => person["home_id"].to_i,
          "street" => person["home_street"],
          "city" => person["home_city"],
          "state" => person["home_state"],
          "zip_code" => person["home_zip_code"].to_i
        }
      }
    # else if the current iteration doesn't have a house
    else
      # transform the person without a house
      transformed_person = {
        "name" => person["name"],
        "age" => person["age"].to_i,
      }
    end
    # push the transformed person into the transformed people array
    transformed_people << transformed_person
  end
  # return a new people array with the transformed hashes
  return transformed_people
end

# p data_transforms people_two

# ================================
#    DATA TRANSFORM LOCATIONS
# ================================
def data_transforms_locations people
  # define an empty locations array to push transformed home hashes into
  tranformed_locations = []
  # define a current home id variable, default to nil
  current_home_id = nil
  # loop through the people array
  for person in people do
    # check if the current person has a home
    if person["home_id"]
      # check if the current person's home_id != current_home_id
      if person["home_id"] != current_home_id
        # create the new home hash
        home = {
          "id" => person["home_id"].to_i,
          "street" => person["home_street"],
          "city" => person["home_city"],
          "state" => person["home_state"],
          "zip_code" => person["home_zip_code"].to_i,
          "tenants" => []
        }
        # set current_home_id equal to the current person's home id
        current_home_id = person["home_id"]
        # push the home into the transformed locations array
        tranformed_locations << home
      end
      # otherwise assume that the current person belongs to the previously made home
      # transform the person hash
      transformed_person = {
        "name" => person["name"],
        "age" => person["age"].to_i
      }
      # push the current person into the previously made home's tenant array
      home["tenants"] << transformed_person
    # if they don't, do nothing / end if statement
    end
  end
  # return a locations array with the transformed home hashes
  return tranformed_locations
end

p data_transforms_locations people_three
