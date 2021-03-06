class Stories::ReactionsController < Stories::BaseController
  before_action :authenticate_user, only: %i(create destroy)

  def create
    reaction = find_story.reactions.create! reaction_params
    render_json reaction
  end

  def destroy
    find_reaction.destroy!
    head :ok
  end

  private

  def find_reaction
    find_story.reactions.find params[:id]
  end

  def reaction_params
    params
      .require(:reaction).permit(:kind)
      .merge(user_id: current_user.id)
  end
end
