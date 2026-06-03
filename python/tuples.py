tuples = ('apple','banana','cherry') 
print(tuples)

tuple1 = ("abc", 34, True, 40, "male")

print(tuple1)

mytuple = ("apple", "banana", "cherry")

print(type(mytuple))

thistuple = ("apple", "banana", "cherry", "orange", "kiwi", "melon", "mango")
print(thistuple[:5])
y = list(thistuple)
y.append('orange')
thistuple = tuple(y)
print(y)
thistuple = ("apple", "banana", "cherry")
if "apple" in thistuple:
  print("Yes, 'apple' is in the fruits tuple")


fruits = ("apple", "banana", "cherry", "strawberry", "raspberry")

(green, yellow, *red) = fruits

print(green)
print(yellow)
print(red)