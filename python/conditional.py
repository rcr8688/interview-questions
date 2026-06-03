# x=5
# if x > 2:
#   print('Five is greater than two!')
#   print('You have to use the same number of spaces in the same block of code, otherwise Python will give you an error:')

# x,y,z = 'orage','banana', 'cherry'
# print(x)
# print(y)
# print(z)

# x = y = z = "Orange"
# print(x)
# print(y)
# print(z)

# fruits = ['apple','banana','cherry']
# x,y,z = fruits
# print(x)
# print(y)
# print(z)


# r = 'awesome'

# def myfun():
#   print("python is "+r)

# myfun()

# def myfunc():
#   r='fantastic'
#   print("python is ", r)

# myfunc()
# print('out side function r value',r)

# def myfunc():
#   global x
#   x = "fantastic"

# myfunc()

# print("Python is " + x)


x = "awesome"

def myfunc():
  global x
  x = "fantastic"

myfunc()

print("Python is " + x)

for item in x:
  print(item)

txt = "The best things in life are free!"
print('best' in txt)

if 'free' in txt:
  print('yes, "free" is present')

if('expensice' not in txt):
  print("No, 'expensive' is NOT present.")

print(x[3])


bool(False)
bool(None)
bool(0)
bool("")
bool(())
bool([])
bool({})

def myBoolFun():
  return True

print(myBoolFun())

if myBoolFun():
  print('my bool is True')
else:
  print('my bool is false')

k = 100
sr = 'test' 
print(isinstance(k, int))
print(isinstance(sr, str))

numbers = [1, 2, 3, 4, 5]

if (count := len(numbers)) > 3:
  print(f'list of valus {count}')

t=9

print(t > 0 and t < 10)
print(t > 20 or t < 10)
print(not(t > 20 or t < 10))

x = [1, 2, 3]
y = [1, 2, 3]

print(x == y)
print(x is y)


text = "Hello World"

print("H" in text)
print("hello" in text)
print("z" not in text)