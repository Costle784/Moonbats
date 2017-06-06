class CreateMoonphases < ActiveRecord::Migration[5.0]
  def change
    create_table :moonphases do |t|
      t.datetime :date
      t.integer :phase 
    end
  end
end
