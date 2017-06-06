class Team < ApplicationRecord
  has_many :currentgames
  has_many :pastgames
end
