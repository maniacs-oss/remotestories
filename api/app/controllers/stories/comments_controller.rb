class Stories::CommentsController < Stories::BaseController
  before_action :authenticate_user, only: %i(create)

  def create
    comment = find_story.comments.create! comment_params
    render_json comment
  end

  private

  def comment_params
    params
      .require(:comment).permit(:body)
      .merge(user_id: current_user.id)
  end
end
