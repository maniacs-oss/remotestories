require 'test_helper'

class StoriesControllerTest < ActionDispatch::IntegrationTest
  test 'should get index' do
    get stories_path

    assert_response :success
    assert_not_empty json_response['stories']

    json_story_ids = json_response['stories'].map { |story| story['id'] }
    stories_by_data_ids = [stories(:two), stories(:one)].map(&:id)
    assert json_story_ids, stories_by_data_ids
  end

  test 'should get show' do
    story = stories(:one)
    get story_path story

    assert_response :success
    assert json_response['story']['id'], story.id
    assert_instance_of Array, json_response['comments']
  end

  test 'should post create' do
    body = 'lorem ipsum'

    assert_difference('Story.count') do
      post stories_path, params: { story: { body: body } }
    end

    assert_response :success
    assert json_response['body'], body
    assert json_response['id']
  end
end
