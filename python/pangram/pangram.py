def is_pangram(sentence):
	chars = list(filter(str.isalpha, sentence.lower()))
	return len(set(chars)) == 26
