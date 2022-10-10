class CreateCourseGrades < ActiveRecord::Migration[6.1]
  def change
    create_table :course_grades do |t|
      t.references :course, null: false, foreign_key: true, on_delete: :cascade
      t.references :student, null: false, foreign_key: true, on_delete: :cascade
      t.float :q1, default: 0
      t.float :q2, default: 0
      t.float :q3, default: 0
      t.float :q4, default: 0
      t.float :average, default: 0
      t.string :status, default: 'fail'

      t.timestamps
    end
  end
end
