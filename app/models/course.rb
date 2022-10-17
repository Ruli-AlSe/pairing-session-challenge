# frozen_string_literal: true

class Course < ApplicationRecord
  has_many :enrollments
  has_many :students, through: :enrollments
  has_many :course_grades

  validates :name, :teacher_name, presence: true, length: { minimum: 3 }, format: { with: /(?<!\S)[a-zA-Z]+(?!\S)/ }

  def students
    enrollments.map do |elem|
      grades = course_grades.where(student_id: elem.student_id).first
      {
        id: elem.student_id,
        student_name: elem.student.to_s,
        q1: grades.q1,
        q2: grades.q2,
        q3: grades.q3,
        q4: grades.q4,
        average: grades.average,
        status: grades.status
      }
    end
  end
end
