# frozen_string_literal: true

class Student < ApplicationRecord
  has_many :enrollments
  has_many :course_grades
  has_many :courses, through: :enrollments

  validates :name, :surname, :country, presence: true, length: { minimum: 2 },
                                       format: { with: /(?<!\S)[a-zA-Z]+(?!\S)/ }

  def to_s
    "#{name} #{surname}"
  end

  def get_courses
    enrollments.map do |elem|
      { id: elem.course_id, course_name: elem.course.name, teacher_name: elem.course.teacher_name,
        is_active: elem.is_currently_enrolled }
    end
  end
end
