import pymongo
from datetime import datetime

# ==========================================
# MongoDB Connection
# ==========================================

MONGO_URI = "mongodb+srv://chirrayusharma_db_user:tCoZrBxhOs99AesQ@erp.kabrznt.mongodb.net/"

try:
    client = pymongo.MongoClient(
        MONGO_URI,
        serverSelectionTimeoutMS=5000
    )

    client.server_info()
    print("✅ Connected to MongoDB")

except Exception as e:
    print("❌ MongoDB Connection Failed")
    print(e)
    exit()

db = client["ERP"]

# ==========================================
# Collections
# ==========================================

users = db["Users"]
students = db["Students"]
parents = db["Parents"]
teachers = db["Teachers"]
staff = db["Staff"]
classes = db["Classes"]
subjects = db["Subjects"]
attendance = db["Attendance"]
exams = db["Exams"]
results = db["Results"]
fees_payments = db["FeesPayments"]
assignments = db["Assignments"]
announcements = db["Announcements"]
library_books = db["LibraryBooks"]
transport_routes = db["TransportRoutes"]
inventory = db["Inventory"]
payroll = db["Payroll"]

# ==========================================
# Clear Existing Data
# ==========================================

print("🧹 Clearing existing data...")

collections = [
    users,
    students,
    parents,
    teachers,
    staff,
    classes,
    subjects,
    attendance,
    exams,
    results,
    fees_payments,
    assignments,
    announcements,
    library_books,
    transport_routes,
    inventory,
    payroll
]

for collection in collections:
    collection.delete_many({})

# ==========================================
# Users
# ==========================================

admin_user_id = users.insert_one({
    "name": "System Admin",
    "email": "admin@mvps.edu",
    "password": "admin123",
    "role": "admin"
}).inserted_id

teacher_user_id = users.insert_one({
    "name": "Raj Sharma",
    "email": "raj@mvps.edu",
    "password": "teacher123",
    "role": "teacher"
}).inserted_id

student_user_id = users.insert_one({
    "name": "Aarav Singh",
    "email": "aarav@mvps.edu",
    "password": "student123",
    "role": "student"
}).inserted_id

parent_user_id = users.insert_one({
    "name": "Sunita Singh",
    "email": "sunita@mvps.edu",
    "password": "parent123",
    "role": "parent"
}).inserted_id

# ==========================================
# Parent
# ==========================================

parent_id = parents.insert_one({
    "user_id": parent_user_id,
    "phone": "9876543210",
    "address": "Dehradun"
}).inserted_id

# ==========================================
# Teacher
# ==========================================

teacher_id = teachers.insert_one({
    "user_id": teacher_user_id,
    "designation": "Physics Teacher",
    "experience": 5
}).inserted_id

# ==========================================
# Class
# ==========================================

class_id = classes.insert_one({
    "name": "10-A",
    "class_teacher": teacher_id
}).inserted_id

# ==========================================
# Subjects
# ==========================================

physics_id = subjects.insert_one({
    "name": "Physics",
    "teacher_id": teacher_id,
    "class_id": class_id
}).inserted_id

maths_id = subjects.insert_one({
    "name": "Mathematics",
    "teacher_id": teacher_id,
    "class_id": class_id
}).inserted_id

# ==========================================
# Student
# ==========================================

student_id = students.insert_one({
    "user_id": student_user_id,
    "roll_no": "10A001",
    "class_id": class_id,
    "parent_id": parent_id
}).inserted_id

# ==========================================
# Attendance
# ==========================================

attendance.insert_one({
    "student_id": student_id,
    "date": datetime.now(),
    "status": "Present"
})

# ==========================================
# Exam
# ==========================================

exam_id = exams.insert_one({
    "title": "Mid Term Examination",
    "class_id": class_id,
    "date": datetime.now()
}).inserted_id

# ==========================================
# Result
# ==========================================

results.insert_one({
    "student_id": student_id,
    "exam_id": exam_id,
    "subject_id": physics_id,
    "marks": 88
})

# ==========================================
# Fees
# ==========================================

fees_payments.insert_one({
    "student_id": student_id,
    "amount": 25000,
    "status": "Paid",
    "paid_on": datetime.now()
})

# ==========================================
# Assignment
# ==========================================

assignments.insert_one({
    "title": "Newton's Laws Assignment",
    "teacher_id": teacher_id,
    "subject_id": physics_id,
    "due_date": datetime.now()
})

# ==========================================
# Announcement
# ==========================================

announcements.insert_one({
    "title": "School Reopening",
    "content": "School will reopen on Monday.",
    "created_at": datetime.now()
})

# ==========================================
# Library
# ==========================================

library_books.insert_one({
    "title": "Concepts of Physics",
    "author": "H.C. Verma",
    "available": True
})

# ==========================================
# Transport
# ==========================================

transport_routes.insert_one({
    "route_name": "Route A",
    "driver": "Ramesh Kumar",
    "bus_no": "UK07AB1234"
})

# ==========================================
# Inventory
# ==========================================

inventory.insert_one({
    "item_name": "Projector",
    "quantity": 5,
    "location": "Computer Lab"
})

# ==========================================
# Payroll
# ==========================================

payroll.insert_one({
    "teacher_id": teacher_id,
    "salary": 50000,
    "month": "June 2026"
})

print("🎉 ERP database seeded successfully!")