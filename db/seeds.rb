# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

@raul = Student.create!(name: 'Raul', surname: 'Almanza', country: 'Mexico')
@judith = Student.create!(name: 'Judith', surname: 'Frausto', country: 'United States')
@eduardo = Student.create!(name: 'Eduardo', surname: 'Vargas', country: 'Madagascar')
@belinda = Student.create!(name: 'Belinda', surname: 'Peregrin', country: 'Espana')

@math = Course.create!(name: 'Math', teacher_name:'Teresa Sanchez')
@physics = Course.create!(name: 'Physics', teacher_name:'Stephen Hawking')
@biology = Course.create!(name: 'Biology', teacher_name:'Jeffrey Dahmer')
@literature = Course.create!(name: 'Literature', teacher_name:'Willian Shakespeare')
@oop = Course.create!(name: 'Object Oriented Programming', teacher_name:'Bjarne Stroustrup')
@mkt = Course.create!(name: 'Marketing fundamentals', teacher_name:'Teresa Sanchez')
@english = Course.create!(name: 'English', teacher_name:'Holly Hernandez')

@raul.enrollments.create!(course_id: @math.id, year: 2022, is_currently_enrolled: true)
@raul.enrollments.create!(course_id: @physics.id, year: 2020, is_currently_enrolled: false)
@raul.enrollments.create!(course_id: @math.id, year: 2018, is_currently_enrolled: false)
@raul.enrollments.create!(course_id: @mkt.id, year: 2022, is_currently_enrolled: true)