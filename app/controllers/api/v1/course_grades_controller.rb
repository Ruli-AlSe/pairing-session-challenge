# frozen_string_literal: true

module Api
  module V1
    class CourseGradesController < ApplicationController
      def index
        @grades = CourseGrades.all
      end

      def create
        @grade = CourseGrades.new(grades_params)
        render json: { message: 'Grades were not created' }, status: 500 unless @grade.save
      end

      def update
        @grade = CourseGrades.find(params[:id])
        render json: { message: 'Grades were not updated' }, status: 500 unless @grade.update(grades_params)
      end

      private

      def grades_params
        params.permit(:q1, :q2, :q3, :q4, :average, :status)
      end
    end
  end
end
