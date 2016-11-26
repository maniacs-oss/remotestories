class StorySerializer < ActiveModel::Serializer
  attributes(
    :body,
    :comment_ids,
    :created_at,
    :id,
    :reaction_ids,
  )

  def reaction_ids
    []
  end
end
