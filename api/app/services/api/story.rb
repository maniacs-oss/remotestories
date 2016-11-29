class Api::Story
  include ActiveModel::Serialization

  attr_accessor :story

  delegate :reactions, to: :story

  class << self
    def find(id)
      story = Story.with_preloads.find id
      new story
    end
  end

  def initialize(story)
    @story = story
  end

  def comments
    story
      .comments
      .by_date
  end
end
