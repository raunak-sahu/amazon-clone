import bcrypt
import jwt
from pydantic import BaseModel
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pymongo import MongoClient

app = FastAPI()
SECRET_KEY = "amazonclone"
# MongoDB Connection
client = MongoClient(
    "mongodb+srv://raunak_sahu:raunak20sep@cluster0.q5of16e.mongodb.net/?appName=Cluster0"
)

db = client["amazonDB"]

product_collection = db["products"]
user_collection=db["users"]
cart_collection=db["carts"]
# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Product Model
class Product(BaseModel):
    id: int
    title: str
    price: str
    category: str
    image: str

class User(BaseModel):
    username:str
    email:str
    password:str
# Home Route
@app.get("/")
def home():
    return {"message": "Backend running"}

class CartItem(BaseModel):
    email: str
    product: dict
# GET Products
@app.get("/products")
def get_products():

    all_products = list(
        product_collection.find({}, {"_id": 0})
    )

    return all_products

@app.post("/signup")
def signup(user: User):
    existing_user=user_collection.find_one(
        {"email":user.email}
    )
    if existing_user:
        return{
            "message":"User already exists"
        }
    hashed_password=bcrypt.hashpw(
        user.password.encode("utf-8"),
        bcrypt.gensalt()
    )
    new_user={
        "username": user.username,
        "email":user.email,
        "password":hashed_password.decode("utf-8")
        
    }
    user_collection.insert_one(new_user)
    return {
    "message":"Signup successful"
    }
@app.post("/login")
def login(user: User):

    existing_user = user_collection.find_one(
        {"email": user.email}
    )

    if not existing_user:

        return {
            "message": "User not found"
        }

    password_correct = bcrypt.checkpw(
        user.password.encode("utf-8"),
        existing_user["password"].encode("utf-8")
    )

    if not password_correct:

        return {
            "message": "Incorrect password"
        }

    token = jwt.encode(
        {"email": user.email},
        SECRET_KEY,
        algorithm="HS256"
    )

    return {
        "message": "Login successful",
        "token": token
    }
@app.post("/add-to-cart")
def add_to_cart(item: CartItem):

    cart_collection.insert_one(
        item.dict()
    )

    return {
        "message": "Item added to cart"
    }
@app.get("/get-cart/{email}")
def get_cart(email: str):

    cart_items = list(
        cart_collection.find(
            {"email": email},
            {"_id": 0}
        )
    )

    return cart_items
@app.post("/add-product")
def add_product(product: Product):

    product_collection.insert_one(
        product.dict()
    )

    return {
        "message": "Product added successfully"
    }