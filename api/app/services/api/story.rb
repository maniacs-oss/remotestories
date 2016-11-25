class Api::Story
  include ActiveModel::Serialization

  attr_accessor :story

  class << self
    def find(id)
      story = Story.find id
      new story
    end
  end

  def initialize(story)
    @story = story
  end

  def comments
    []
  end

  def reactions
    []
  end
end
