# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Course, type: :model do
  let(:valid_data) { { name: 'Math', teacher_name: 'John Doe' } }
  let(:invalid_data) { { name: 'HR', teacher_name: 'Li' } }

  describe 'When saving a new course' do
    context 'created with invalid data' do
      let(:course) { Course.create(invalid_data) }

      it 'should not be stored' do
        expect { course.save! }.to raise_error(ActiveRecord::RecordInvalid)
      end
    end

    context 'created with valid data' do
      let(:course) { Course.create!(valid_data) }

      it 'should be stored' do
        expect(course).to be_kind_of(Course)
      end
    end
  end

  describe 'When consulting the students enrolled in a course' do
    let(:course) { Course.create!(valid_data) }

    context 'and course does not have students' do
      it 'should return an empty array' do
        expect(course.enrollments.count).to be(0)
      end
    end

    context 'and course has 2 students enrolled' do
      before(:each) do
        student1 = Student.create!(name: 'Mark', surname: 'Wells', country: 'Russia')
        student2 = Student.create!(name: 'Robert', surname: 'Lee', country: 'United Kingdom')

        course.enrollments.create!(student_id: student1.id)
        course.enrollments.create!(student_id: student2.id)
      end

      it 'should return an array with 2 elements' do
        expect(course.enrollments.count).to be(2)
      end
    end
  end
end
