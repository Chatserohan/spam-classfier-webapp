

# SMS Spam Classifier Web App

This is a simple SMS Spam Classifier web application built using Flask for the backend. It uses a pre-trained machine learning model (`model.pkl`) and a text vectorizer (`vectorizer.pkl`) to classify SMS messages as spam or not spam.

## Features
- Classify an SMS message as "Spam" or "Not Spam".
- Clean and modern user interface with floating card layout and cold background gradient.
- Mobile-responsive design.
- Footer with social media icons and copyright information.

## Tech Stack
- Backend: Python, Flask
- Machine Learning: Scikit-learn (for the model)
- Frontend: HTML, CSS (for styling), Font Awesome (for social icons)
- Libraries:
  - Flask: Web framework for building the web application.
  - Pickle: To load the pre-trained model and vectorizer.
  - Scikit-learn: For machine learning model.
  - Font Awesome: For social media icons in the footer.

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Python 3.x
- Flask
- Pickle
- Scikit-learn
- Font Awesome (included via CDN in the project)

### Installing Dependencies

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/sms-spam-classifier.git
   cd sms-spam-classifier
   ```

2. Create a virtual environment:

   ```bash
   python -m venv venv
   ```

3. Activate the virtual environment:

   - On Windows:
     ```bash
     .\venv\Scripts\activate
     ```
   - On macOS/Linux:
     ```bash
     source venv/bin/activate
     ```

4. Install the required dependencies:

   ```bash
   pip install -r requirements.txt
   ```

   Make sure your `requirements.txt` file includes:

   ```text
   Flask
   scikit-learn
   pickle-mixin
   ```

## Usage

1. Ensure you have the following files in your project directory:
   - `model.pkl` (the trained spam classifier model)
   - `vectorizer.pkl` (the vectorizer used to transform the SMS text)

2. Run the Flask app:

   ```bash
   python app.py
   ```

3. Open your browser and go to `http://127.0.0.1:5000/` to view the SMS Spam Classifier application.

4. Enter an SMS message in the text input box and click the "Classify SMS" button to check if the message is spam or not.

## Project Structure

```
sms-spam-classifier/
│
├── app.py                  # Flask app to run the server and handle requests
├── model.pkl               # Trained machine learning model for spam classification
├── vectorizer.pkl          # Trained vectorizer for transforming SMS text
├── templates/
│   └── index.html          # HTML template for the front-end
└── static/
    └── style.css           # Custom styles for the front-end (optional, can be embedded)
```

### Important Files:

- app.py: The main Python file that contains the Flask web application and the routes to handle form submissions and predictions.
- model.pkl: The pre-trained machine learning model to classify messages as spam or ham.
- vectorizer.pkl: The vectorizer that was used to convert SMS text into numerical features for the model.

## How to Use

1. Enter an SMS message in the input field on the homepage.
2. Click "Classify SMS" to classify the SMS message as either "Spam" or "Not Spam".
3. The result will appear below the input field, indicating whether the SMS is Spam or Not Spam.

## Contributing

If you'd like to contribute to this project, feel free to open an issue or submit a pull request.

### Steps to Contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add feature'`).
5. Push to the branch (`git push origin feature-name`).
6. Open a pull request.

## Author

Rohan Chatse  
Email: rohancrchatse@gmail.com  
GitHub: [@chatserohan](https://github.com/Chatserohan)  
LinkedIn: [Rohan Chatse](https://www.linkedin.com/in/rohan-chatse-a662a01b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app)

