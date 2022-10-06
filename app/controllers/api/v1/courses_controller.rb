class Api::V1::CoursesController < ApplicationController
  before_action :set_course, only: [:update, :destroy]

  def index
    @courses = Course.all
  end

  def create
    @course = Course.new(course_params)
    unless @course.save
      render json: { message: "Course was not created" }, status: 500 
    end
  end

  def update
    unless @course.update(course_params)
      render json: { message: "Course was not updated" }, status: 500 
    end
  end

  def destroy
    unless @course.destroy
      render json: { message: "Course was not removed" }, status: 500 
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