class Stories::BaseController < ApplicationController
  private

  def find_story
    Story.find params[:story_id]
  end
end
