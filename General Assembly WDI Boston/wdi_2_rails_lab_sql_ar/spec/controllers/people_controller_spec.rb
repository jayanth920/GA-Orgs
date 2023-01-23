require 'rails_helper'

RSpec.describe PeopleController do

  # This is just to clean things up before each test
  before(:each) { Person.destroy_all }

  describe "GET index" do
    it "assigns @people" do
      person = Person.create
      get :index
      expect(assigns(:people)).to eq([person])
    end
  end


  describe "GET show" do
    it "assigns @person" do
      person = Person.create
      get :show, id: person.id
      expect(assigns(:person)).to eq(person)
    end
  end

  describe "POST create" do
    it "assigns @person" do
      person = Person.new(first_name: 'Ada', last_name: 'Lovelace', age: 29)

      expect{
        post :create, person: {first_name: person.first_name, last_name: person.last_name, age: person.age}
      }.to change(Person, :count).by(1)

      expect(assigns(:person).first_name).to eq(person.first_name)
      expect(assigns(:person).last_name).to eq(person.last_name)
      expect(assigns(:person).age).to eq(person.age)
    end
  end

  describe 'PUT update' do
    it "changes person's attributes" do
      person = Person.create(first_name: 'Charles', last_name: 'Babbage', age: 79)
      put :update, id: person.id,
        person: {first_name: 'Charley', last_name: 'Babbs', age: 20}
      person.reload
      expect(person.first_name).to eq('Charley')
      expect(person.last_name).to eq('Babbs')
      expect(person.age).to eq(20)
    end
  end

  describe 'DELETE destroy' do
    it 'deletes a person based on their id' do
      person = Person.create(first_name: 'Charles', last_name: 'Babbage', age: 79)
      expect { delete :destroy, id: person.id }.to change(Person, :count).by(-1)
    end
  end
end
