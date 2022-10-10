# frozen_string_literal: true

class CourseGrade < ApplicationRecord
  belongs_to :course
  belongs_to :student

  validates :q1, :q2, :q3, :q4, presence: true, numericality: true, length: { in: 0..10 }
  validates :status, presence: true, inclusion: { in: %w[fail pass] }
end
