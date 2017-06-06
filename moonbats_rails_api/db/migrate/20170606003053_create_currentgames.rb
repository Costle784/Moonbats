class CreateCurrentgames < ActiveRecord::Migration[5.0]
  def change
    create_table :currentgames do |t|
      t.references :team, index: true, foreign_key: true
      t.datetime :date
      t.string :team
      t.string :opp
      t.string :wl
      t.integer :runs
      t.integer :runs_allowed
    end
  end
end
