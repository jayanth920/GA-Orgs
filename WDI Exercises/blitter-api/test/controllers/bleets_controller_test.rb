require 'test_helper'

class BleetsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @bleet = bleets(:one)
  end

  test "should get index" do
    get bleets_url, as: :json
    assert_response :success
  end

  test "should create bleet" do
    assert_difference('Bleet.count') do
      post bleets_url, params: { bleet: { content: @bleet.content, likes: @bleet.likes } }, as: :json
    end

    assert_response 201
  end

  test "should show bleet" do
    get bleet_url(@bleet), as: :json
    assert_response :success
  end

  test "should update bleet" do
    patch bleet_url(@bleet), params: { bleet: { content: @bleet.content, likes: @bleet.likes } }, as: :json
    assert_response 200
  end

  test "should destroy bleet" do
    assert_difference('Bleet.count', -1) do
      delete bleet_url(@bleet), as: :json
    end

    assert_response 204
  end
end
