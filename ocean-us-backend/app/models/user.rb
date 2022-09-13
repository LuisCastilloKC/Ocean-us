class User < ApplicationRecord
    has_many :userroles
    has_many :events
    has_many :cities, through: :events

    # has_secure_password come from Bcryp, this run a few method that are in ApplicationRecord
    has_secure_password
end
