int score(String word) {
  word = word.toUpperCase();

  // Create a score map
  var letterLists = [
    'A, E, I, O, U, L, N, R, S, T',
    'D, G',
    'B, C, M, P',
    'F, H, V, W, Y',
    'K',
    'J, X',
    'Q, Z'
  ];
  var scores = [1, 2, 3, 4, 5, 8, 10];
  var scoreMap = <String, int>{};

  for (var i = 0; i < letterLists.length; i++) {
    var chars = letterLists[i].split(',').map((e) => e.replaceAll(' ', ''));
    for (var c in chars) {
      scoreMap[c] = scores[i];
    }
  }

  // Calculate score based on scoreMap
  var finalScore = 0;
  for (var i = 0; i < word.length; i++) {
    finalScore += scoreMap[word[i]]!;
  }
  return finalScore;
}
