class CreateGames < ActiveRecord::Migration[5.0]
  def change
    create_table :games do |t|
      t.references :team, index: true, foreign_key: true
      t.date :date
      t.string :opp
      t.string :wl
    end
  end
end
