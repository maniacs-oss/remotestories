require 'test_helper'

class StoriesReactionsControllerTest < ActionDispatch::IntegrationTest
  test 'should post create' do
    story = stories(:one)
    kind = 'laugh'

    assert_difference('Reaction.count') do
      post story_reactions_path(story_id: story.id), params: { reaction: { kind: kind } }
    end

    assert_response :success
    assert_equal json_response['kind'], kind
    assert_includes story.reaction_ids, json_response['id']
  end

  test 'should delete destroy' do
    reaction = reactions(:one)
    story = reaction.story

    assert_difference('Reaction.count', -1) do
      delete story_reaction_path(story, reaction)
    end

    assert_response :success
    assert_not_includes story.reaction_ids, reaction.id
  end
end
