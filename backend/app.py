from flask import Flask

app = Flask(__name__)

@app.route("/", methods=["POST", "GET"])
def main():
    return "Hello from backend!"

if __name__ == "__main__":
    app.run(debug=True, host="localhost", port=5000) 