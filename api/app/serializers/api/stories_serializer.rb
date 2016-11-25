class Api::StoriesSerializer < ActiveModel::Serializer
  has_many :reactions
  has_many :stories
  has_one :meta
end
