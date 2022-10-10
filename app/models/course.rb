# frozen_string_literal: true

class Course < ApplicationRecord
  has_many :enrollments
  has_many :students, through: :enrollments
  has_many :course_grades

  validates :name, :teacher_name, presence: true, length: { minimum: 3 }, format: { with: /(?<!\S)[a-zA-Z]+(?!\S)/ }

  def students
    enrollments.map do |elem|
      { id: elem.student_id, student_name: elem.student.to_s }
    end
  end
end
