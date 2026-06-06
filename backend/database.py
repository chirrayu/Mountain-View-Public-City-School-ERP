import pymongo
myclient = pymongo.MongoClient("mongodb+srv://chirrayusharma_db_user:VcPS2u4fUmyUxVg9@cluster0.tgfo74x.mongodb.net/")
mydb = myclient["ERP"]

# Collections for different entities
users_collection = mydb["Users"]
students_collection = mydb["Students"]
parents_collection = mydb["Parents"]
teachers_collection = mydb["Teachers"]
staff_collection = mydb["Staff"]
classes_collection = mydb["Classes"]
subjects_collection = mydb["Subjects"]
attendance_collection = mydb["Attendance"]
exams_collection = mydb["Exams"]
results_collection = mydb["Results"]
fees_payments_collection = mydb["FeesPayments"]
assignments_collection = mydb["Assignments"]
announcements_collection = mydb["Announcements"]
library_books_collection = mydb["LibraryBooks"]
transport_routes_collection = mydb["TransportRoutes"]
inventory_collection = mydb["Inventory"]
payroll_collection = mydb["Payroll"]

