import json

country_allowed = ['United States', 'Canada', 'Mexico', 'Brazil', 'UK', 'Germany', 'Russia', 'France', 'Italy', 'Spain', 'Iran','Iraq', 'Afganstan',  'Saudi Arabia', 'Israel' , 'Nigeria', 'Egypt', 'Somalia',  'South Africa', 'India' , 'China' , 'Japan' , 'South Korea' ,'North Korea' , 'Vietnam' , 'Australia' , 'Sweden' , 'Indonesia' , 'Switzerland' , 'Greenland']

with open("obj.txt") as f:
    data = json.load(f)

with open("results2.json","a") as g:
   for i in data:
     if i['title'] not in country_allowed:
       i['color'] = 'rgba(0,0,0,1)'
       del i['groupId']
       del i['title']
       del i['selectable']
       json.dump(i,g,sort_keys=True,indent=4, separators=(',',': '))
     else:
       json.dump(i,g,sort_keys=True,indent=4, separators=(',',': '))
