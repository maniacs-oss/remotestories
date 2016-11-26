require 'test_helper'

class StoriesControllerTest < ActionDispatch::IntegrationTest
  test 'should get index' do
    get stories_path

    assert_response :success
    assert_not_empty json_response['stories']

    json_story_ids = json_response['stories'].map { |story| story['id'] }
    story_ids = [stories(:one), stories(:two)].map(&:id)
    assert_equal json_story_ids, story_ids
  end

  test 'should get show' do
    story = stories(:one)
    get story_path story

    assert_response :success
    assert_equal json_response['story']['id'], story.id

    json_comment_ids = json_response['comments'].map { |comment| comment['id'] }
    comment_ids = [comments(:one)].map(&:id)
    assert_equal json_comment_ids, comment_ids
  end

  test 'should post create' do
    body = 'lorem ipsum'

    assert_difference('Story.count') do
      post stories_path, params: { story: { body: body } }
    end

    assert_response :success
    assert_equal json_response['body'], body
    assert json_response['id']
  end
end
