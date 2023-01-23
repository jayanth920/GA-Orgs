require 'rails_helper'

RSpec.describe 'routes for Guitars' do
  context 'Guitars only have index and show routes and actions' do
    describe 'Routes that guitars should have' do
      it 'routes /guitars to guitars#index' do
        expect(get('/guitars')).to route_to(controller: 'guitars', action: 'index')
      end

      it 'routes /guitars/1 to guitars#show' do
        expect(get('/guitars/1')).to route_to(controller: 'guitars', action: 'show', id: '1')
      end
    end

    # These test are a little artificial, and you wouldn't actually test this
    describe 'Routes that guitars should not have' do
      it 'does not have a route for DELETE /guitars/1' do
        expect(delete('/guitars/1')).not_to be_routable
      end

      it 'does not have a route for PUT /guitars/1' do
        expect(put('/guitars/1')).not_to be_routable
      end

      it 'does not have a route for POST /guitars' do
        expect(post('/guitars')).not_to be_routable
      end

      it 'does not have a route for GET /guitars/1/edit' do
        expect(get('/guitars/1/edit')).not_to be_routable
      end
    end
  end
end
