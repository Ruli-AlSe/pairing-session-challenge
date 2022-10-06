class Api::V1::CourseGradesController < ApplicationController
  def index
    @grades = CourseGrades.all
  end

  def create
    @grade = CourseGrades.new(grades_params)
    unless @grade.save
      render json: { message: "Grades were not created" }, status: 500
    end
  end

  def update
    @grade = CourseGrades.find(params[:id])
    unless @grade.update(grades_params)
      render json: { message: "Grades were not updated" }, status: 500
    end
  end

  private

  def grades_params
    params.permit(:q1, :q2, :q3, :q4, :average, :status)
  end
end
