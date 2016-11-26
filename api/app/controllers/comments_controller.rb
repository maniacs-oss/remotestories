class CommentsController < ApplicationController
  def create
    comment = find_story.comments.create! comment_params
    render_json comment
  end

  private

  def find_story
    Story.find params[:story_id]
  end

  def comment_params
    params.require(:comment).permit(:body)
  end
end
