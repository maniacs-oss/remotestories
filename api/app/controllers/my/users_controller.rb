class My::UsersController < ApplicationController
  before_action :authenticate_user, only: %i(show)

  def show
    render_json current_user
  end

  def create
    user = User.create password: params[:password]
    render_json user
  end
end
