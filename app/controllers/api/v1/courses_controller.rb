class Api::V1::CoursesController < ApplicationController
    def index
        @courses = Course.all
        render json: @courses
    end

    def create
        @course = Course.create!(course_params)
        if(@course) 
            render json: @course
        else
            render json: @course.error
        end
    end

    def update
        @course = Course.find(params[:id])
        if(@course)
            @course.name = params[:name] 
            @course.save!
            render json: @course
        else
            render json: {message: "Course not found"}
        end
    end

    def destroy
        @course = Course.find(params[:id])
        @course&.destroy
        render json: {message: "Course was removed"}
    end

    private

    def course_params
        params.permit(:name)
    end
end