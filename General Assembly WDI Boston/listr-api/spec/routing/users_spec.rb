# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'routes for users' do
  it 'routes POST /sign-up to the users#signup action' do
    expect(post('/sign-up')).to route_to('users#signup')
  end

  it 'routes POST /sign-in to the users#signin action' do
    expect(post('/sign-in')).to route_to('users#signin')
  end

  it 'routes DELETE /sign-out/ to the users#signout action' do
    expect(delete('/sign-out')).to route_to(
      controller: 'users',
      action: 'signout'
    )
  end

  it 'routes PATCH /change-password/ to the users#changepw action' do
    expect(patch('/change-password')).to route_to(
      controller: 'users',
      action: 'changepw'
    )
  end

  it 'routes GET /users to the users#index action' do
    expect(get('/users')).to route_to('users#index')
  end

  it 'routes GET /users/:id to the users#show action' do
    expect(get('/users/1')).to route_to(
      controller: 'users',
      action: 'show',
      id: '1'
    )
  end
end
