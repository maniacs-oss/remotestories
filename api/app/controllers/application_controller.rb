class ApplicationController < ActionController::API
  include Knock::Authenticable

  def render_json(data)
    render json: data
  end
end
