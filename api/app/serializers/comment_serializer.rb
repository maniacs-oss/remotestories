class CommentSerializer < ActiveModel::Serializer
  attributes(
    :body,
    :created_at,
    :id,
    :user_id,
  )
end
