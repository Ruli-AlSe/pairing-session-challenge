class CreateStudents < ActiveRecord::Migration[6.1]
  def change
    create_table :students do |t|
      t.string :name, null: false
      t.string :surname, null: false
      t.string :country, null: false

      t.timestamps
    end
  end
end
