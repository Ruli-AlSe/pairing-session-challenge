class CreateEnrollments < ActiveRecord::Migration[6.1]
  def change
    create_table :enrollments do |t|
      t.references :student, null: false, foreign_key: true, on_delete: :cascade
      t.references :course, null: false, foreign_key: true, on_delete: :cascade

      t.timestamps
    end
  end
end
