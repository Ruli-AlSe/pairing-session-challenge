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

@raul.enrollments.create!(course_id: @math.id)
@raul.course_grades.create!(course_id: @math.id, q1: 10, q2: 10, q3: 0, q4: 0, average: 5, status: "fail" )
@raul.enrollments.create!(course_id: @physics.id)
@raul.course_grades.create!(course_id: @physics.id, q1: 7, q2: 7, q3: 7, q4: 7, average: 7, status: "pass" )
@raul.enrollments.create!(course_id: @oop.id)
@raul.course_grades.create!(course_id: @oop.id, q1: 5, q2: 8, q3: 8, q4: 5, average: 6.5, status: "fail" )
@raul.enrollments.create!(course_id: @mkt.id)
@raul.course_grades.create!(course_id: @mkt.id, q1: 9, q2: 9, q3: 8, q4: 7, average: 8.25, status: "pass" )

@judith.enrollments.create!(course_id: @biology.id)
@judith.course_grades.create!(course_id: @biology.id, q1: 7, q2: 7, q3: 7, q4: 7, average: 7, status: "pass" )
@judith.enrollments.create!(course_id: @math.id)
@judith.course_grades.create!(course_id: @math.id, q1: 9, q2: 9, q3: 7, q4: 7, average: 8, status: "pass" )
@judith.enrollments.create!(course_id: @mkt.id)
@judith.course_grades.create!(course_id: @mkt.id, q1: 5, q2: 5, q3: 5, q4: 7, average: 5.5, status: "fail" )

@eduardo.enrollments.create!(course_id: @oop.id)
@eduardo.course_grades.create!(course_id: @oop.id, q1: 7, q2: 7, q3: 7, q4: 7, average: 7, status: "pass" )
@eduardo.enrollments.create!(course_id: @literature.id)
@eduardo.course_grades.create!(course_id: @literature.id, q1: 5, q2: 5, q3: 4, q4: 4, average: 4.5, status: "fail" )