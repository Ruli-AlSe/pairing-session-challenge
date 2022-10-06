class Api::V1::StudentsController < ApplicationController
  before_action :set_student, only: [:update, :show, :destroy, :enroll_to]

  def index
   @students = Student.all
  end

  def create
    @student = Student.new(student_params)
    unless @student.save
      render json: { message: "Student was not created" }, status: 500 
    end
  end

  def update
    unless @student.update(student_params)
      render json: { message: "Student was not updated" }, status: 500
    end
  end

  def show
    unless @student
      render json: { message: "Student not found" }, status: 500
    end
  end

  def destroy
    unless @student.destroy
      render json: { message: "Student was not removed" }, status: 500
    end
  end

  def enroll_to
    if @student.present?
      @student.enrollments.new(course_id: params[:course_id], year: Date.current.year, is_currently_enrolled: true)
      unless @student.save
        render json: { message: "Unsuccessful enrollment" }, status: 500 
      end
    end
  end

  private

  def set_student
    @student = Student.find(params[:id])
  end

  def student_params
    params.permit(:name, :surname, :country)
  end
end
