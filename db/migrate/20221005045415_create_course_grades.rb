class CreateCourseGrades < ActiveRecord::Migration[6.1]
  def change
    create_table :course_grades do |t|
      t.references :student, null: false, foreign_key: true
      t.references :course, null: false, foreign_key: true
      t.float :q1
      t.float :q2
      t.float :q3
      t.float :q4
      t.float :average
      t.string :status

      t.timestamps
    end
  end
end
