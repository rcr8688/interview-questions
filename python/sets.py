thisset = {"apple", "banana", "cherry", "apple"}

# print("banana" in thisset)

# for x in thisset:
  # print(x)

# print("banana" not in thisset)

thisset.add("orange")
thisset.add("apple")
thisset.remove("banana")

print(thisset)

thissetdup = {"apple", "banana", "cherry", True, 1, 2}

print('intersection',thisset.intersection(thissetdup))
print('difference',thisset.difference(thissetdup))
print('symmetric_difference',thisset.symmetric_difference(thissetdup))
print(thissetdup)

print(len(thissetdup))

set1 = {"a", "b", "c"}
set2 = {1, 2, 3}

set3 = set1.union(set2)
set4 = set1 | set2
print(set3)
print(set4)

x = {"a", "b", "c"}
y = (1, 2, 3)

z = x.union(y)
print(z)














Method	Shortcut	Description
add()	 	Adds an element to the set
clear()	 	Removes all the elements from the set
copy()	 	Returns a copy of the set
difference()	-	Returns a set containing the difference between two or more sets
difference_update()	-=	Removes the items in this set that are also included in another, specified set
discard()	 	Remove the specified item
intersection()	&	Returns a set, that is the intersection of two other sets
intersection_update()	&=	Removes the items in this set that are not present in other, specified set(s)
isdisjoint()	 	Returns whether two sets have a intersection or not
issubset()	<=	Returns True if all items of this set is present in another set
 	<	Returns True if all items of this set is present in another, larger set
issuperset()	>=	Returns True if all items of another set is present in this set
 	>	Returns True if all items of another, smaller set is present in this set
pop()	 	Removes an element from the set
remove()	 	Removes the specified element
symmetric_difference()	^	Returns a set with the symmetric differences of two sets
symmetric_difference_update()	^=	Inserts the symmetric differences from this set and another
union()	|	Return a set containing the union of sets
update()	|=	Update the set with the union of this set and others
