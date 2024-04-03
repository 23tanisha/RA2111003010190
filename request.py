import requests

# Replace with your actual endpoint and credentials
auth_url = 'http://20.244.56.144/test/auth'
payload = {
    "companyName": "GoMarket",
    "clientId": "74c1fbc6-ef6f-4510-b6f6-bc4f1035e1f1",
    "clientSecret": "MUACIYfcUBLpuuCr",
    "ownerName": "Tanisha Nandwana",
    "ownerEmail": "tn7844@srmist.edu.in",
    "rollNo": "RA2111003010190",
    "accessCode": "bntKpm"
}

# Send POST request to obtain the authorization token
response = requests.post(auth_url, json=payload)

# Assuming the response contains JSON with the token information
token_data = response.json()

print(token_data)
