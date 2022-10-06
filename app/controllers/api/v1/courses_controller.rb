# frozen_string_literal: true

module Api
  module V1
    class CoursesController < ApplicationController
      before_action :set_course, only: %i[update destroy]

      def index
        @courses = Course.all
      end

      def create
        @course = Course.new(course_params)
        render json: { message: 'Course was not created' }, status: 500 unless @course.save
      end

      def update
        render json: { message: 'Course was not updated' }, status: 500 unless @course.update(course_params)
      end

      def destroy
        render json: { message: 'Course was not removed' }, status: 500 unless @course.destroy
      end

      private

      def set_course
        @course = Course.find(params[:id])
      end

      def course_params
        params.permit(:name, :teacher_name)
      end
    end
  end
end
