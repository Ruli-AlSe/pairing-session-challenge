# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Student, type: :model do
  let!(:valid_data) { { name: 'Raul', surname: 'Almanza', country: 'Japon' } }
  let!(:invalid_data) { { name: 'Raul35446', surname: 'Almanza 45', country: 'Japon 316' } }

  describe 'When saving a new student' do
    context 'created with invalid data' do
      let!(:student) { Student.create(invalid_data) }

      it 'student should not be stored' do
        expect { student.save! }.to raise_error(ActiveRecord::RecordInvalid)
      end
    end

    context 'created with valid data' do
      let!(:student) { Student.create!(valid_data) }

      it 'student should be stored' do
        expect(student).to be_kind_of(Student)
      end
    end
  end

  describe 'When consulting the courses of a student' do
    let(:student) { Student.create!(valid_data) }

    context 'and student is not enrolled to any course' do
      it 'should return an empty array' do
        expect(student.enrollments.count).to be(0)
      end
    end

    context 'and student is enrolled 2 courses' do
      before(:each) do
        course1 = Course.create!(name: 'Math', teacher_name: 'John Doe')
        course2 = Course.create!(name: 'Biology', teacher_name: 'Mark Doe')

        student.enrollments.create!(course_id: course1.id)
        student.enrollments.create!(course_id: course2.id)
      end

      it 'should return an array with 2 elements' do
        expect(student.enrollments.count).to be(2)
      end
    end
  end
end
