import requests

url = "http://20.244.56.144/test/register"
data = {
    "companyName": "GoMarket",
    "ownerName": "Tanisha Nandwana",
    "ownerEmail": "tn7844@srmist.edu.in",
    "rollNo": "RA2111003010190",
    "accessCode": "bntKpm"
  }
response = requests.post(url, json=data)

print(response.text)  # To see the response from the server
