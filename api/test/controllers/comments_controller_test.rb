require 'test_helper'

class CommentsControllerTest < ActionDispatch::IntegrationTest
  test 'should post create' do
    story = stories(:one)
    body = 'lorem ipsum'

    assert_difference('Comment.count') do
      post story_comments_path(story_id: story.id), params: { comment: { body: body } }
    end

    assert_response :success
    assert_equal json_response['body'], body
    assert_includes story.comment_ids, json_response['id']
  end
end
