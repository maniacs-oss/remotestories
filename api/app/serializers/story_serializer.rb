class StorySerializer < ActiveModel::Serializer
  attributes(
    :body,
    :created_at,
    :id,
  )
end
