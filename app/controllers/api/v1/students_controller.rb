# frozen_string_literal: true

module Api
  module V1
    class StudentsController < ApplicationController
      before_action :set_student, only: %i[update show destroy enroll_to enrollments]

      def index
        @students = Student.all
        render json: @students, status: 200
      end

      def create
        @student = Student.new(student_params)
        if @student.save
          render json: @student.as_json.merge!({ message: 'Student created successfully' }), status: 200
        else
          render json: { message: 'Student was not created' }, status: 400
        end
      end

      def update
        if @student.update(student_params)
          render json: @student.as_json.merge!({ message: 'Student updated successfully' }), status: 200
        else
          render json: { message: 'Student was not updated' }, status: 400
        end
      end

      def show
        if @student
          render json: @student, status: 200
        else
          render json: { message: 'Student not found' }, status: 400
        end
      end

      def destroy
        if @student.destroy
          render json: { message: 'Student removed successfully' }, status: 200
        else
          render json: { message: 'Student was not removed' }, status: 400
        end
      end

      def enroll_to
        return unless @student.present?

        @student.enrollments.new(course_id: params[:course_id], year: Date.current.year, is_currently_enrolled: true)
        if @student.save
          render json: { message: "Student enrolled to #{enrolled_course(@student)}" }, status: 200
        else
          render json: { message: 'Unsuccessful enrollment' }, status: 400
        end
      end

      def enrollments
        if @student
          render json: @student.get_courses, status: 200
        else
          render json: { message: 'Student not found' }, status: 400
        end
      end

      private

      def enrolled_course(student)
        student.enrollments.last.course.name
      end

      def set_student
        @student = Student.find(params[:id])
      end

      def student_params
        params.permit(:name, :surname, :country)
      end
    end
  end
end
