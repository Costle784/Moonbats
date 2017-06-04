class CreateWas2016games < ActiveRecord::Migration[5.0]
  def change
    create_table :was2016games do |t|
      t.integer :gamenumber
      t.string :date
      t.string :team
      t.string :opp
      t.string :wl
      t.integer :runs
      t.integer :runsallowed
      t.string :win
      t.string :loss
      t.string :pitch
      t.integer :attendance
    end
  end
end
