class CommentSerializer < ActiveModel::Serializer
  attributes(
    :body,
    :created_at,
    :id,
  )
end
