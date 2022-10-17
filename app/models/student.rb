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

  def courses
    enrollments.map do |elem|
      grades = course_grades.where(course_id: elem.course_id).first
      { 
        id: elem.course_id, 
        course_name: elem.course.name, 
        teacher_name: elem.course.teacher_name,
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
