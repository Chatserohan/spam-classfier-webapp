import pickle
from flask import Flask, render_template, request

app = Flask(__name__)

# Load the trained model and vectorizer
with open('model.pkl', 'rb') as model_file:
    model = pickle.load(model_file)

with open('vectorizer.pkl', 'rb') as vectorizer_file:
    vectorizer = pickle.load(vectorizer_file)

# Home route to display the form
@app.route('/')
def home():
    return render_template('index.html')

# Route to classify SMS
@app.route('/predict', methods=['POST'])
def predict():
    if request.method == 'POST':
        # Get the SMS message from the form
        sms_message = request.form['sms_message']

        # Transform the message using the loaded vectorizer
        sms_vector = vectorizer.transform([sms_message])

        # Predict the spam/ham (0 = ham, 1 = spam)
        prediction = model.predict(sms_vector)

        # Determine the result based on prediction
        if prediction[0] == 1:
            result = 'Spam'
        else:
            result = 'Not Spam'

        # Return the result to the frontend
        return render_template('index.html', result=result, sms_message=sms_message)

if __name__ == "__main__":
    app.run(debug=True)
