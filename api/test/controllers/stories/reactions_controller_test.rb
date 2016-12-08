require 'test_helper'

class StoriesReactionsControllerTest < ActionDispatch::IntegrationTest
  test 'should post create' do
    kind = 'laugh'
    user = users(:jane)
    story = stories(:one)

    assert_difference('Reaction.count') do
      post story_reactions_path(story_id: story.id),
           params: { reaction: { kind: kind } },
           headers: authentication_header(user)
    end

    reaction = Reaction.last

    assert_response :success
    assert_equal json_response['id'], reaction.id
    assert_equal json_response['kind'], kind
    assert_equal reaction.kind, kind
    assert_includes story.reactions, reaction
    assert_includes user.reactions, reaction
  end

  test 'should delete destroy' do
    story = stories(:one)
    reaction = story.reactions.first
    user = reaction.user

    assert_difference('Reaction.count', -1) do
      delete story_reaction_path(story, reaction),
             headers: authentication_header(user)
    end

    assert_response :success
    assert_not_includes story.reactions, reaction
    assert_not_includes user.reactions, reaction
  end
end
