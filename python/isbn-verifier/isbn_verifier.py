def verify(isbn):
    isbn = isbn.replace('-', '')
    isbn9 = isbn[:-1]
    if len(isbn9) != 9:
    	return False
    check_digit = isbn[-1:]
    isbn_arr = list(map(int, isbn9))

    if check_digit.isdigit():
    	isbn_arr.append(int(check_digit))
    elif check_digit == 'X':
    	isbn_arr.append(10)
    else:
    	return False
    return (isbn_arr[0] * 10 + isbn_arr[1] * 9 + isbn_arr[2] * 8 + 
    	isbn_arr[3] * 7 + isbn_arr[4] * 6 + isbn_arr[5] * 5 + 
    	isbn_arr[6] * 4 + isbn_arr[7] * 3 + isbn_arr[8] * 2 + 
    	isbn_arr[9] * 1) % 11 == 0
