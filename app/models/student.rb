class Student < ApplicationRecord
    has_many :enrollments
    has_many :courses, through: :enrollments
    
    validates :name, :surname, :country, presence: true, length: { minimum: 2 }, format: { with: /(?<!\S)[a-zA-Z]+(?!\S)/ }

    def to_s
        "#{name} #{surname}"
    end
end
