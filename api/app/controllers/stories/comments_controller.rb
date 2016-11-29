class Stories::CommentsController < Stories::BaseController
  def create
    comment = find_story.comments.create! comment_params
    render_json comment
  end

  private

  def comment_params
    params.require(:comment).permit(:body)
  end
end
