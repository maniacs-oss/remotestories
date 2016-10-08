class StoriesController < ApplicationController
  def index
    stories = Story.all.by_date
    render_json stories: stories
  end

  def show
    story = find_story
    render_json story: story, comments: []
  end

  private

  def find_story
    Story.find params[:id]
  end
end
