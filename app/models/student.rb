class Student < ApplicationRecord
    has_many :enrollments
    has_many :students, through: :enrollments
    has_many :course_grades
    has_many :students, through: :course_grades
end
