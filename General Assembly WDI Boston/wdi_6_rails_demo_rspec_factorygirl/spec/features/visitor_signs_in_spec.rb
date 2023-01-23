require 'spec_helper'

feature 'Visitor signs in' do
  background do
    @user = create(:user)
    visit root_path
  end

  scenario 'successfully' do
    fill_in 'Email', with: @user.email
    fill_in 'Password', with: @user.password
    click_button 'Sign in'

    expect(page).to have_content "Signed in as #{@user.email}"
    expect(page).to have_link 'Sign out'
  end

  scenario 'unsuccessfully with invalid credentials' do
    fill_in 'Email', with: @user.email
    fill_in 'Password', with: 'wrongpassword'
    click_button 'Sign in'

    expect(page).to have_content 'Invalid email or password'
    expect(page).to_not have_content 'Signed in'
  end
end
