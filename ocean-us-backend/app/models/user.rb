class User < ApplicationRecord
    has_many :userroles
    has_many :events
    has_many :cities, through: :events
end
