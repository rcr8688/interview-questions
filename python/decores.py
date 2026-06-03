# def changecase(func):
#   print('in changecase out ')
#   def myinner():
#     print('in changecase myinner ',func)
#     return func().upper()
#   return myinner

# @changecase
# def myfunction():
#   print('in def')
#   return "Hello Sally"

# print(myfunction())


def changecase(func):
  def myinner(x):
    return func(x).upper()
  return myinner

@changecase
def myfunction(nam):
  return "Hello " + nam

print(myfunction("ravi"))