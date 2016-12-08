require 'test_helper'

class My::UserControllerTest < ActionDispatch::IntegrationTest
  test 'should get show' do
    user = users(:joe)

    get my_users_path, headers: authentication_header(user)

    assert_response :success
    assert_equal json_response['id'], user.id
    assert_equal json_response['reaction_ids'], user.reaction_ids
  end

  test 'should post create' do
    password = 'password'

    assert_difference('User.count') do
      post my_users_path, params: { password: password }
    end

    user = User.last

    assert_response :success
    assert_equal json_response['id'], user.id
    assert_equal json_response['reaction_ids'], []
  end
end
