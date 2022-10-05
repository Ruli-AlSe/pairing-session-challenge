# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Student.destroy_all
Course.destroy_all

Student.create(name: 'Raul', surname: 'Almanza', country: 'Mexico')
Student.create(name: 'Judith', surname: 'Frausto', country: 'United States')
Student.create(name: 'Eduardo', surname: 'Vargas', country: 'Madagascar')
Student.create(name: 'Belinda', surname: 'Peregrin', country: 'Espana')

Course.create(name: 'Math', teacher_name:'Teresa Sanchez')
Course.create(name: 'Physics', teacher_name:'Stephen Hawking')
Course.create(name: 'Biology', teacher_name:'Jeffrey Dahmer')
Course.create(name: 'Literature', teacher_name:'Willian Shakespeare')
Course.create(name: 'Object Oriented Programming', teacher_name:'Bjarne Stroustrup')