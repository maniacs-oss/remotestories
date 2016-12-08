class User < ApplicationRecord
  has_secure_password

  has_many :stories, dependent: :destroy
  has_many :comments, dependent: :destroy
  has_many :reactions, dependent: :destroy

  class << self
    def from_token_request(request)
      id = request.params['auth'] && request.params['auth']['id']
      find id
    end
  end
end
