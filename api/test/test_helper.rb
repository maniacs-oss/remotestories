ENV['RAILS_ENV'] ||= 'test'
require File.expand_path('../../config/environment', __FILE__)
require 'rails/test_help'
require_relative './support/password_test_helper'

class ActiveSupport::TestCase
  # Setup all fixtures in test/fixtures/*.yml for all tests in alphabetical order.
  fixtures :all

  # Add more helper methods to be used by all tests here...

  def authentication_header(user)
    token = Knock::AuthToken.new(payload: { sub: user.id }).token
    { 'Authorization': "Bearer #{token}" }
  end

  def json_response
    JSON.parse(response.body)
  end

  def entity_ids(collection)
    collection.map { |entity| entity['id'] }
  end
end

ActiveRecord::FixtureSet.context_class.include PasswordTestHelper
