thislist = ["apple", "banana", "cherry", "orange", "kiwi", "mango"]
thislist[1] ='blackcarret'
thislist[1:3]= ['puppy','darkchocle','asdf','testing', 'pushing data']
thislist.insert(2,'watermol')
thislist.append('end adding')
tropical = ["mango", "pineapple", "papaya"]
thislist.extend(tropical)
thistuple = ("kiwi", "orange")
thislist.extend(thistuple)
thislist.pop(0)
thislist.remove('orange')
del thislist[len(thislist)-1]
# thislist.clear()
print(len(thislist))
for item in thislist:
  print(item)
for i in range(len(thislist)):
  print(i,'test index',i)

k=0
while k < len(thislist):
  print(thislist[k])
  k += 1

newlist=[]
for item in thislist:
  if 'a' in item:
    newlist.append(item)
# print(newlist)
# print(thislist)

addNewlist =  [x for x in thislist if 'a' in x]
# print(addNewlist)
# newlistCh = ['hello' for x in thislist]
# print(newlistCh)
# thislist.sort()
# print(thislist)
# thisnumlist = [100, 50, 65, 82, 23]
# thisnumlist.sort()
# print(thisnumlist)
# thisnumlist.sort(reverse = True)
# print(thisnumlist)

# def myfunc(n):
#   return abs(n-50)

# thisnumlist.sort(key = myfunc)
# print(thisnumlist)

# thisuplist = ["banana", "Orange", "Kiwi", "cherry"]

# thisuplist.sort(key = str.lower)
# print(thisuplist)

# thisuplist.reverse()
# print(thisuplist)

# newThisListcp = thisuplist.copy()
# newThisListcp.append("ranking")
# print(newThisListcp)
# print(thisuplist)


list1 = ["a", "b", "c"]
list2 = [1, 2, 3]

list3 = list1 + list2
print(list3)