# frozen_string_literal: true

module Api
  module V1
    class StudentsController < ApplicationController
      before_action :set_student, only: %i[update show destroy enroll_to]

      def index
        @students = Student.all
      end

      def create
        @student = Student.new(student_params)
        render json: { message: 'Student was not created' }, status: 500 unless @student.save
      end

      def update
        render json: { message: 'Student was not updated' }, status: 500 unless @student.update(student_params)
      end

      def show
        render json: { message: 'Student not found' }, status: 500 unless @student
      end

      def destroy
        render json: { message: 'Student was not removed' }, status: 500 unless @student.destroy
      end

      def enroll_to
        return unless @student.present?

        @student.enrollments.new(course_id: params[:course_id], year: Date.current.year, is_currently_enrolled: true)
        render json: { message: 'Unsuccessful enrollment' }, status: 500 unless @student.save
      end

      private

      def set_student
        @student = Student.find(params[:id])
      end

      def student_params
        params.permit(:name, :surname, :country)
      end
    end
  end
end
