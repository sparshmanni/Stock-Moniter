import requests

# replace the "demo" apikey below with your own key from https://www.alphavantage.co/support/#api-key
url = 'https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=OR2F4lYDDHTDLTMS'
r = requests.get(url)
data = r.json()

print(data)