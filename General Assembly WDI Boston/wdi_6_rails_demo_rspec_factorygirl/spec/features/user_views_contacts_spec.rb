require 'spec_helper'

feature 'User views their contacts' do
  scenario 'sorted by last name' do
    user = create(:user)
    create(:contact, last_name: 'Aardvark', user: user)
    create(:contact, last_name: 'Zoidberg', user: user)
    create(:contact, last_name: 'Obama', user: user)
    create(:contact, last_name: 'Jerkface')

    sign_in_as(user)

    expect(page).to have_content(
      /Aardvark.*Obama.*Zoidberg/
    )
    expect(page).to_not have_content 'Jerkface'
  end
end
