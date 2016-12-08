require 'test_helper'

class StoriesControllerTest < ActionDispatch::IntegrationTest
  test 'should get index' do
    get stories_path

    assert_response :success
    assert_not_empty json_response['stories']

    json_story_ids = entity_ids(json_response['stories'])
    story_ids = Story.all.map(&:id)
    assert_equal json_story_ids, story_ids
  end

  test 'should get show' do
    story = stories(:one)
    get story_path story

    assert_response :success
    assert_equal json_response['story']['id'], story.id

    json_comment_ids = entity_ids(json_response['comments'])
    assert_equal json_comment_ids, story.comment_ids
  end

  test 'should post create' do
    user = users(:joe)
    body = 'lorem ipsum'

    assert_difference('Story.count') do
      post stories_path, params: { story: { body: body } }, headers: authentication_header(user)
    end

    story = Story.last

    assert_response :success
    assert_equal json_response['body'], body
    assert_equal json_response['id'], story.id
    assert_equal story.body, body
    assert_equal story.user, user
  end
end
