# frozen_string_literal: true

module Api
  module V1
    class CoursesController < ApplicationController
      before_action :set_course, only: %i[update destroy]

      def index
        @courses = Course.all
        render json: @courses, status: 200
      end

      def create
        @course = Course.new(course_params)
        if @course.save
          render json: @course.as_json.merge!({ message: 'Course created successfully' }), status: 200
        else
          render json: { message: 'Course was not created' }, status: 500
        end
      end

      def update
        if @course.update(course_params)
          render json: @course.as_json.merge!({ message: 'Course updated successfully' }), status: 200
        else
          render json: { message: 'Course was not updated' }, status: 500
        end
      end

      def destroy
        if @course.destroy
          render json: { message: 'Course was removed successfully' }, status: 200
        else
          render json: { message: 'Course was not removed' }, status: 500
        end
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
