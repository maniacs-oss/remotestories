class UserSerializer < ActiveModel::Serializer
  attributes(
    :id,
    :reaction_ids,
  )
end
