Pairing Session Challenge

We want to create a grades’ system where only some registered admin users can access it and handle the CRUD of students, courses, and regarding a specific student, the CRUD of its grades as well.

A student should have at least 2 fields for identifying it, and a course at least one.

A student can take more than one course at a time

We only want to authorize access to the system to some registered users.

Notes:
A course is year-long and is evaluated per year quarters, that is, the student will be examined on the course four times, (Quarter1, Quarter2, Quarter3 and Quarter4)A student can’t have more than one grade per course per quarterA grade is a number that could go from 0 to 10.We want to have a field saved in our DB that indicate us whether a grade has been “passed” or “failed” (0 -5: failed, 6-10: passed)You are free to assume everything that is not explained here.


Frontend
List of all students
List of a student’ grades, per quarter. Indicate whether it’s passed or failed.
List of all courses
List of a course’ students
Forms to create students, courses and gradesLogin/sign in form to access systemAbility to sign out

Nice to have
Complete CRUD of students, CRUD of courses, CRUD of grades, and authorizationAdd list of a student’ courses and an indication whether the average of the year-long course grades has been passed or failedError handlingUnit/integration testsi18nGenerate, save, and use secret key for JWT encoding if applicable