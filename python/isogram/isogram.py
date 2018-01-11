def is_isogram(string):
    for c in string.lower():
    	if c != ' ' and c != '-' and string.lower().count(c) > 1:
    		return False
    return True
