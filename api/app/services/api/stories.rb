class Api::Stories
  include ActiveModel::Serialization

  attr_accessor :stories, :meta

  class << self
    def find(filters, page)
      search = Stories::Search.new(filters: filters, page: page)
      search_meta = { page: search.page, total_pages: search.total_pages }

      new search.results, search_meta
    end
  end

  def initialize(stories, meta)
    @stories = stories
    @meta = meta
  end

  def reactions
    []
  end
end
