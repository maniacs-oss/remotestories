class StoriesController < ApplicationController
  before_action :authenticate_user, only: %i(create)

  def index
    api = Api::Stories.find params.slice(:filter), params[:page]
    render_json api
  end

  def show
    api = Api::Story.find params[:id]
    render_json api
  end

  def create
    story = Story.create! story_params
    render_json story
  end

  private

  def story_params
    params
      .require(:story).permit(:body)
      .merge(user_id: current_user.id)
  end
end
