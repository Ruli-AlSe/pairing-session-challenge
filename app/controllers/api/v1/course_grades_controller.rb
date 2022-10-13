# frozen_string_literal: true

module Api
  module V1
    class CourseGradesController < ApplicationController
      before_action :grade_student, only: %i[update show destroy]

      def create
        @grade = CourseGrades.new(grades_params)
        if @grade.save
          render json: @grade, status: 200
        else
          render json: { message: 'Grades were not created' }, status: 400
        end
      end

      def show
        if @grade
          render json: @grade, status: 200
        else
          render json: { message: 'Grades not found' }, status: 400
        end
      end

      def update
        if @grade.update(grades_params)
          render json: @grade, status: 200
        else
          render json: { message: 'Grades were not updated' }, status: 400
        end
      end

      def destroy
        if @grade.destroy
          render json: { message: 'Grades removed successfully' }, status: 200
        else
          render json: { message: 'Grades were not removed' }, status: 400
        end
      end

      private

      def set_grade
        @grade = CourseGrades.find_by(params[:student_id], params[:course_id])
      end

      def grades_params
        params.permit(:student_id, :course_id, :q1, :q2, :q3, :q4, :average, :status)
      end
    end
  end
end
