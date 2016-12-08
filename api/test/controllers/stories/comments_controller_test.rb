require 'test_helper'

class StoriesCommentsControllerTest < ActionDispatch::IntegrationTest
  test 'should post create' do
    user = users(:joe)
    body = 'lorem ipsum'
    story = stories(:one)

    assert_difference('Comment.count') do
      post story_comments_path(story_id: story.id),
           params: { comment: { body: body } },
           headers: authentication_header(user)
    end

    comment = Comment.last

    assert_response :success
    assert_equal json_response['id'], comment.id
    assert_equal json_response['body'], body
    assert_equal json_response['user_id'], user.id
    assert_equal comment.body, body
    assert_equal comment.user, user
    assert_equal comment.story, story
  end
end
