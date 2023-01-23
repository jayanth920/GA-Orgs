# frozen_string_literal: true

require 'csv'
require_relative 'date_generator'

name_count = ARGV.empty? ? 1219 : ARGV[0].to_i

date_gen = DateGenerator.new(1940)

surnames = []

# move into the data directoy
Dir.chdir(File.dirname(__FILE__))

File.open('census/surname.txt') do |file|
  file.each_with_index do |line, index|
    surnames << line.split.first.capitalize if index < name_count
  end
end

gender_neutral = %w[Blaine Chris Dana Pat Taylor]

people = []

File.open('census/female.txt') do |file|
  file.each_with_index do |line, index|
    given_name = line.split.first.capitalize
    gender = gender_neutral.include?(given_name) ? 'o' : 'f'
    next if index > name_count
    people << {
      given_name: given_name,
      gender: gender
    }
  end
end

File.open('census/male.txt') do |file|
  file.each_with_index do |line, index|
    given_name = line.split.first.capitalize
    gender = gender_neutral.include?(given_name) ? 'o' : 'm'
    next if index > name_count
    people << {
      given_name: given_name,
      gender: gender
    }
  end
end

CSV.open('people.csv', 'wb',
         write_headers: true,
         headers: %w[surname given_name gender dob]) do |csv|
           1.upto(people.length).each do ||
             person = people.sample
             csv << [
               surnames.sample,
               person[:given_name],
               person[:gender],
               date_gen.random_date_string
             ]
           end
         end
