class CreateNatsgames < ActiveRecord::Migration[5.0]
  def change
    create_table :natsgames do |t|
      t.string :refdate
      t.string :refdate2
      t.date :date
      t.string :team
      t.string :opponent
      t.boolean :win
      t.integer :runs
      t.integer :runs_allowed
    end
  end
end
