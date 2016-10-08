class ApplicationController < ActionController::API
  def render_json(data)
    render json: data
  end
end
