require "rails_helper"

RSpec.describe "routes for Drums" do
  context 'Drums have all standard resourceful routes' do
    it 'routes GET /drums to drums#index' do
      expect(get('/drums')).to route_to(controller: 'drums', action: 'index')
    end

    it 'routes GET /drums/1 to drums#show' do
      expect(get('/drums/1')).to route_to(controller: 'drums', action: 'show', id: '1')
    end

    it 'routes GET /drums/new to drums#new' do
      expect(get('/drums/new')).to route_to(controller: 'drums', action: 'new')
    end

    it 'routes POST /drums to drums#create' do
      expect(post('/drums')).to route_to(controller: 'drums', action: 'create')
    end

    it 'routes DELETE /drums/1 to drums#destroy' do
      expect(delete('/drums/1')).to route_to(controller: 'drums', action: 'destroy', id: '1')
    end

    it 'routes GET /drums/1/edit to drums#edit' do
      expect(get('/drums/1/edit')).to route_to(controller: 'drums', action: 'edit', id: '1')
    end

    it 'routes PUT /drums/1 to drums#update' do
      expect(put('/drums/1')).to route_to(controller: 'drums', action: 'update', id: '1')
    end
  end
end
