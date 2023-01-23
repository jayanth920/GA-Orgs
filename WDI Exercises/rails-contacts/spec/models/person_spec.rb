require 'spec_helper'

describe Person do
  describe :find_all_with_email_domain do
    before do
      # create 3 people, only one of which has the yahoo.com domain name
      @john = Person.create({ first_name: 'John', last_name: 'Doe', email: 'john.doe@gmail.com', domain_name: 'gmail.com' })
      @jane = Person.create({ first_name: 'Jane', last_name: 'Doe', email: 'jane.doe@yahoo.com', domain_name: 'yahoo.com' })
      @mary = Person.create({ first_name: 'Mary', last_name: 'Jane', email: 'mary.jane@gmail.com', domain_name: 'gmail.com' })
    end

    context 'given a domain name' do
      it 'should return an active record relation' do
        expect(Person.find_all_with_email_domain('yahoo.com')).to be_an(ActiveRecord::Relation)
      end

      it 'should return only the people with emails in that domain' do
        expect(Person.find_all_with_email_domain('yahoo.com')).to include(@jane)
      end
    end

    context 'given \'All\'' do
      it 'should return all people' do
        expect(Person.find_all_with_email_domain('All')).to include(@john, @jane, @mary)
      end
    end

    context 'given nil' do
      it 'should return an empty collection' do
        expect(Person.find_all_with_email_domain(nil)).to eq([])
      end
    end
  end

  describe :all_email_domains do
    context 'when there are people in the database' do
      before do
        @john = Person.create({ first_name: 'John', last_name: 'Doe', email: 'john.doe@gmail.com', domain_name: 'gmail.com' })
        @jane = Person.create({ first_name: 'Jane', last_name: 'Doe', email: 'jane.doe@yahoo.com', domain_name: 'yahoo.com' })
      end

      it 'should return the domains for those people' do
        expect(Person.all_email_domains).to include('yahoo.com', 'gmail.com')
      end
    end

    context 'when there are no people in the database' do
      it 'should return no domain names' do
        expect(Person.all_email_domains).to eq([])
      end
    end
  end

  describe :generate_domain_name do
    context 'each person without a domain name ' do
      before do
        @jill = Person.create({ first_name: 'Jill', last_name: 'Jane', email: 'jill.jane@gmail.com', domain_name: nil })
      end

      xit 'has a method that will add a domain name after saving' do
        expect(@jill.generate_domain_name).to eq("gmail.com")
      end

      xit 'has a domain name' do
        expect(@jill.domain_name).to_not eq(nil)
      end
    end
  end

  describe :sanitize_email do
    context 'whenever a person enters or updates their email' do
      before do
        @jake = Person.create({ first_name: 'Jake', last_name: 'Huge', email: 'hugeJ@GmAil.com', domain_name: nil })
      end

      xit 'has a sanitized stored email' do
        expect(@jake.email).to eq('hugej@gmail.com')
      end
    end
  end
end
