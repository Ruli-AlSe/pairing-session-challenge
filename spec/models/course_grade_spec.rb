# frozen_string_literal: true

require 'rails_helper'

RSpec.describe CourseGrade, type: :model do
  before(:each) do
    Course.create!({ name: 'Math', teacher_name: 'John Doe' })
    Student.create!({ name: 'Raul', surname: 'Almanza', country: 'Japon' })
  end
  let(:student) { Student.first }
  let(:course) { Course.first }
  let(:valid_data) do
    { course_id: course.id, student_id: student.id, q1: 7, q2: 7, q3: 7, q4: 7, average: 7, status: 'pass' }
  end
  let(:invalid_data) { { course_id: 7, student_id: 15, q1: 7, q2: '9', q3: 17, q4: -5, average: 7, status: 'fail' } }

  describe 'When saving a new grade' do
    context 'created with invalid data' do
      let(:grade) { CourseGrade.create(invalid_data) }

      it 'should not be stored' do
        expect { grade.save! }.to raise_error(ActiveRecord::RecordInvalid)
      end
    end

    context 'created with valid data' do
      let(:grade) { CourseGrade.create!(valid_data) }

      it 'should be stored' do
        expect(grade).to be_kind_of(CourseGrade)
      end
    end
  end
end
