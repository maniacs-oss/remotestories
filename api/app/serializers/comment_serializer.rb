class CommentSerializer < ActiveModel::Serializer
  attributes(
    :body,
    :created_at,
    :id,
    :user_id,
  )

  def user_id
    1337
  end
end
