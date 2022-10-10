class CreateEnrollments < ActiveRecord::Migration[6.1]
  def change
    create_table :enrollments do |t|
      t.references :student, null: false, foreign_key: true, on_delete: :cascade
      t.references :course, null: false, foreign_key: true, on_delete: :cascade
      t.integer :year, null: false
      t.boolean :is_currently_enrolled, default: false, null: false

      t.timestamps
    end
  end
end
